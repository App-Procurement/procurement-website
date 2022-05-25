import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class ScenarioRoll extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
            <div className="columns is-multiline">
                {posts &&
                    posts.map(({ node: post }) => (
                        <div className="is-parent column is-6" key={post.id}>
                            <article
                                className={`blog-list-item tile is-child box notification ${post.frontmatter.featuredpost ? 'is-featured' : ''
                                    }`}
                            >
                                <header>
                                    <p className="post-meta">
                                        <Link
                                            className="title has-text-primary is-size-4"
                                            to={post.fields.slug}
                                        >
                                            {post.frontmatter.title}
                                        </Link>
                                    </p>
                                </header>
                                <p>
                                    {post.excerpt}
                                    <br />
                                    <br />
                                    <Link className="button" to={post.fields.slug}>
                                        Keep Reading →
                                    </Link>
                                </p>
                            </article>
                        </div>
                    ))}
            </div>
        )
    }
}

ScenarioRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query ScenarioRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "scenario-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <ScenarioRoll data={data} count={count} />}
    />
)
