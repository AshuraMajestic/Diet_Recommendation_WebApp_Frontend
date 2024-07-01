import React from 'react'
import img1 from '../../assets/pic-1.png'
import img2 from '../../assets/pic-2.png'
import img3 from '../../assets/pic-3.png'
import img4 from '../../assets/pic-4.png'
import img5 from '../../assets/pic-5.png'
import img6 from '../../assets/pic-6.png'
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Reviews() {
    return (
        <section className="reviews" id="review">
            <h1 className="heading">client's reviews</h1>
            <Swiper
                className="review-slider"
                loop={true}
                grabCursor={true}
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                }}>
                <SwiperSlide className="slide">
                    <p>Thanks to Full Belly, I've completely revamped my eating habits. The personalized diet plan was easy to follow and tailored perfectly to my needs. Highly recommend!</p>
                    <div className="user">
                        <img src={img2} alt="" />
                        <div className="info">
                            <h3>Sarah B.</h3>
                            <span>client</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p>I've tried many diets before, but [Your Website/Company Name] stands out. Their nutrition experts provided insightful advice that made a real difference. Feeling healthier and more energetic!</p>
                    <div className="user">
                        <img src={img1} alt="" />
                        <div className="info">
                            <h3>John D.</h3>
                            <span>client</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p>Choosing [Your Website/Company Name] was one of the best decisions I've made for my health. The support and guidance in planning my diet have been invaluable. Thank you!</p>
                    <div className="user">
                        <img src={img3} alt="" />
                        <div className="info">
                            <h3>Emily S.</h3>
                            <span>client</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p>I've struggled with maintaining a balanced diet until I found [Your Website/Company Name]. Their approach is not only effective but also sustainable. Finally feeling in control of my health!</p>
                    <div className="user">
                        <img src={img4} alt="" />
                        <div className="info">
                            <h3>Maichel R.</h3>
                            <span>client</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p>The personalized diet plan from [Your Website/Company Name] was exactly what I needed. It's practical, easy to follow, and fits into my lifestyle seamlessly. Couldn't be happier with the results!</p>
                    <div className="user">
                        <img src={img5} alt="" />
                        <div className="info">
                            <h3>john deo</h3>
                            <span>client</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section >
    )
}
