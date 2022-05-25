import React from 'react';
// import Layout from './Layout';
import styled from 'styled-components';
// import Capabilities from '../../img/migration&modernization/capabilities.png';
// import Engagement from '../../img/migration&modernization/engagementmodel.png';
import CasePage from './Forms/CaseSlider.js';
import Carousel from 'nuka-carousel';

const ModernizationWrapper = styled.div`
  .jumbotron {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 2em;
    .jumbo-left img {
      width: 100%;
    }
    .jumbo-left-text {
      padding: 1em;
      margin: 0 0em;
      background-color: #384cd8;
      p {
        color: #fff;
        font-size: 20px;
        text-align: center;
      }
    }
    .jumbo-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      h3 {
        font-size: 2.5rem;
        text-align: center;
        text-transform: uppercase;
        margin-top: 1em;
      }
    }
    .jumbo-right img {
      width: 150px;
      height: 150px;
    }
  }
  .jumbo-block-bottom {
    padding: 1em 0.5em 3em 0.5em;
    background-color: #d2d4e0;
    text-align: center;
    margin: 3em 0em;
    .jumbo-text-bottom {
      color: #212529;
      text-align: center;
    }
    .jumbo-bottom {
      padding: 1em 0.5em 0em 0.5em;
      color: #212529;
      background-color: #d2d4e0;
      text-align: center;
      margin: 1em 0em;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      grid-gap: 0.4em;
      h3 {
        font-size: 38px;
        margin: 0.2em 0em 1em 0em;
      }
      .app {
        /* display: flex; */
        display: grid;
        grid-template-columns: 1fr;
        color: #fff;
        align-items: center;
        grid-gap: 1em;
        padding: 2em 0.5em 3.5em 0.5em;
        background-color: #d62c37 !important;
        height: fit-content;
        .app-img {
          img {
          width: 125px;
          border: none;
          margin-bottom: 1em;
          box-shadow: none;
          }
        }
        .app-blocks {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: repeat(4, 1fr);
          grid-gap: 1em;
          margin: -0.4em;
          div{
            border: 2px solid rgba(0,0,0,0.4);
    margin: 0.6em 0em -1em 0em;
    padding: 0.5em 0em 0em;
             .text-block {
               border: none;
          height: auto;
          padding: 0.5em 1em;
          margin-bottom: -1.4em;
          background-color: #fff;
          color: #212529;
        }
            }
          }
        }

      }
      .data {
        background-color: #f58021 !important;
        display: flex;
        /* display: grid; */
        /* grid-template-columns: repeat(4, 1fr); */
        color: #fff;
        align-items: center;
        grid-gap: 1em;
        padding: 0.5em 0em;
        flex-direction: column;
        height: fit-content;
        .data-img img {
          width: 100px;
          border: none;
          box-shadow: none;
          margin-bottom: 1em;
        }
        .data-text-block{
          div{
            border: 2px solid rgba(0, 0, 0, 0.4);
            margin-bottom:1em;
            padding-top: 0.4em;
          }
        .text-block {
          padding: 0.5em;
          background-color: #fff;
          margin-bottom:0em;
          color: #212529;
          p {
            margin-bottom: 0em;
          }
        }
         }
      }
      .process {
        display: flex;
        /* display: grid; */
        /* grid-template-columns: repeat(4, 1fr); */
        color: #fff;
        align-items: center;
        grid-gap: 1em;
        padding: 1em 0em;
        background-color: #86c542 !important;
        height: fit-content;
        flex-direction: column;
        .pro-img{
            img {
          border: none;
          width: 70px;
          border: none;
          box-shadow: none;
          margin-bottom: 1em;
        }
      }
        .proc-text-block{
          border: 2px solid rgba(0, 0, 0, 0.4);
          padding-top: 0.4em;
        .text-block {
          padding: 0.5em;
          background-color: #fff;
          color: #212529;
          p {
            margin-bottom: 0em;
          }
         }
        }
      }
      .capabilities {
        display: flex;
        /* display: grid; */
        /* grid-template-columns: repeat(4, 1fr); */
        background-color: #6c53a4;
        color: #fff;
        align-items: center;
        grid-gap: 1em;
        padding: 1em 0.5em;
        flex-direction: column;
        height: fit-content;
      }
      .cap-text-block {
        margin: -0.4em;
        div {
          border: 2px solid rgba(0, 0, 0, 0.4);
          margin: 0.6em 0em;
          padding: 0.5em 0em 0em;
          .text-block {
            padding: 1em;
            margin: 0em;
            background-color: #fff;
            border: none;
            color: #212529;
            p {
              margin-bottom: 0em;
            }
          }
        }
      }
      .infra-img img {
        width: 85px;
        border: none;
        box-shadow: none;
        margin-bottom: 1em;
      }
      .text-block {
        padding: 1em;
        background-color: #fff;
        color: #212529;
        p {
          margin-bottom: 0em;
        }
      }
      img {
        width: 100%;
        border: 5px solid white;
        box-shadow: 1px 1px 10px 2px black;
      }
    }

  .icon-section {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    grid-gap: 3em;
    text-align: center;
    color: #fff;
    padding: 1em 3em;
  }
  .icons {
    color: #fff;
    text-align: center;
    h3 {
      font-size: 38px;
      margin: 1em 0em 1em 0em;
    }
  }
  .bottom {
    padding: 1em;
    text-align: center;
    background-color: #d2d4e0;
    color: #212529;
    h3 {
      font-size: 38px;
      margin: 0em 0em 1em 0em;
    }
    img {
      border: 5px solid white;
      box-shadow: 1px 1px 10px 2px black;
    }
  }
  @media (min-width: 768px) {
    .jumbotron {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-gap: 2em;
      .jumbo-left img {
        width: 100%;
      }
      .jumbo-left-text {
        padding: 1em;
        margin: 0 2em;
        background-color: #384cd8;
        p {
          color: #fff;
          font-size: 20px;
        }
      }
      .jumbo-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        h3 {
          font-size: 3rem;
          text-align: center;
          text-transform: uppercase;
          margin-top: 1em;
        }
      }
      .jumbo-right img {
        width: 150px;
        height: 150px;
      }
    }
    .jumbo-block-bottom {
      /* padding: 1em 1.5em 3em 1.5em; */
      background-color: #d2d4e0;
      text-align: center;
      margin: 3em 0em;
      .jumbo-text-bottom {
        color: #212529;
        text-align: center;
      }
      .jumbo-bottom {
        color: #212529;
        display: grid;
        grid-template-rows: 1fr;
        grid-gap: 0.4em;
        h3 {
          font-size: 38px;
          margin: 0.2em 0em 1em 0em;
        }
        .app {
          /* display: flex; */
          display: grid;
          grid-template-columns: 5% 1fr;
          color: #fff;
          align-items: center;
          grid-gap: 1em;
          padding: 0.5em 1em 3.8em 0.5em;
          background-color: #d62c37 !important;
          height: fit-content;
          .app-img {
            margin-bottom: -5em;
            img {
              /* width: 125px; */
              border: none;
              margin-bottom: 0em;
              box-shadow: none;
            }
            h4 {
              font-size: 1.2rem;
            }
          }
          .app-blocks {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr;
            grid-gap: 1em;
            div{
              border: none;
               .text-block {
                 border:none;
            height: 100%;
            /* height: 13vh; */
            padding: 0.5em 1em;
            background-color: #fff;
            color: #212529;
            p {
              margin-bottom: 0em;
            }
          }
            }
          }

        }
        .data {
          background-color: #f58021 !important;
          /* display: flex; */
          display: grid;
          grid-template-columns: 5% 1fr;
          color: #fff;
          align-items: center;
          grid-gap: 1em;
          padding: 0.5em 0.5em;
          height: fit-content;
          flex-direction: row;
          .data-img {
            img {
              /* width: 100px; */
              border: none;
              box-shadow: none;
              margin-bottom: 0em;
            }
            h4 {
              font-size: 1.2rem;
            }
          }
          .data-text-block {
            display: flex;
            grid-gap: 1em;
            div{
              border: none;
               .text-block {
            border: none;
            padding: 0.5em 0.5em 0.3em 1em;
            background-color: #fff;
            color: #212529;
            margin-bottom: -1em;
            p {
              margin-bottom: 0em;
            }
          }
            }
          }

        }
        .process {
          /* display: flex; */
          display: grid;
          grid-template-columns: 7% 1fr 1fr;
          color: #fff;
          align-items: center;
          grid-gap: 1em;
          padding: 0.5em;
          background-color: #86c542 !important;
          height: fit-content;
          flex-direction: row;
          .pro-img {
            img {
              /* width: 70px; */
              border: none;
              box-shadow: none;
              margin-bottom: -0.5em;
            }
            h4 {
              font-size: 1.2rem;
            }
          }
          .proc-text-block{
            border:none;
          .text-block {
            padding: 0.5em;
            background-color: #fff;
            color: #212529;
            p {
              margin-bottom: 0em;
            }
          }
           }
        }
        .capabilities {
          /* display: flex; */
          display: grid;
          grid-template-columns: 5% 1fr;
          background-color: #6c53a4;
          color: #fff;
          align-items: center;
          grid-gap: 1em;
          padding: 0.5em 0.5em;
          flex-direction: row;
          height: fit-content;
        }
        .infra-img {
          padding-top: 1em;
          img {
            /* width: 80px; */
            border: none;
            box-shadow: none;
            margin-bottom: 0.4em;
          }
          h4 {
            font-size: 1.2rem;
          }
        }

        .cap-text-block {
          display: flex;
          grid-gap: 1em;
          padding-right:0.8em;
          div {
            border: none;
            .text-block {
              padding: 1em;
              background-color: #fff;
              border: none;
              color: #212529;
              p {
                margin-bottom: 0em;
              }
            }
          }
        }
      }
      img {
        width: 100%;
        border: 5px solid white;
        box-shadow: 1px 1px 10px 2px black;
      }
    }
    .icon-section {
      display: grid;
      /* grid-template-columns: repeat(3, 1fr); */
      grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
      grid-gap: 3em;
      text-align: center;
      color: #fff;
      padding: 1em 3em;
    }
    .bottom {
      padding: 1em 7em 3em 7em;
      text-align: center;
      background-color: #d2d4e0;
      color: #212529;
      h3 {
        font-size: 38px;
        margin: 0em 0em 1em 0em;
      }
      img {
        border: 5px solid white;
        box-shadow: 1px 1px 10px 2px black;
      }
    }
  }
`;
export default class Migration extends React.Component {
// export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSlides: 2,
      currentSlide: 0,
      totalSlides: 0,
      // previousSlide: null,
      // nextSlide: null,
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
      partnersToShow,
      autoPlayPartners,
    } = this.state;
    return (
      <ModernizationWrapper>
        <>
          {/* <div className='jumbotron'>
            <div className='jumbo-left'>
              <img
                src='https://res.cloudinary.com/papu/image/upload/b_rgb:ffffff,/v1624456455/new-design/home-page/Images/modernization_epx6qy.jpg'
                alt=''
              />
              <div className='jumbo-left-text'>
                <p>
                  Reduce your technical debt, get your apps and infrastructure
                  ready for any cloud
                </p>
              </div>
            </div>
            <div className='jumbo-right'>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1624527145/new-design/home-page/Images/migration_and_modernization_pekzxp.svg'
                alt=''
              />
              <h3>Migration and Modernization</h3>
            </div>
          </div> */}

          <div className='jumbo-block-bottom'>
            <div className='jumbo-text-bottom'>
              {/* <img src={Capabilities} alt='' /> */}
              <h3>Capabilities</h3>
            </div>
            {/* <img
            src='https://res.cloudinary.com/papu/image/upload/bo_10px_solid_rgb:fff/v1624539278/new-design/home-page/Images/capabilities_eh4vwk.jpg'
            alt=''
          /> */}
            <div className='jumbo-bottom'>
              <div className='capabilities'>
                <div className='infra-img'>
                  <img
                    src='https://res.cloudinary.com/papu/image/upload/v1625559852/Infra_jaomzl.svg'
                    alt=''
                  />
                  <h4>Infra</h4>
                </div>
                <div className='cap-text-block'>
                  <div>
                    <h6>Multi-Cloud Hybrid Adoption</h6>
                    <div className='text-block'>
                      <p>Multi cloud Hybrid infra management and operations</p>
                    </div>
                  </div>
                  <div>
                    <h6>Cloud-Migration</h6>
                    <div className='text-block'>
                      <p>Migrate existing workloads to any cloud</p>
                    </div>
                  </div>
                  <div>
                    <h6>Software Defined Transformation</h6>
                    <div className='text-block'>
                      <p>
                        Make entire infrastructure provisioning software defined
                        and automated
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='app'>
                <div className='app-img'>
                  <img
                    src='https://res.cloudinary.com/papu/image/upload/v1625559857/App_dfq0tc.svg'
                    alt=''
                  />
                  <h4>App</h4>
                </div>
                <div className='app-blocks'>
                  <div>
                    <h6>Rapid App Development</h6>
                    <div className='text-block'>
                      <p>
                        Develop microservice based cloud native custom business
                        App
                      </p>
                    </div>
                  </div>
                  <div>
                    <h6>App Modernization</h6>
                    <div className='text-block'>
                      <p>
                        Api / Microservices / Container / DevSecOps Enablement
                      </p>
                    </div>
                  </div>
                  <div>
                    <h6>App Migration</h6>
                    <div className='text-block'>
                      <p>
                        Simplify, integrate and deliver applications on any
                        platform
                      </p>
                    </div>
                  </div>
                  <div>
                    <h6>Cloud Native Transformation</h6>
                    <div className='text-block'>
                      <p>
                        Migrate existing outdated proprietary application to
                        Open cloud native app
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='data'>
                <div className='data-img'>
                  <img
                    src='https://res.cloudinary.com/papu/image/upload/v1625559854/data_j7mjvr.svg'
                    alt=''
                  />
                  <h4>Data</h4>
                </div>
                <div className='data-text-block'>
                  <div>
                    <h6>Fast-Data Transform</h6>
                    <div className='text-block'>
                      <p>
                        Increase Data Revenue with Realtime contextual
                        AI-enabled decision making system
                      </p>
                    </div>
                  </div>
                  <div>
                    <h6>Data Management</h6>
                    <div className='text-block'>
                      <p>
                        Simplify Data backbone and its lifecycle to a reduced
                        Capex/Opex and higher business outcome
                      </p>
                    </div>
                  </div>
                  <div>
                    <h6>Data Migration</h6>
                    <div className='text-block'>
                      <p>
                        Simplify and migrate data from any platform to any
                        platform{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='process'>
                <div className='pro-img'>
                  <img
                    src='https://res.cloudinary.com/papu/image/upload/v1625559859/Process_rxu7u8.svg'
                    alt=''
                  />
                  <h4>Process</h4>
                </div>
                <div className='proc-text-block'>
                  <h6>DevSecOps Enablement</h6>
                  <div className='text-block'>
                    <p>
                      Improve operational efficiency and development velocity
                      with DevSecOps adoption
                    </p>
                  </div>
                </div>
                <div className='proc-text-block'>
                  <h6>Business Process Automation</h6>
                  <div className='text-block'>
                    <p>
                      Optimize business processes with observability and data
                      driven Realtime decision making system
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='icons'>
            <h3>Differentiator</h3>
            <div className='icon-section'>
              <div>
                <img
                  src='https://res.cloudinary.com/papu/image/upload/v1620121015/new-design/hybrid-cloud/time-money_ixetxx.jpg'
                  alt=''
                />
                <h5>Time & Money</h5>
                <p>
                  Our open Product Driven Delivery Model allows customers to
                  quickly build, deliver and orchestrate cross cloud services
                  @50% time & cost
                </p>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/papu/image/upload/v1620121016/new-design/hybrid-cloud/experience_xgb6fu.jpg'
                  alt=''
                />
                <h5>Experience</h5>
                <p>10+ Large Scale Migration And Modernization experience</p>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/papu/image/upload/v1620121016/new-design/hybrid-cloud/expertise_rrxipa.jpg'
                  alt=''
                />
                <h5>Expertise</h5>
                <p>
                  Experience Team with a proven track record of CloudOps
                  delivery enabled with DevSecOps Capabilities
                </p>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/papu/image/upload/v1620121044/new-design/hybrid-cloud/long-term-retention_nm2mea.jpg'
                  alt=''
                />
                <h5>Long Term Retention</h5>
                <p>
                  100% Customer Retention Rate substantiated by excellent
                  services
                </p>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/papu/image/upload/v1620121044/new-design/hybrid-cloud/single-control-pane_znkvet.jpg'
                  alt=''
                />
                <h5>Single Control Panel</h5>
                <p>
                  Xformation Product is a single platform to manage all your
                  workloads distributed across multiple clouds and boundaries
                  within a single control plane
                </p>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/papu/image/upload/v1620121045/new-design/hybrid-cloud/compliance-security_ysw8nm.jpg'
                  alt=''
                />
                <h5>Compliance & Security</h5>
                <p>
                  Our compliance and security assessment tools make sure your
                  hybrid cloud journey meets your business compliance
                </p>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/papu/image/upload/v1620121043/new-design/hybrid-cloud/e2e-solution_pl64jw.jpg'
                  alt=''
                />
                <h5>E2E Solution</h5>
                <p>
                  Single point of contact for Application Migration,
                  Transformation and Integration to cloud-native Apps services
                </p>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/papu/image/upload/v1620121044/new-design/hybrid-cloud/public-cloud-partnership_qmst7o.jpg'
                  alt=''
                />
                <h5>Public Cloud Partnership</h5>
                <p>
                  Our advanced partnership with major public cloud providers
                  help you to get support at every stage
                </p>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/papu/image/upload/v1620121043/new-design/hybrid-cloud/demo-environment_jx5des.jpg'
                  alt=''
                />
                <h5>Open-Source Contribution</h5>
                <p>
                  Committed to codifying our know-how, we write open Products
                  and Distribute
                </p>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/papu/image/upload/v1620121044/new-design/hybrid-cloud/optimization-service_qyylkr.jpg'
                  alt=''
                />
                <h5>Optimization Service</h5>
                <p>We do optimal resource pooling from multiple clouds</p>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/papu/image/upload/v1620121043/new-design/hybrid-cloud/engagement-model_wfxnsk.jpg'
                  alt=''
                />
                <h5>Engagement Model</h5>
                <p>
                  Our every engagement focused on empowerment – not dependency
                </p>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/papu/image/upload/v1620222870/new-design/hybrid-cloud/extreme-automation_yk9gzn.jpg'
                  alt=''
                />
                <h5>Extreme Automation</h5>
                <p>
                  Use our existing automation capabilities to automate
                  infrastructure, operations, security in hybrid IT environment
                </p>
              </div>
            </div>
          </div>

          {/* <div className='bottom'>
            {/* <img src={Engagement} alt='' /> */}
            {/* <h3>Engagement Model</h3>
            <img
              src='https://res.cloudinary.com/papu/image/upload/v1624540148/new-design/home-page/Images/engagementmodel_sbylsq.jpg'
              alt=''
            /> */}
          {/* </div> */}

          {/* <div className='home-container'>
            <div className='d-block py-5 background partners-container'>
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
                              ((currentSlide + numberOfSlides) * 100) /
                              totalSlides
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
                          slidesToScroll={1}
                          renderTopCenterControls={({ currentSlide }) => (
                            <div
                              style={{
                                position: 'absolute',
                                top: '0em !important',
                                left: '-4em !important',
                                width: '12em !important',
                                height: '12em !important',
                              }}>
                              Slide: {currentSlide}
                            </div>
                          )}
                          renderCenterLeftControls={({ previousSlide }) => (
                            <button
                              slidesToShow={numberOfSlides}
                              style={{
                                position: 'absolute',
                                top: '0em !important',
                                left: '-6em !important',
                                width: '12em !important',
                                height: '12em !important',
                              }}
                              onClick={previousSlide}>
                              Previous
                            </button>
                          )}
                          renderCenterRightControls={({ nextSlide }) => (
                            <button
                              slidesToShow={numberOfSlides}
                              style={{
                                position: 'absolute',
                                top: '0em !important',
                                left: '-8em !important',
                                width: '12em !important',
                                height: '12em !important',
                              }}
                              onClick={nextSlide}>
                              Next
                            </button>
                          )}>
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
                                    AWS Cloud migration for a large motor
                                    industry.
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
                                  <h5>Realtime Monitoring</h5>
                                </div>
                                <div className='description'>
                                  <p>
                                    Highly Scalable extremely customizable
                                    realtime monitoring platform.
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
                                src='https://res.cloudinary.com/papu/image/upload/v1620305230/new-design/home-page/Images/CS_Software_Migration-709c30afb47703d839efb79aeae490da_aqdslm.jpg'
                                alt=''
                              />
                              <div className='d-block px-3 py-4 caption'>
                                <div className='heading'>
                                  <h5>Software Migration</h5>
                                </div>
                                <div className='description'>
                                  <p>
                                    Petabytes of storage migration for a large
                                    financial company with zero down time.
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
                                src='https://res.cloudinary.com/papu/image/upload/v1620305230/new-design/home-page/Images/CS_NetworkDesign-6707341964238c8c2a188a6be01b676a_qla9mk.jpg'
                                alt=''
                              />
                              <div className='d-block px-3 py-4 caption'>
                                <div className='heading'>
                                  <h5>Network Design</h5>
                                </div>
                                <div className='description'>
                                  <p>
                                    Complete network Backbone design with
                                    highest security for retail.
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
                                src='https://res.cloudinary.com/papu/image/upload/v1620305230/new-design/home-page/Images/CS_StorageTier-103b26051fde75aa4b9b9d5a8a303058_z5sl7u.jpg'
                                alt=''
                              />
                              <div className='d-block px-3 py-4 caption'>
                                <div className='heading'>
                                  <h5>Storage Tier</h5>
                                </div>
                                <div className='description'>
                                  <p>
                                    Moving Bigdata workloads to aggregated
                                    paltform for a loarge telco.
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
                                src='https://res.cloudinary.com/papu/image/upload/v1620305229/new-design/home-page/Images/CS_DisasterRecovery-f0018cb2716204dce78323c6d403060b_z5fw5g.jpg'
                                alt=''
                              />
                              <div className='d-block px-3 py-4 caption'>
                                <div className='heading'>
                                  <h5>Disaster Recovery</h5>
                                </div>
                                <div className='description'>
                                  <p>
                                    Lightweight disaster recovery platform for
                                    indian defense.
                                  </p>
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
                      Get In Touch! index
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        */}
        </>
      </ModernizationWrapper>
    );
  }
}
