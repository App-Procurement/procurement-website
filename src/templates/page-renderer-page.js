import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { PageRendererComponent } from '../components/PageRenderer';
import logo from '../img/logo.png';

export const PageRenderTemplate = ({
    pagerendererjson
}) => {
    const data = pagerendererjson ? JSON.parse(pagerendererjson.data) : [];
    return (
        <div className="pagebuilder-container">
            <header className="d-flex flex-nowrap justify-content-between align-items-center w-100 py-4 py-lg-0 header">
                <Link to='/' className='flex-grow-1'>
                    <img src={logo} alt="Synectiks logo" />
                </Link>
            </header>
            <PageRendererComponent data={data} />
        </div>
    )
}

PageRenderTemplate.propTypes = {
    pagerendererjson: PropTypes.object,
}

const PageRenderPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <PageRenderTemplate
            pagerendererjson={frontmatter.pagerendererjson}
        />
    )
}

PageRenderPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    })
}

export default PageRenderPage

export const PageRenderPageQuery = graphql`
  query PageRenderPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        pagerendererjson {
            data
        }
      }
    }
  }
`
