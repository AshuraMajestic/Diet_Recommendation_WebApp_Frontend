import React, { useState, useEffect } from 'react';

import diet1 from '../../assets/diet-1.png';
import diet2 from '../../assets/diet-2.png';
import diet3 from '../../assets/diet-3.png';
import diet4 from '../../assets/diet-4.png';
import dietBlog1 from '../../assets/diet_blog1.jpg';
import dietBlog2 from '../../assets/diet_blog2.jpg';
import dietBlog3 from '../../assets/diet_blog3.jpg';
import dietBlog4 from '../../assets/diet_blog4.jpg';
import dietBlog5 from '../../assets/diet_blog5.jpg';
import dietBlog6 from '../../assets/diet_blog6.jpg';

const Diet = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredFoodItems, setFilteredFoodItems] = useState([]);
    const [user, setUser] = useState(null);
    const [bmr, setBmr] = useState(null);
    const [dailyCalories, setDailyCalories] = useState(null);

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            fetchUserData(JSON.parse(auth));
        }
    }, []);

    const fetchUserData = async (userId) => {
        try {
            const response = await fetch(`http://localhost:5000/users/${userId}`);
            const data = await response.json();
            if (response.ok) {
                setUser(data); // Set user data in state

                // Constructing the fetch POST request for food items
                const foodItemsUrl = 'http://localhost:5000/food-items';
                const foodItemsPayload = {
                    weight: data.weight,
                    height: data.height,
                    age: data.age,
                    gender: data.gender,
                    activityLevel: data.activityLevel
                };

                const foodItemsResponse = await fetch(foodItemsUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(foodItemsPayload)
                });

                if (foodItemsResponse.ok) {
                    const { bmr, dailyCalories, filteredFoodItems } = await foodItemsResponse.json();
                    setBmr(bmr);
                    setDailyCalories(dailyCalories);
                    setFilteredFoodItems(filteredFoodItems);
                } else {
                    console.error('Failed to fetch food items:', await foodItemsResponse.json());
                }
            } else {
                console.error("Failed to fetch user data:", data.error);
                // Handle error fetching user data (e.g., show error message)
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            // Handle network errors or other exceptions
        }
    };

    const fetchFoodItems = async () => {
        try {

            const foodItemsUrl = 'http://localhost:5000/all-food-item';
            const response = await fetch(foodItemsUrl);
            if (response.ok) {
                const filteredFoodItems = await response.json();
                setFilteredFoodItems(filteredFoodItems);
            } else {
                console.error('Failed to fetch food items:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching food items:', error);
        }
    };
    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        fetchFoodItems();
    };

    const filters = [
        { name: 'all', img: diet1 },
        { name: 'breakfast', img: diet2 },
        { name: 'lunch', img: diet3 },
        { name: 'dinner', img: diet4 }
    ];

    const blogImages = [dietBlog1, dietBlog2, dietBlog3, dietBlog4, dietBlog5, dietBlog6];

    return (
        <section className="diet" id="diet">
            <h1 className="heading">Diet Plan</h1>
            <ul className="controls">
                {filters.map(filter => (
                    <li
                        key={filter.name}
                        className={`buttons ${activeFilter === filter.name ? 'active' : ''}`}
                        onClick={() => handleFilterClick(filter.name)}
                    >
                        <img src={filter.img} alt={filter.name} />
                        <h3>{filter.name}</h3>
                    </li>
                ))}
            </ul>

            {filteredFoodItems.length > 0 && (
                <div className="food-items image-container">
                    {filteredFoodItems.map((item, index) => (
                        <div className="box" key={item._id}>
                            <div className="image">
                                <img src={blogImages[index % blogImages.length]} alt={`Blog Image ${index + 1}`} />
                            </div>
                            <div className="content">
                                <a href={`/food/${item._id}`} className="link">{item.food_items}</a>
                                <p>Calories: {item.Calories}</p>
                                <div className="icon">
                                    <span><i className="fas fa-clock"></i> 11 June, 2023</span>
                                    <span><i className="fas fa-user"></i> by admin</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Diet;
