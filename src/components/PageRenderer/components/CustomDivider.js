import { withWidth } from '@material-ui/core';
import React, { Component } from 'react';
export class CustomDivider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { containerClass, style } = this.props;
        return (
            <div className={containerClass} style={{ paddingTop: style.padding_top, padding_bottom: style.padding_bottom, backgroundColor: style.background_color }}>
                <div className="paragraph-toggle">
                    <div style={{ display: "flex", Width: "100%", borderBottom: style.border }}></div>
                </div>
            </div>
        );
    }
}