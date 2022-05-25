import React, { Component } from 'react';
import verticalImage from '../img/vertical-image.png';
import horizontalImage from '../img/horizontal-image.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export class Image extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            imageContent: false,
            shownImage: 2,
            showEditorPanel: false,
            showEditorPanelTab: 0,
            isActive: false
        }
    };

    showImageContent = () => {
        const { imageContent } = this.state;
        this.setState({ imageContent: !imageContent });
    }

    clearContent = () => {
        this.props.onClickDelete(this.props.location);
    }

    showEditorPanel = () => {
        const { showEditorPanel } = this.state;
        this.setState({ showEditorPanel: !showEditorPanel });
    }

    listMouseOver = (index) => {
        this.setState({ shownImage: index });
    }

    listMouseOut = (type) => {
        this.props.data.displayType = type;
        this.setState({ shownImage: 0, imageContent: false });
    }

    showEditorPanelTab = (index) => {
        this.setState({ showEditorPanelTab: index });
    }

    setProperties = (sendData) => {
        this.props.setPropertiesData({}, this.props.location);
        this.setIsActive(true);
    }

    setIsActive = (isActive) => {
        this.setState({
            isActive
        });
    }

    changeProperties = (formContent) => {
        const { padding_top, padding_bottom, description, url } = this.props.data;
        this.setState({
            padding_top: padding_top,
            padding_bottom: padding_bottom,
            description: description,
            url: url,
        });
        // this.props.setPropertiesData(formContent, this.props.location);
    };

    getContent = () => {
        const { padding_top, padding_bottom, description, url, displayType, background_color, carouselList } = this.props.data;
        let style = {
            padding_top,
            padding_bottom,
            background_color,
            displayType
        }
        return {
            style,
            description,
            url,
            carouselList,
            type: this.props.type
        };
    };

    render() {
        const { imageContent, shownImage, showEditorPanel, showEditorPanelTab } = this.state;
        const { displayFormContent, changeIndexPlace, location } = this.props;
        const { padding_top, padding_bottom, description, url, displayType, background_color, carouselList } = this.props.data;
        return (
            <div className={`d-flex content pt-${padding_top} pb-${padding_bottom}`} style={background_color ? { backgroundColor: `${background_color}` } : null}>
                <div className='col-md-9 pl-0'>
                    <div className="d-flex align-items-center justify-content-center left-content">
                        <div className="row align-items-center justify-content-center">
                            {displayType !== 'slider' &&
                                <>
                                    <div className={displayType == 'both' ? "col-md-6" : displayType == 'center' ? "col-md-12 text-center" : "col-md-12"}>
                                        <div className={(displayType == 'full' || displayType == 'textOnImage') ? "d-inline-block position-relative" : displayType == 'center' ? "d-inline-block position-relative w-50" : "w-100"}>
                                            <img src={url} alt="" />
                                        </div>
                                    </div>
                                    {
                                        (displayType == 'both' || displayType == 'textOnImage') &&
                                        <div className={displayType == 'both' ? "col-md-6" : "position-absolute w-50 h-50 image-description"}>
                                            <p>{description}</p>
                                        </div>
                                    }
                                </>
                            }
                            {displayType === 'slider' &&
                                <Carousel autoPlay="true" selectedItem={0}>
                                    {
                                        carouselList.map((val) => {
                                            return (
                                                <div>
                                                    <img src={val.url} />
                                                </div>
                                            )
                                        })
                                    }
                                </Carousel>
                                // <div className="carousel">
                                //     <div className="d-flex align-items-center justify-content-center">
                                //         <div className="col-md-1 px-0 text-center">
                                //             <i className="far fa-angle-left"></i>
                                //         </div>
                                //         <div className="col-md-10 px-0 text-center">
                                //             <img src={url} alt="" />
                                //         </div>
                                //         <div className="col-md-1 px-0 text-center">
                                //             <i className="far fa-angle-right"></i>
                                //         </div>
                                //     </div>
                                //     <div className="d-flex align-items-center justify-content-center carousel-bullets">
                                //         <span className="active"></span>
                                //         <span></span>
                                //         <span></span>
                                //     </div>
                                // </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pr-0">
                    <div className="d-flex flex-wrap right-content">
                        <div className="d-block w-100 editor-buttons">
                            {(location.index !== location.length - 1) && <i className="fal fa-arrow-down" onClick={() => changeIndexPlace(this.props.location, +1)}></i>}
                            {location.index > 0 && <i className="fal fa-arrow-up" onClick={() => changeIndexPlace(this.props.location, -1)}></i>}
                            <i className="fal fa-copy" onClick={() => displayFormContent(this.props)}></i>
                            <i className="fal fa-trash" onClick={this.clearContent}></i>
                            <i className="fal fa-pen" onClick={() => this.setProperties({})}></i>
                        </div>
                        <div className="d-block w-100 paragraph-content">
                            <div className="paragraph-toggle" onClick={this.showImageContent}>
                                {displayType == 'center' ? 'Image Centered' : displayType == 'full' ? 'Image Full Width' : displayType == 'both' ? 'Image & Text' : displayType == 'slider' ? 'Carousel' : 'Text on Image'} <i className="fas fa-caret-down"></i>
                            </div>
                            {imageContent === true &&
                                <div className="paragraph-contents">
                                    <div className="paragraph-content-left">
                                        {shownImage === 0 &&
                                            <div className="image-centered">
                                                <img src={horizontalImage} alt="" />
                                            </div>
                                        }
                                        {shownImage === 1 &&
                                            <div className="image-full-width">
                                                <img src={horizontalImage} alt="" />
                                            </div>
                                        }
                                        {shownImage === 2 &&
                                            <div className="image-text">
                                                <div className="row align-items-center justify-content-center">
                                                    <div className="col-md-6">
                                                        <img src={verticalImage} alt="" />
                                                    </div>
                                                    <div className="col-md-6 pl-0">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {shownImage === 3 &&
                                            <div className="carousel">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="col-md-1 px-0 text-center">
                                                        <i className="far fa-angle-left"></i>
                                                    </div>
                                                    <div className="col-md-10 px-0 text-center">
                                                        <img src={horizontalImage} alt="" />
                                                    </div>
                                                    <div className="col-md-1 px-0 text-center">
                                                        <i className="far fa-angle-right"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center carousel-bullets">
                                                    <span className="active"></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                        }
                                        {shownImage === 4 &&
                                            <div className="text-on-image">
                                                <img src={horizontalImage} alt="" />
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <ul>
                                        <li onMouseOver={() => this.listMouseOver(0)} onClick={() => this.listMouseOut('center')} className={shownImage === 0 && 'active'}>
                                            Image Centered
                                        </li>
                                        <li onMouseOver={() => this.listMouseOver(1)} onClick={() => this.listMouseOut('full')} className={shownImage === 1 && 'active'}>
                                            Image Full Width
                                        </li>
                                        <li onMouseOver={() => this.listMouseOver(2)} onClick={() => this.listMouseOut('both')} className={shownImage === 2 && 'active'}>
                                            {`Image & Text`}
                                        </li>
                                        <li onMouseOver={() => this.listMouseOver(3)} onClick={() => this.listMouseOut('slider')} className={shownImage === 3 && 'active'}>
                                            Carousel
                                        </li>
                                        <li onMouseOver={() => this.listMouseOver(4)} onClick={() => this.listMouseOut('textOnImage')} className={shownImage === 4 && 'active'}>
                                            Text on Image
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div >
        );
    }
}