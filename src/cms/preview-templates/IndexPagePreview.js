import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import Layout from './Layout';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <Layout>
        <IndexPageTemplate
          bannercontent={data.bannercontent}
          usecases={data.usecases}
          solutions={data.solutions}
          goals={data.goals}
          partners={data.partners}
          successstories={data.successstories}
        />
      </Layout>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default IndexPagePreview
