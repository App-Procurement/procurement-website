import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { v4 } from 'uuid';
import Layout from '../components/Layout';
import '../css/home.css';
import remark from 'remark';
import remarkHTML from 'remark-html';
import Carousel from 'nuka-carousel';
import Migration from '../pages/migration'
// import Migration from '../components/Migration'

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color:  white;
  position: relative;
  span::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 0px;
    background-color: white;
  }
`;
const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();

export class IndexPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSlides: 2,
      currentSlide: 0,
      totalSlides: 0,
      partnersToShow: 4,
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
      autoPlayPartners: this.props.partners.length > partnersToShow,
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
      partnersToShow,
      autoPlayPartners,
    } = this.state;
    return (
      <div className='home-container'>
        <div className='d-flex w-100 flex-wrap align-items-center justify-content-between pl py-lg-4 dark-background banner-container'>
          <div className='d-inline-block banner-left'>
            <div className='d-block py-5 banner-content'>
              <h2>{bannercontent.title}</h2>
              <div className='text-justify'
                dangerouslySetInnerHTML={{ __html: toHTML(bannercontent.text) }}
              />
              <div className='d-flex banner-btns'>
                <a href='#' className='btn for-free'>
                  Try Synectiks For Free
                </a>
                <a href='#' className='btn watch-demo'>
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
          <div className='d-inline-block text-center banner-right'>
            <div className='d-block pt-lg-4 pb-lg-0 pb-3 banner-services'>
              {/* <div className='row'>
                {bannercontent.service &&
                  bannercontent.service.map((service) => (
                    <div key={v4()} className='col-md-6 col-sm-6 col-12'>
                      <div className='d-block w-100 text-center service'>
                        <div className='d-inline-block rounded-circle image'>
                          <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                            <a href={service.link}>
                              <img
                                className='auto-height-img'
                                src={service.img}
                              />
                            </a>
                          </div>
                        </div>
                        <div
                          className='d-inline-block text'
                          dangerouslySetInnerHTML={{
                            __html: toHTML(service.name),
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div> */}

              {/* <div className='number-section'>
                <div className='count-section mb-3'>
                 <span></span>
                <div>
                <h5>Single Control Plane to manage all</h5>
                <p>Xformation addresses the operational and security challenges of managing:</p>
                <div id='ulContainer'>
                <ul>
                  <li>Multiple Clouds/Products/Environments/Cloud Native Services</li>
                  <li>
                  Multiple Kubernetes clusters across any infrastructure.
                  </li>
                </ul>
                </div>
                  </div>
                </div>

                <div className='count-section'>
                  <span></span>
                <div>
                <h5>DevSecOps ToolChain</h5>
                <p>It provides DevSecOps teams with integrated tools for running containerized/serverless workloads.</p>
                </div>
              </div>
            </div> */}
            <div className='pl-3'>
              <img src='https://res.cloudinary.com/papu/image/upload/v1630071336/hybrid-cloud/whyus/MicrosoftTeams-image_10_vbl04p.png'/>
            </div>
            </div>
          </div>
        </div>
        <Migration/>

        <div className='d-block py-5 background platform-container'>
          <h2 className='d-block text-center pb-5'>{usecases.heading}</h2>
          <div className='d-block px-md-5 px-3 pb-5 mb-lg-5'>
            <div className='row align-items-center justify-content-center'>
              <div className='col-lg-5 col-12'>
                <div className='d-block px-lg-5 mb-lg-0 mb-5 text-center platform-content'>
                  <div className='d-block mb-4 image-box'>
                    <div className='image'>
                      <img
                        className='auto-height-img'
                        src={usecases.cioimage}
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='d-block platform-button'>
                    <button className='btn'>For CIO / CTO</button>
                    <i className='fa fa-angle-double-right'></i>
                  </div>
                </div>
              </div>
              <div className='col-lg-7 col-12'>
                <div className='d-block platform-services'>
                  <div className='row'>
                    {usecases.ciousecases &&
                      usecases.ciousecases.map((usecase) => (
                        <div key={v4()} className='col-md-6 col-sm-6 col-12'>
                          <div className='d-block text-center service'>
                            <div className='d-inline-block rounded-circle image'>
                              <div className='d-flex w-100 h-100 align-items-center justify-content-center'>
                                <img
                                  className='auto-height-img'
                                  src={usecase.img}
                                  alt=''
                                />
                              </div>
                            </div>
                            <div className='d-block name'>{usecase.name}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-block px-md-5 px-3'>
            <div className='row align-items-center justify-content-center'>
              <div className='col-lg-7 col-12 order-lg-first order-last'>
                <div className='d-block platform-services'>
                  <div className='row'>
                    {usecases.teamusecases &&
                      usecases.teamusecases.map((usecase) => (
                        <div key={v4()} className='col-md-6 col-sm-6 col-12'>
                          <div className='d-block text-center service'>
                            <div className='d-inline-block rounded-circle image'>
                              <div className='d-flex w-100 h-100 align-items-center justify-content-center'>
                                <img
                                  className='auto-height-img'
                                  src={usecase.img}
                                  alt=''
                                />
                              </div>
                            </div>
                            <div className='d-block name'>{usecase.name}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className='col-lg-5 col-12'>
                <div className='d-block px-lg-5 mb-lg-0 mb-5 text-center platform-content'>
                  <div className='d-block mb-4 image-box'>
                    <div className='image'>
                      <img
                        className='auto-height-img'
                        src={usecases.teamimage}
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='d-block platform-button'>
                    <i className='fa fa-angle-double-left'></i>
                    <button className='btn'>For DevSecOps TEAM</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-block py-5 dark-background solutions-container'>
          <h2 className='d-block text-center py-5'>Technology Approach</h2>
          <div className='d-block px-md-5 px-3'>
            <div className='row'>
              {solutions &&
                solutions.map((solution) => (
                  <div className='col-md-4 col-12' key={v4()}>
                    <div className='d-block bg-white p-4 rounded h-md-100 solution-box'>
                      <div className='d-block text-center icon-img'>
                        <img src={solution.img} alt='' />
                      </div>
                      <div className='d-block text-center name'>
                        {solution.name}
                      </div>
                      <div
                        className='d-block text-center sub-heading'
                        dangerouslySetInnerHTML={{
                          __html: toHTML(solution.description),
                        }}
                      />
                      <div className='d-block solutions-service'>
                        <ul>
                          {solution.checklist &&
                            solution.checklist.map((check) => (
                              <li key={v4()}>
                                <i className='fa fa-check'></i>
                                <span>{check.check}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <h2 className='d-block text-center py-5'>Xformation primary goals</h2>
          <div className='d-block px-md-5 px-3 primary-goals'>
            <div className='row align-items-center justify-content-center'>
              <div className='col-lg-6 col-12'>
                <div className='d-block content'>
                  <h3>{goals.heading}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: toHTML(goals.description),
                    }}
                  />
                </div>
              </div>
              <div className='col-lg-6 col-12'>
                <div className='d-block primary-goals-services'>
                  <div className='row align-items-center justify-content-center'>
                    {goals.goalslist &&
                      goals.goalslist.map((goal) => (
                        <div key={v4()} className='col-md-6 col-sm-6 col-12'>
                          <div className='d-block text-center service'>
                            <div className='d-inline-block rounded-circle image'>
                              <div className='d-flex w-100 h-100 align-items-center justify-content-center'>
                                <img
                                  className='auto-height-img'
                                  src={goal.img}
                                  alt=''
                                />
                              </div>
                            </div>
                            <div className='d-block name'>{goal.name}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                {partners &&
                  partners.map((partner) => (
                    <div
                      key={v4()}
                      className='d-block text-center partners-logo'>
                      <img src={partner.img} alt='' />
                    </div>
                  ))}
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
                      {successstories &&
                        successstories.map((story) => (
                          <div className='col-12' key={v4()}>
                            <div className='card'>
                              <img src={story.img} alt='' />
                              <div className='d-block px-3 py-4 caption'>
                                <div className='heading'>
                                  <h5>{story.heading}</h5>
                                </div>
                                <div className='description'>
                                  <p>{story.description}</p>
                                </div>
                                <a
                                  target='_blank'
                                  href={story.link}
                                  className='btn'>
                                  Read More{' '}
                                  <i className='fa fa-long-arrow-alt-right'></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
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

IndexPageTemplate.propTypes = {
  bannercontent: PropTypes.object,
  usecases: PropTypes.object,
  solutions: PropTypes.object,
  partners: PropTypes.object,
  goals: PropTypes.object,
  successstories: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        bannercontent={frontmatter.bannercontent}
        usecases={frontmatter.usecases}
        solutions={frontmatter.solutions}
        goals={frontmatter.goals}
        partners={frontmatter.partners}
        successstories={frontmatter.successstories}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        bannercontent {
          title
          text
          service {
            link
            img
            name
          }
        }
        usecases {
          heading
          cioimage
          teamimage
          ciousecases {
            img
            name
          }
          teamusecases {
            img
            name
          }
        }
        solutions {
          img
          name
          description
          checklist {
            check
          }
        }
        goals {
          heading
          description
          goalslist {
            img
            name
          }
        }
        partners {
          img
        }
        successstories {
          img
          heading
          description
          link
        }
      }
    }
  }
`;
