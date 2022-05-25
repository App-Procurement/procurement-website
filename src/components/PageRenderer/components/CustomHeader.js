import React, { Component } from 'react';
export class CustomHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { containerClass, title, style } = this.props;
        return (
            <div className={containerClass} style={{ paddingTop: style.padding_top, paddingBottom: style.padding_bottom, backgroundColor: style.background_color }}>
                <h4>{title}</h4>
            </div>
        );
    }
}