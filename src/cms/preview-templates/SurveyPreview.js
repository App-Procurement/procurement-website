import React from 'react';
import PropTypes from 'prop-types'
import { SurveyTemplate } from '../../templates/survey-page';

SurveyTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SurveyTemplate
