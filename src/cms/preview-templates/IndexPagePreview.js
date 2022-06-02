// import React from 'react'
// import PropTypes from 'prop-types'
// import { IndexPageTemplate } from '../../templates/index-page'
// import { IndexPagePreview } from '../../templates/xformation-post'

// import Layout from './Layout';

// const IndexPagePreview = ({ entry }) => {
//   const data = entry.getIn(['data']).toJS()
//   if (data) {
//     return (
//       <Layout>
//         <IndexPagePreview
//           bannercontent={data.bannercontent}
//           usecases={data.usecases}
//           solutions={data.solutions}
//           goals={data.goals}
//           partners={data.partners}
//           successstories={data.successstories}
//         />
//       </Layout>
//     )
//   } else {
//     return <div>Loading...</div>
//   }
// }

// IndexPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
// }

// export default IndexPagePreview
import React from 'react'
import PropTypes from 'prop-types'
import { IndexPagePreview } from '../../templates/xformation-post'
import Layout from './Layout';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  const entrySlider = entry.getIn(['data', 'slider'])
  const slider = entrySlider ? entrySlider.toJS() : []
  const entryScenarios = entry.getIn(['data', 'scenarios']);
  const scenarios = entryScenarios ? entryScenarios.toJS() : []
  const entryModules = entry.getIn(['data', 'modules']);
  const modules = entryModules ? entryModules.toJS() : []
  if(data){
    console.log(scenarios)
    return (
        <IndexPagePreview
          slider={slider}
          scenarios={scenarios}
          modules={modules}
        />
    )
  }else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default XformationPagePreview
