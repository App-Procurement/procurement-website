import React, { Component } from 'react';

export class CustomList extends React.Component {
    constructor(props) {
        super(props);
    }

    displayListing = () => {
        const { ListingData, style } = this.props;
        let retData = [];
        if (ListingData) {
            for (let i = 0; i < ListingData.length; i++) {
                retData.push(
                    <li type={style.types}>
                        {ListingData[i].value}
                    </li>
                )
            }
        }
        return retData;
    }

    render() {
        const { containerClass, style, data } = this.props;
        return (
            <div className={containerClass} style={{ paddingTop: style.padding_top, padding_bottom: style.padding_bottom, backgroundColor: style.background_color }}>
                <ul style={{ padding: 0, margin: 0, listStyle: style.listType, }}>
                    {this.displayListing()}
                </ul>
            </div>
        );
    }
}