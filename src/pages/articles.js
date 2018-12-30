import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Articles = props => (
    <Layout>
        <Helmet>
            <title>Articles</title>
            <meta name="description" content="Articles Page" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Elements</h1>
                    </header>
                    <h2 id="content">Sample Content</h2>
                    <p>Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing.</p>
                </div>
            </section>
        </div>
    </Layout>
)

export default Articles