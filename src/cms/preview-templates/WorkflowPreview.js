import React from 'react'
import PropTypes from 'prop-types'
import { WorkflowTemplate } from '../../templates/workflow-page'

const WorkflowPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data', 'workflowjson']);
  return (
    <WorkflowTemplate
      workflowjson={data && data.toJS()}
    />
  )
}

WorkflowPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default WorkflowPagePreview
