import React from 'react'
import Carousel from 'nuka-carousel';
import { v4 } from 'uuid';

class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfSlides: 1,
            blogSlideIndex: 0,
            whitePaperSlideIndex: 0,
            caseStudiesSlideIndex: 0
        };
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateNumberOfSlides);
        setTimeout(() => {
            this.updateNumberOfSlides();
        }, 500);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateNumberOfSlides);
    }

    updateNumberOfSlides = () => {
        let numberOfSlides = 1;
        if (window.innerWidth > 700) {
            numberOfSlides = 2;
        }
        this.setState({
            numberOfSlides,
        });
    };

    renderSlider = (name, description, sliderData, afterSlide, currentSlide, updateCurrentSlide) => {
        const { numberOfSlides } = this.state;
        let adjustedSlides = sliderData.length === 1 ? 1 : numberOfSlides;
        return (
            <div className="d-block mx-md-5 mx-3 pb-md-5 partners-slider">
                <div className="d-block w-100 px-lg-5 px-2">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-3 col-12">
                            <div className="d-block mb-3 success-heading">{name}</div>
                            <div className="d-block mb-3 success-link">
                                <a href="#">{description} &#62;</a>
                            </div>
                            <div className="d-block mb-3 indicators">
                                <span>01</span>
                                <span className="line">
                                    <span style={{ width: `${(currentSlide + adjustedSlides) * 100 / sliderData.length}%` }}></span>
                                </span>
                                <span>{sliderData.length > 9 ? sliderData.length : `0${sliderData.length}`}</span>
                            </div>
                            <div className="d-block text-center mb-5 mb-lg-0 success-button">
                                <button onClick={() => updateCurrentSlide(1, sliderData.length)} className={`control-prev ${currentSlide === (sliderData.length - adjustedSlides) ? 'disabled' : ''}`} type="button">
                                    <i className="fa fa-arrow-circle-right"></i>
                                </button>
                                <button onClick={() => updateCurrentSlide(-1, sliderData.length)} className={`control-next ${currentSlide === 0 ? 'disabled' : ''}`} type="button">
                                    <i className="fa fa-arrow-circle-left"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-9 col-12">
                            <div className="row">
                                <Carousel afterSlide={afterSlide} slideIndex={currentSlide} scrollMode="remainder" withoutControls={true} slidesToShow={adjustedSlides} slidesToScroll={1}>
                                    {
                                        sliderData.map((slide) => (
                                            <div key={v4()} className="col-12">
                                                <div className="card">
                                                    <img src={slide.img} alt="" />
                                                    <div className="d-block px-3 py-4 caption">
                                                        <div className="heading">
                                                            <h5>{slide.heading}</h5>
                                                        </div>
                                                        <div className="description">
                                                            <p>{slide.description}</p>
                                                        </div>
                                                        <a target="_blank" href={slide.link} className="btn">
                                                            Read More <i className="fa fa-long-arrow-alt-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    afterSlide = (currentSlide, sliderName) => {
        this.setState({
            [sliderName]: currentSlide
        });
    };

    updateCurrentSlide = (factor, totalSlides, sliderName) => {
        const { numberOfSlides } = this.state;
        const currentSlide = this.state[sliderName];
        if (currentSlide + factor >= 0 && currentSlide + factor <= (totalSlides - numberOfSlides)) {
            this.setState({
                [sliderName]: currentSlide + factor
            });
        }
    }

    renderBlogSlider = (data) => {
        const { blogSlideIndex } = this.state;
        if (data.blogs && data.blogs.length > 0) {
            return this.renderSlider("Blogs", "These are the blogs", data.blogs, currentSlide => this.afterSlide(currentSlide, "blogSlideIndex"), blogSlideIndex, (factor, totalSlides) => this.updateCurrentSlide(factor, totalSlides, "blogSlideIndex"));
        }
        return <div></div>;
    };

    renderWhitePaperSlider = (data) => {
        const { whitePaperSlideIndex } = this.state;
        if (data.whitepapers && data.whitepapers.length > 0) {
            return this.renderSlider("White paper", "These are the white papers", data.whitepapers, currentSlide => this.afterSlide(currentSlide, "whitePaperSlideIndex"), whitePaperSlideIndex, (factor, totalSlides) => this.updateCurrentSlide(factor, totalSlides, "whitePaperSlideIndex"));
        }
        return <div></div>;
    };

    renderCaseStudiesSlider = (data) => {
        const { caseStudiesSlideIndex } = this.state;
        if (data.casestudies && data.casestudies.length > 0) {
            return this.renderSlider("Case studies", "These are the case studies", data.casestudies, currentSlide => this.afterSlide(currentSlide, "caseStudiesSlideIndex"), caseStudiesSlideIndex, (factor, totalSlides) => this.updateCurrentSlide(factor, totalSlides, "caseStudiesSlideIndex"))
        }
        return <div></div>;
    };

    render() {
        const { blogSlideIndex, whitePaperSlideIndex, caseStudiesSlideIndex } = this.state;
        const { data } = this.props;
        return (
            data ?
                <div className="d-block w-100 tab-background resources-container">
                    {this.renderBlogSlider(data)}
                    {this.renderWhitePaperSlider(data)}
                    {this.renderCaseStudiesSlider(data)}
                </div > :
                <div></div>
        );
    }
}

export default Resources