import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export class CustomImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { containerClass, url, description, style, sliderData } = this.props;
        return (
            <div className={containerClass} style={{ paddingTop: style.padding_top, padding_bottom: style.padding_bottom, backgroundColor: style.background_color }}>
                <div className="row align-items-center justify-content-center">
                    {style.displayType !== 'slider' &&
                        <>
                            <div className={style.displayType == 'both' ? "col-md-6" : style.displayType == 'center' ? "col-md-12 text-center" : "col-md-12"}>
                                <div className={(style.displayType == 'full' || style.displayType == 'textOnImage') ? "d-inline-block position-relative" : style.displayType == 'center' ? "d-inline-block position-relative w-50" : "w-100"}>
                                    <img src={url} alt="" />
                                </div>
                            </div>
                            {
                                (style.displayType == 'both' || style.displayType == 'textOnImage') &&
                                <div className={style.displayType == 'both' ? "col-md-6" : "position-absolute w-50 h-50 image-description"}>
                                    <p>{description}</p>
                                </div>
                            }
                        </>
                    }
                    {style.displayType === 'slider' &&
                        <Carousel autoPlay="true" selectedItem={0}>
                            {
                                sliderData.map((val) => {
                                    return (
                                        <div>
                                            <img src={val.url} />
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    }
                    {/* <div className="col-md-6">
                        <img src={url} alt="" />
                    </div>
                    <div className="col-md-6">
                        <p>{description}</p>
                    </div> */}
                </div>
            </div >
        );
    }
}