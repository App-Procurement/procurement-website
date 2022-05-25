import React from 'react'
import PropTypes from 'prop-types'
import { ScenarioPageTemplate } from '../../templates/scenario-post'

const ScenarioPagePreview = ({ entry }) => {
  const entrySlider = entry.getIn(['data', 'slider'])
  const slider = entrySlider ? entrySlider.toJS() : []
  const entryScenarios = entry.getIn(['data', 'scenarios']);
  const scenarios = entryScenarios ? entryScenarios.toJS() : []
  return (
    <ScenarioPageTemplate
      slider={slider}
      scenarios={scenarios}
    />
  )
}

ScenarioPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ScenarioPagePreview
