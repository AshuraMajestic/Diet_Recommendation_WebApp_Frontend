import React from 'react'
import Nav from './Nav'
import About from './About'
import Services from './Services'
import Diet from './Diet'
import Reviews from './Reviews'
import Newsletter from './Newsletter'
import Footer from './Footer'


export default function Home() {
    return (
        <>
            <div>
                <Nav />
            </div>
            <section className="home" id="home">
                <div className="content">
                    <h3>welcome to the place full of healthy food</h3>

                </div>
            </section>
            <About />
            <Services />
            <Diet />
            <Reviews />
            <Newsletter />
            <Footer />
        </>
    )
}
