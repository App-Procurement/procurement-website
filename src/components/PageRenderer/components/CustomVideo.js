import React, { Component } from 'react';
export class CustomVideo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { containerClass, url, description, style } = this.props;
        return (
            <div className={containerClass} style={{ paddingTop: style.padding_top, padding_bottom: style.padding_bottom, backgroundColor: style.background_color }}>
                <div className="row align-items-center justify-content-center">

                    <div className="col-md-6">
                        <p>{description}</p>
                    </div>
                    <div className="col-md-6">
                        <video width="100%" height="240" controls>
                            <source src={url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        );
    }
}