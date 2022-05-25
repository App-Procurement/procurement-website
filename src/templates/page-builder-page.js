import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { PageEditor } from '../components/PageBuilder';
import Footer from '../components/Footer';
import logo from '../img/logo.png';

export const PageBuilderTemplate = () => {
    return (
        <div className="pagebuilder-container">
            <header className="d-flex flex-nowrap justify-content-between align-items-center w-100 py-4 py-lg-0 header">
                <Link to='/' className='flex-grow-1'>
                    <img src={logo} alt="Synectiks logo" />
                </Link>
            </header>
            <PageEditor />
            <Footer />
        </div>
    )
}

PageBuilderTemplate.propTypes = {
    Surveyjson: PropTypes.object,
}

const PageBuilderPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <PageBuilderTemplate />
    )
}

PageBuilderPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default PageBuilderPage

export const pageBuilderPageQuery = graphql`
  query PageBuilderPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
          title
      }
    }
  }
`
