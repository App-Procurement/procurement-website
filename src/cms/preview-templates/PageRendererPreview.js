import React from 'react'
import PropTypes from 'prop-types'
import { PageRenderTemplate } from '../../templates/page-renderer-page'

const PageRendererPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data', 'pagerendererjson']);
  return (
    <PageRenderTemplate
      pagerendererjson={data && data.toJS()}
    />
  )
}

PageRendererPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PageRendererPreview
