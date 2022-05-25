import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import remark from 'remark';
import remarkHTML from 'remark-html';
import { v4 } from 'uuid';
const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();

const Reports = ({ reports }) => (
  <div
    className=' d-flex flex-nowrap my-3 my-lg-5 p-3'
    style={{ backgroundColor: '#FDFBFB' }}>
    {reports.map((report) => (
      <article
        key={v4()}
        style={{
          flex: 1,
          // backgroundColor: '#F7F5F5',
          backgroundColor: '#EEF2F5',
          borderLeft: '2px solid rgba(0,0,0,0.5)',
          marginRight: '2%',
          padding: '2% 0% 2% 3%',
        }}>
        <div className='message-body'>
          <h4 className='text-primary'>{report.text}</h4>
          <HTMLContent content={toHTML(report.description)} />
        </div>
      </article>
    ))}
  </div>
);

Reports.propTypes = {
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Reports;
