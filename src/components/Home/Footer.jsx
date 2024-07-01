import React from 'react'

export default function Footer() {
    return (
        <section className="footer" id='footer'>
            <div className="box-container">
                <div className="box">
                    <h3>quick links</h3>
                    <a href="#home"> <i className="fas fa-arrow-right"></i>home</a>
                    <a href="#about"> <i className="fas fa-arrow-right"></i>about</a>
                    <a href="#services"> <i className="fas fa-arrow-right"></i>services</a>
                    <a href="#diet"> <i className="fas fa-arrow-right"></i>diet</a>
                    <a href="#blog"> <i className="fas fa-arrow-right"></i>blog</a>
                    <a href="#reviews"> <i className="fas fa-arrow-right"></i>reviews</a>
                </div>

                <div className="box">
                    <h3>extra links</h3>
                    <a href="#"> <i className="fas fa-arrow-right"></i>my account</a>
                    <a href="#"> <i className="fas fa-arrow-right"></i>my order</a>
                    <a href="#"> <i className="fas fa-arrow-right"></i>my wishlist</a>
                    <a href="#"> <i className="fas fa-arrow-right"></i>ask questions</a>
                    <a href="#"> <i className="fas fa-arrow-right"></i>terms of use</a>
                    <a href="#"> <i className="fas fa-arrow-right"></i>privacy policy</a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#"> <i className="fas fa-phone"></i>+123-456-7890</a>
                    <a href="#"> <i className="fas fa-phone"></i>+123-765-2568</a>
                    <a href="#"> <i className="fas fa-envelope"></i>ashuramajestic@gmail.com</a>
                    <a href="#"> <i className="fas fa-map"></i>Ahmedabad,Gujarat</a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="#"> <i className="fab fa-facebook-f"></i>facebook</a>
                    <a href="#"> <i className="fab fa-twitter"></i>twitter</a>
                    <a href="#"> <i className="fab fa-instagram"></i>instagram</a>
                    <a href="#"> <i className="fab fa-linkedin"></i>linkedin</a>
                    <a href="#"> <i className="fab fa-github"></i>github</a>
                </div>

            </div>
            <div className="credit">created by <span>Team Innovative</span> | all rights are reserved!</div>
        </section>
    )
}
