import React from 'react'
import PropTypes from 'prop-types'
import { NewDashboardTemplate } from '../../templates/new-dashboard-page'

const NewDashboardPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data', 'scenarios']);
  return (
    <NewDashboardTemplate
    scenarios={data && data.toJS()}
    />
  )
}

NewDashboardPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default NewDashboardPreview
