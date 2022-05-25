import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { v4 } from 'uuid';
// import Layout from '../components/Layout.js';
import '../../css/home.css';
import remark from 'remark';
import remarkHTML from 'remark-html';
import Carousel from 'nuka-carousel';

const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();

export default class CasePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSlides: 2,
      currentSlide: 0,
      totalSlides: 0,
      partnersToShow: 4,
      previousSlide: undefined,
      nextSlide: undefined,
      autoPlayPartners: false,
      totalPartners: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateNumberOfSlides);
    setTimeout(() => {
      this.updateNumberOfSlides();
    }, 500);
    if (this.props.successstories) {
      this.setState({
        totalSlides: this.props.successstories.length,
      });
    }
    if (this.props.partners) {
      this.setState({
        autoPlayPartners: this.props.partners.length > 4,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateNumberOfSlides);
  }

  updateNumberOfSlides = () => {
    let numberOfSlides = 1;
    let partnersToShow = 2;
    let autoPlay = true;
    if (window.innerWidth <= 470) {
      partnersToShow = 1;
    } else if (window.innerWidth > 470 && window.innerWidth <= 700) {
      partnersToShow = 2;
    } else if (window.innerWidth > 700 && window.innerWidth <= 900) {
      partnersToShow = 3;
      numberOfSlides = 2;
    } else {
      partnersToShow = 4;
      numberOfSlides = 2;
    }
    this.setState({
      numberOfSlides,
      partnersToShow,
      // autoPlayPartners: this.props.partners.length > partnersToShow,
    });
  };

  updateCurrentSlide = (factor) => {
    const { currentSlide, totalSlides, numberOfSlides } = this.state;
    if (
      currentSlide + factor >= 0 &&
      currentSlide + factor <= totalSlides - numberOfSlides
    ) {
      console.log(currentSlide + factor);
      this.setState({
        currentSlide: currentSlide + factor,
      });
    }
  };

  afterSlide = (currentSlide) => {
    this.setState({
      currentSlide,
    });
  };

  render() {
    const {
      bannercontent,
      usecases,
      solutions,
      goals,
      partners,
      successstories,
    } = this.props;
    const {
      numberOfSlides,
      currentSlide,
      totalSlides,
      previousSlide,
      nextSlide,
      partnersToShow,
      autoPlayPartners,
    } = this.state;
    return (
      <div className='home-container'>
        <div className='d-block py-5 background partners-container'>
          <h2 className='d-block text-center pb-5 pt-4'>Our Partners</h2>
          <div className='d-block mx-md-5 mx-3 mb-5 text-center partners'>
            <div className='row align-items-center justify-content-center'>
              <Carousel
                wrapAround={true}
                autoplayInterval={1000}
                autoplay={autoPlayPartners}
                slidesToShow={partnersToShow}
                withoutControls={true}>
                <div className='d-block text-center partners-logo'>
                  <img
                    src='https://via.placeholder.com/400/ffffff/c0392b/&text=slide1'
                    alt=''
                  />
                </div>
                <div className='d-block text-center partners-logo'>
                  <img
                    src='https://via.placeholder.com/400/ffffff/c0392b/&text=slide2'
                    alt=''
                  />
                </div>
                <div className='d-block text-center partners-logo'>
                  <img
                    src='https://via.placeholder.com/400/ffffff/c0392b/&text=slide3'
                    alt=''
                  />
                </div>
                <div className='d-block text-center partners-logo'>
                  <img
                    src='https://via.placeholder.com/400/ffffff/c0392b/&text=slide4'
                    alt=''
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div className='d-block mx-md-5 mx-3 py-md-5 partners-slider'>
            <div className='row align-items-center justify-content-center'>
              <div className='col-lg-3 col-12'>
                <div className='d-block mb-3 success-heading'>
                  Success Stories
                </div>
                <div className='d-block mb-3 success-link'>
                  <a href='#'>View All Success Stories &#62;</a>
                </div>
                <div className='d-block mb-3 indicators'>
                  <span>01</span>
                  <span className='line'>
                    <span
                      style={{
                        width: `${
                          ((currentSlide + numberOfSlides) * 100) / totalSlides
                        }%`,
                      }}></span>
                  </span>
                  <span>
                    {totalSlides > 9 ? totalSlides : '0' + totalSlides}
                  </span>
                </div>
                <div className='d-block text-center mb-5 mb-lg-0 success-button'>
                  <button
                    onClick={() => this.updateCurrentSlide(1)}
                    className={`control-prev ${
                      currentSlide === totalSlides - numberOfSlides
                        ? 'disabled'
                        : ''
                    }`}
                    type='button'>
                    <i className='fa fa-arrow-circle-right'></i>
                  </button>
                  <button
                    onClick={() => this.updateCurrentSlide(-1)}
                    className={`control-next ${
                      currentSlide === 0 ? 'disabled' : ''
                    }`}
                    type='button'>
                    <i className='fa fa-arrow-circle-left'></i>
                  </button>
                </div>
              </div>
              <div className='col-lg-9 col-12'>
                <div className='item'>
                  <div className='row'>
                    <Carousel
                      afterSlide={this.afterSlide}
                      slideIndex={currentSlide}
                      withoutControls={true}
                      scrollMode='remainder'
                      slidesToShow={numberOfSlides}
                      slidesToScroll={1}>
                      <div className='col-12'>
                        <div className='card'>
                          <img
                            src='https://res.cloudinary.com/papu/image/upload/v1620305230/new-design/home-page/Images/CS_SoftwareDefinedTransformation-03250f0e4ba38735d6e41abaa9d0fb54_s6lngd.jpg'
                            alt=''
                          />
                          <div className='d-block px-3 py-4 caption'>
                            <div className='heading'>
                              <h5>Software Defined Transformation</h5>
                            </div>
                            <div className='description'>
                              <p>
                                AWS Cloud migration for a large motor industry
                              </p>
                            </div>
                            <a target='_blank' href='' className='btn'>
                              Read More
                              <i className='fa fa-long-arrow-alt-right'></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='card'>
                          <img
                            src='https://res.cloudinary.com/papu/image/upload/v1620305229/new-design/home-page/Images/CS_Realtime_Monitoring-a62dd5ec305368a459643e196697ffb4_iii8hi.jpg'
                            alt=''
                          />
                          <div className='d-block px-3 py-4 caption'>
                            <div className='heading'>
                              <h5>story heading</h5>
                            </div>
                            <div className='description'>
                              <p>
                                Highly Scalable extremely customizable reatl
                              </p>
                            </div>
                            <a target='_blank' href='' className='btn'>
                              Read More
                              <i className='fa fa-long-arrow-alt-right'></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='card'>
                          <img
                            src='https://via.placeholder.com/400/ffffff/c0392b/&text=slide3'
                            alt=''
                          />
                          <div className='d-block px-3 py-4 caption'>
                            <div className='heading'>
                              <h5>story heading</h5>
                            </div>
                            <div className='description'>
                              <p>story description</p>
                            </div>
                            <a target='_blank' href='' className='btn'>
                              Read More
                              <i className='fa fa-long-arrow-alt-right'></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='card'>
                          <img
                            src='https://via.placeholder.com/400/ffffff/c0392b/&text=slide4'
                            alt=''
                          />
                          <div className='d-block px-3 py-4 caption'>
                            <div className='heading'>
                              <h5>story heading</h5>
                            </div>
                            <div className='description'>
                              <p>story description</p>
                            </div>
                            <a target='_blank' href='' className='btn'>
                              Read More
                              <i className='fa fa-long-arrow-alt-right'></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-block mx-md-5 mx-3 py-5'>
            <div className='d-block mx-lg-5'>
              <div className='d-flex align-items-center justify-content-center px-md-5 px-3 py-3 application-box'>
                <h3>Modernize Your Infra & Application</h3>
                <a href='#' className='btn touch-btn'>
                  Get In Touch!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
