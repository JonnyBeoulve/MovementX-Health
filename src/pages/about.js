import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'

const About = props => (
    <Layout>
        <Helmet>
            <title>About</title>
            <meta name="description" content="About page" />
        </Helmet>
        <BannerAbout />
        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>The MX Way</h2>
                    </header>
                    <p>We believe healthcare should be simple, efficient, flexible, and precise. Thats why we are doing our best to make your experience as seamless and transparent as possible. We hold ourselves to the highest standards with your care and are always focused on how to create the best experience for you - we call it the MX Way.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic01} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Quality over Quantity, Precision over Generalization.</h3>
                            </header>
                            <p>Healthcare is about caring for your health, not about productivity and cost. We provide direct, one-on-one care precisely tailored to you and take as much time with you as we need.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic02} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Simplicity and Transparency.</h3>
                            </header>
                            <p>Prior to confirming your session, you will know who you are seeing (including their background and specialties), where you will be seeing them, and how much your session will cost. Once you confirm, the rest is on us.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic03} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Family</h3>
                            </header>
                            <p>It’s one of our favorite words. We care for every patient like they are our mother, grandmother, or brother - with compassion, empathy, and love. As soon as you sign up for MX, you’re part of our family.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default About