import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ScenarioSlider from '../components/Scenario/ScenarioSlider';
import SelectScenario from '../components/Scenario/SelectScenario';
import { AiFillCloseCircle } from 'react-icons/ai';
import '../css/scenario.css';
import Microsoft from '../img/scenario/homepage/microsoft.png';
import procurement from '../img/scenario/homepage/procurement.png';
import warehouse from '../img/scenario/homepage/warehouse.jpg';
import workflow from '../img/scenario/homepage/workflow.svg';
import cycle from '../img/scenario/homepage/procurement.svg';
import analysis from '../img/scenario/homepage/analysis.svg';
import telephone from '../img/scenario/homepage/telephone.svg';
import logo from '../img/scenario/homepage/logo.png';
import Login from '../components/Forms/Login';
import Register from '../components/Forms/Register';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
} from 'react-icons/ti';

export const ScenarioPageTemplate = ({ scenarios, slider }) => {
  const [showSelectScenario, setShowSelectScenario] = useState(false);
  const [showUseCase, setShowUseCase] = useState(false);
  const [useCase, setUseCase] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showReg, setShowReg] = useState(false);

  function onClickSelectScenario() {
    setShowSelectScenario(true);
  }

  function onClickSelectScenarioClose() {
    setShowSelectScenario(false);
  }

  function onClickUseCase(uc) {
    if (uc.useCaseSlider) {
      setUseCase(uc);
      setShowUseCase(true);
    }
  }
  function onClickUseCaseClose() {
    setShowUseCase(false);
  }

  return (
    <section id='scenario-bg'>
      <div
        className={`scenario-slider-container ${
          showSelectScenario === true ? 'select-scenario' : ''
        } ${showUseCase === true ? 'select-usecase' : ''}`}>
        {/* <ScenarioHome /> */}
        {/* homePage Starts here*/}
        <div className='homePage-grid'>
          {/* Header Start */}
          <div className='header'>
            <div className='logo'>
              <img src={logo} alt='' />
            </div>
            <div className='search-box'>
              <input
                type='search'
                name=''
                id='search-home'
                placeholder='Search Here...'
              />
            </div>
            <div className='group-btn'>
              <a className='login' href='/login'>
                Login
              </a>
              <a className='register' href='/register'>
                Register
              </a>
            </div>
          </div>
          {/* Header End */}
          {/* <Register /> */}
          {showForm ? (
            <div className='form-close-btn'>
              <button onClick={() => setShowForm(false)}>
                <AiFillCloseCircle />
              </button>
              <Login />
            </div>
          ) : null}

          {showReg ? (
            <div className='reg-close-btn'>
              <button onClick={() => setShowReg(false)}>
                <AiFillCloseCircle />
              </button>
              <Register />
            </div>
          ) : null}

          <div className='banner-stack'>
            {/* banner Start */}
            <div className='banner'>
              <div className='banner-text'>
                {/* <h4>Get comprehensive control and visibility</h4> */}
                <p>
                  SIMPLIFIED PROCUREMENT PROCESS WITH IMPROVED USER EXPERIENCE!
                </p>
                <h6>
                  Transform your end-to-end procurement operations, personalized
                  approvals, budget controls, and real-time information with our
                  intuitive and easy-to-use solution.
                </h6>
                <div className='banner-btns'>
                  <button className='login'>CONTACT US</button>
                  {/* Scenario Button Starts*/}
                  <div
                    className={`scenario-select-container ${
                      showSelectScenario === true ? 'active' : ''
                    } ${showUseCase === true ? 'active-usecase' : ''}`}>
                    <button className='select' onClick={onClickSelectScenario}>
                      SELECT SCENARIO
                    </button>
                    <SelectScenario
                      scenarios={scenarios}
                      onClickUseCase={onClickUseCase}
                      onClickCloseScenario={onClickSelectScenarioClose}
                    />
                  </div>
                  {/* Scenario Button Ends*/}
                </div>
              </div>
              <div className='banner-img'>
                <img src={Microsoft} alt='' />
              </div>
              <div className='banner-icons-stack'>
                <div className='article'>
                  <div className='icon'>
                    <img src={cycle} alt='' className='hover-animation' />
                  </div>

                  <div className='icon-text-group'>
                    <h6>Simplified Procurement Cycle</h6>
                    <p>
                      Lorem ipsum dolor sit amet, cons bh dolor, malesuada etili
                      adipDon nec malesuada etgutet…
                    </p>
                  </div>
                </div>
                <div className='article'>
                  <div className='icon'>
                    <img className='hover-animation' src={workflow} alt='' />
                  </div>
                  <div className='icon-text-group'>
                    <h6>Purchasing Workflows</h6>
                    <p>
                      Lorem ipsum dolor sit amet, cons bh dolor, malesuada etili
                      adipDon nec malesuada etgutet…
                    </p>
                  </div>
                </div>
                <div className='article'>
                  <div className='icon'>
                    <img className='hover-animation' src={analysis} alt='' />
                  </div>
                  <div className='icon-text-group'>
                    <h6>Supplier Analysis</h6>
                    <p>
                      Lorem ipsum dolor sit amet, cons bh dolor, malesuada etili
                      adipDon nec malesuada etgutet…
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* banner End */}
            {/* banner bottom Start*/}
            <div className='main-section'>
              {/* banner bottom End*/}
              {/* Procurement Start */}

              <div className='procurement'>
                <h2>End to End Procurement Process</h2>
                <img src={procurement} alt='' />
              </div>
              {/* Procurement End */}
              <div className='warehouse'>
                <div className='warehouse-left'>
                  <img src={warehouse} alt='' />
                </div>
                <div className='warehouse-right'>
                  <h6 className='we-are'>WHO WE ARE</h6>
                  <h5>We give solution for your business and technology</h5>
                  <p>
                    Lorem ipsum dolor sit amet, cons bh dolor, malesuada etili
                    adipDon nec malesu Lorem ipsum dolor sit amet, cons bh
                    dolor, malesuada etgutet. Lorem ipsum dolor sit amet, cons
                    bh dolor, malesuada etili adipDon nec malesu orem ipsum
                    dolor sit amet, cons bh dolor, malesuada etgutet…
                  </p>

                  <div className='we-company'>
                    <div className='first-row'>
                      <span className='fh'>WE</span>
                      <span className='fp'>
                        are starter company with of creative mind to solve your
                        business and IT problems
                      </span>
                    </div>
                    <div className='second-row'>
                      <a className='border-black'>LEARN MORE</a>
                      <a className='register'>CONTACT US</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='footer-top'>
                <h4>
                  Connect with us to simplify <br />
                  your your procurement process
                </h4>
                <a className='footer-contact'>Contact Us</a>
                <div className='telephone'>
                  <img src={telephone} alt='' />
                  +00(00) 1234567
                </div>
              </div>
              <div className='footer-bottom'>
                <div className='social-icons group-btn'>
                  <div className='logo'>
                    <img src={logo} alt='' />
                  </div>
                  <ul className='social'>
                    <li>
                      <TiSocialFacebook className='icon-size' />
                    </li>
                    <li>
                      <TiSocialTwitter className='icon-size' />
                    </li>
                    <li>
                      <TiSocialLinkedin className='icon-size' />
                    </li>
                    <li>
                      <TiSocialYoutube className='icon-size-U' />
                    </li>
                  </ul>
                </div>
                <p>Copyright © 2021 Synectiks Inc</p>
              </div>
            </div>
          </div>
        </div>
        {/* homePage Ends here*/}
        {/* <ScenarioSlider slider={slider} showMoreDetailsButton={true} /> */}
      </div>
      {showUseCase && (
        <div
          className={`scenario-slider-container ${
            showUseCase === true ? 'select-usecase' : ''
          }`}>
          <button
            className='close-btn'
            onClick={() => {
              onClickUseCaseClose(useCase);
            }}>
            <AiFillCloseCircle />
          </button>
          <ScenarioSlider
            slider={useCase.useCaseSlider}
            showMoreDetailsButton={false}
            onClickUseCaseClose={onClickUseCaseClose}
          />
        </div>
      )}
    </section>
  );
};

ScenarioPageTemplate.propTypes = {
  scenarios: PropTypes.array,
  slider: PropTypes.array,
};

const ScenarioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <ScenarioPageTemplate
      scenarios={frontmatter.scenarios}
      slider={frontmatter.slider}
    />
  );
};

ScenarioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ScenarioPage;

export const scenarioPageQuery = graphql`
  query ScenarioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        scenarios {
          img
          name
          subItems {
            img
            name
            useCaseSlider {
              img
              name
              text
            }
          }
        }
        slider {
          img
          name
          text
          moreDetails {
            moreDetailsName
            moreDetailsText
            moreDetailsImage {
              img
            }
          }
        }
      }
    }
  }
`;
