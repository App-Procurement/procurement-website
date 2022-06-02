import React from 'react'
import PropTypes from 'prop-types'
import { XformationPageTemplate } from '../../templates/xformation-post'
import Layout from './Layout';

const XformationPagePreview = ({ entry }) => {
  const entrySlider = entry.getIn(['data', 'slider'])
  const slider = entrySlider ? entrySlider.toJS() : []
  const entryScenarios = entry.getIn(['data', 'scenarios']);
  const scenarios = entryScenarios ? entryScenarios.toJS() : []
  const entryModules = entry.getIn(['data', 'modules']);
  const modules = entryModules ? entryModules.toJS() : []
  if(data){
    return (
      <Layout>
        <XformationPageTemplate
          slider={slider}
          scenarios={scenarios}
          modules={modules}
        />
      </Layout>
    )
  }else {
    return <div>Loading...</div>
  }
}

XformationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default XformationPagePreview
