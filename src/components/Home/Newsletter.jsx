import React from 'react'

export default function Newsletter() {
    return (
        <section className="newsletter" id='newsletter'>
            <div className="content">
                <h1 className="heading">subscribe now</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam et labore nobis ducimus consequuntur qui eos fugit expedita veniam maxime delectus, fugiat necessitatibus, dolorum nesciunt quidem at reprehenderit? Inventore, molestiae?</p>
                <form action="">
                    <input type="email" placeholder="enter your email" className="email" />
                    <input type="submit" value="subscribe" className="btn" />
                </form>
            </div>
        </section>
    )
}
