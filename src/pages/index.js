import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

/* This is the Home page. */
class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="MovementX Health"
                    meta={[
                        { name: 'description', content: 'A professional blog for physical therapy health information.' },
                        { name: 'keywords', content: 'physical therapy, health, pt, doctor' },
                    ]}
                >
                </Helmet>
                <Banner />
                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Healthy living</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                            </header>
                            <Link to="/healthy-living" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Article 2</h3>
                                <p>feugiat amet tempus</p>
                            </header>
                            <Link to="/healthy-living" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Article 3</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/healthy-living" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Article 4</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/healthy-living" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Article 5</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/healthy-living" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Article 6</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/healthy-living" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Let's get moving!</h2>
                            </header>
                            <p>Sign up within five minutes and browse physical therapists in your area.</p>
                            <ul className="actions">
                                <li><a href="https://movement-x.com/" target="_blank" className="button next">Get Moving</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex