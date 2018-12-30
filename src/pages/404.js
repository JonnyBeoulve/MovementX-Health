import React from 'react'
import Layout from '../components/layout'

/* This is the page that's rendered upon 404 error. */
const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>NOT FOUND</h1>
                <p>There's no movement to be found here. Try another page!</p>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
