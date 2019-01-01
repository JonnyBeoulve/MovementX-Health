import React from 'react'

/* This is the front page banner for the page. */
const Banner = props => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Move at your Best.</h1>
            </header>
            <div className="content">
                <p>Our team of licensed physical therapists are here <br />
                to help you live a happier and healthier life.</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Read More</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
