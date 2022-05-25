import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import remark from 'remark';
import remarkHTML from 'remark-html';
import { v4 } from 'uuid';
const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();

const Challenges = ({ challenges }) => (
  <div className='my-3 my-lg-5 p-3'>
    <h2>Challenges</h2>
    <div className=' d-flex flex-nowrap my-3 my-lg-3'>
      {challenges.map((challenge) => (
        <article
          key={v4()}
          style={{
            flex: 1,
            backgroundColor: '#ECEFF1',
            boxShadow: 'rgb(13 110 253 / 10%) 0px 0px 10px',
            marginRight: '2%',
            padding: '2%',
            borderRadius: '10px',
          }}>
          <div className='message-body'>
            <h4 className='text-primary'>{challenge.text}</h4>
            <HTMLContent content={toHTML(challenge.description)} />
          </div>
        </article>
      ))}
    </div>
  </div>
);

Challenges.propTypes = {
  challenges: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Challenges;
