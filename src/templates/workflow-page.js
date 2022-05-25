import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WorkflowComponent from '../components/WorkflowComponent';

export const WorkflowTemplate = ({
    workflowjson
}) => {
    const data = workflowjson ? workflowjson.data : '[]';
    return (
        <section className="section">
            <div className="container content">
                <div className="">
                    <WorkflowComponent data={data} />
                </div>
            </div>
        </section>
    )
}

WorkflowTemplate.propTypes = {
    workflowjson: PropTypes.object,
}

const WorkflowPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <WorkflowTemplate
                workflowjson={frontmatter.workflowjson}
            />
        </Layout>
    )
}

WorkflowPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default WorkflowPage

export const workflowPageQuery = graphql`
  query WorkflowPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        workflowjson {
            data
        }
      }
    }
  }
`
