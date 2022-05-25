import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SurveyCreator from '../components/Survey';
import VerticalTabs from '../components/Tabs/VerticalTabs.js';

export const SurveyTemplate = ({ Surveyjson }) => {
  const data = Surveyjson ? Surveyjson.data : '[]';
  return (
    <section className='section'>
      <VerticalTabs />
      <div className='container content'>
        <div className=''>
          <SurveyCreator data={data} />
        </div>
      </div>
    </section>
  );
};

SurveyTemplate.propTypes = {
  Surveyjson: PropTypes.object,
};

const SurveyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SurveyTemplate Surveyjson={frontmatter.Surveyjson} />
    </Layout>
  );
};

SurveyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default SurveyPage;

export const surveyPageQuery = graphql`
  query SurveyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        Surveyjson {
          data
        }
      }
    }
  }
`;
