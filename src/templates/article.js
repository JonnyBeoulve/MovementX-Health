import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import pic11 from '../assets/images/pic11.jpg'

/* Define the template for an article. */
export default function Template({ data }) {
  const article = data.markdownRemark

  return (
    <Layout>
      <div id="main" className="alt">
          <section id="one">
              <div className="inner">
                  <header className="major">
                      <h1>{article.frontmatter.title}</h1>
                  </header>
                  <span className="image main"><img src={pic11} alt="" /></span>
                  <h4>
                    Written by {article.frontmatter.author} on {article.frontmatter.date}
                  </h4>
                  <div dangerouslySetInnerHTML={{ __html: article.html }} />
              </div>
          </section>
      </div>
    </Layout>
  )
}

export const articleQuery = graphql`
  query ArticleByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
