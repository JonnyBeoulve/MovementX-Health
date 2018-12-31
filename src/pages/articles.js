import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

/* This page will list all articles. */
const Articles = ({data}) => (
    <Layout>
        <Helmet>
            <title>Articles</title>
            <meta name="description" content="Articles Page" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Articles</h1>
                    </header>
                    <p>Below you will find various articles written by our doctors of physical therapy at MovementX.</p>
                    {data.allMarkdownRemark.edges.map(article => (
                        <div key={article.node.id}>
                            <h3>{article.node.frontmatter.title}</h3>
                            <small>Article written by {article.node.frontmatter.author} on {article.node.frontmatter.date}</small>
                            <br />
                            <br />
                            <Link to={article.node.frontmatter.path}>Read More</Link>
                            <br />
                            <hr />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </Layout>
)

/* Query for all articles in markdown folder. */
export const pageQuery = graphql`
    query ArticleIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                    excerpt
                }
            }
        }
    }
`

export default Articles