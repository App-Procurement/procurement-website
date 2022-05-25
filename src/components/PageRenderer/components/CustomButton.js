import React, { Component } from 'react';
export class CustomButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { containerClass, title, style } = this.props;
        console.log(style)
        return (
            <div className={containerClass} style={{ paddingTop: style.padding_top, padding_bottom: style.padding_bottom, backgroundColor: style.background_color }}>
                <div className='col-8 pl-0'>
                    <div className="d-flex align-items-center justify-content-center left-content position-relative">
                        <button className="btn btn-primary">{title}</button>
                    </div>
                </div>
            </div>
        );
    }
}