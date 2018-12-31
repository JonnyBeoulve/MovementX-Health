import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import pic11 from '../pages/articles/images/healthy-living.jpg'

/* Define the template for an article. */
export default function Template({ data }) {
  const article = data.markdownRemark

  console.log(pic11);

  return (
    <Layout>
      <div id="main" className="alt">
          <section id="one">
              <div className="inner">
                <header className="major">
                    <h1>{article.frontmatter.title}</h1>
                </header>
                <img className="article-header" src={pic11} alt="Physical therapy health" />
                <h4>
                  Written by {article.frontmatter.author} on {article.frontmatter.date}
                </h4>
                <div dangerouslySetInnerHTML={{ __html: article.html }} />
                <hr />
                <aside>
                  <p>Tags: {article.frontmatter.tags}</p>
                </aside>
              </div>
          </section>
         <section id="two">
            <div className="inner">
                <header className="major">
                    <h2>Let's get moving!</h2>
                </header>
                <p>Sign up within five minutes and browse physical therapists in your area.</p>
                <ul className="actions">
                    <li><a href="https://movement-x.com/" className="button next">Get Moving</a></li>
                </ul>
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
        date
        title
        author
        tags
        image1
      }
    }
  }
`
