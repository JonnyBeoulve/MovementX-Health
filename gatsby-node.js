const path = require('path')

/* Use CreatePages API to create and register pages using template file. */
exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators

    const articleTemplate = path.resolve('src/templates/article.js')

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        id
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
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: articleTemplate
            })
        })
    })
}
