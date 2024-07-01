import React from 'react'
import aboutimg from '../../assets/about.png'
export default function About() {
    return (
        <section className="about" id="about">
            <h1 className="heading">about us</h1>
            <div className="row">
                <div className="content">
                    <h3>my mission is to give you a guideline for your health.</h3>
                    <p>Welcome to Full Belly, your trusted source for personalized diet recommendations tailored to enhance your health and well-being. Our mission is to empower you with expert guidance on nutrition, helping you achieve your wellness goals through informed dietary choices.

                        At Full Belly, we understand that a balanced diet is essential for a healthy lifestyle. Whether you're looking to manage weight, improve energy levels, or optimize your overall health, our tailored diet plans and nutritional advice are designed to meet your unique needs.

                        Explore our comprehensive resources, including meal plans, nutritional tips, and expert articles crafted to support your journey towards better health. Let us guide you towards a healthier lifestyle, one nutritious choice at a time.</p>
                    <a href="/" className="btn"> read more</a>
                </div>
                <div className="image">
                    <img src={aboutimg} alt="" />
                </div>
            </div>
        </section>
    )
}
