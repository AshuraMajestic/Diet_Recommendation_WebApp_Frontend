import React from 'react'

import img1 from '../../assets/service-1.png'
import img2 from '../../assets/service-2.png'
import img3 from '../../assets/service-3.png'

export default function Services() {
    return (
        <section className="services" id="services">
            <h1 className="heading">our services</h1>
            <div className="box-container">
                <div className="box">

                    <div className="icon">
                        <img src={img1} alt="" />
                    </div>
                    <div className="content">
                        <h3>Arranging a Nutrition Plan</h3>
                        <div className="line"></div>
                        <p>Creating a personalized nutrition plan is crucial for maintaining a healthy lifestyle. It involves thoughtful consideration of your dietary needs and preferences.</p>
                        <ul>
                            <li><i className="fas fa-check"></i>Assess your current dietary habits.</li>
                            <li><i className="fas fa-check"></i>Set realistic goals based on your health objectives.</li>
                            <li><i className="fas fa-check"></i>Choose a variety of nutrient-dense foods.</li>
                            <li><i className="fas fa-check"></i>Monitor your progress and adjust your plan as needed.</li>
                        </ul>
                    </div>



                </div>

                <div className="box">

                    <div className="icon">
                        <img src={img2} alt="" />
                    </div>
                    <div className="content">
                        <h3>Always Looking for Your Well Being</h3>
                        <div className="line"></div>
                        <p>Always looking after your health and nutrioents needs.</p>
                        <ul>
                            <li><i className="fas fa-check"></i>Assess your current dietary habits.</li>
                            <li><i className="fas fa-check"></i>Set realistic goals based on your health objectives.</li>
                            <li><i className="fas fa-check"></i>Choose a variety of nutrient-dense foods.</li>
                            <li><i className="fas fa-check"></i>Monitor your progress and adjust your plan as needed.</li>
                        </ul>
                    </div>



                </div>

                <div className="box">

                    <div className="icon">
                        <img src={img3} alt="" />
                    </div>
                    <div className="content">
                        <h3>Planning Your Diet Using Experts</h3>
                        <div className="line"></div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, itaque.</p>
                        <ul>
                            <li><i className="fas fa-check"></i>Consult with nutrition experts to personalize your diet.</li>
                            <li><i className="fas fa-check"></i>Receive tailored recommendations based on your health goals.</li>
                            <li><i className="fas fa-check"></i>Explore diverse food options to ensure balanced nutrition.</li>
                            <li><i className="fas fa-check"></i>Monitor progress and make adjustments for optimal results.</li>
                        </ul>
                    </div>


                </div>
            </div>
        </section>
    )
}
