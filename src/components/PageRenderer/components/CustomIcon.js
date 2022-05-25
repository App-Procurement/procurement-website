import React, { Component } from 'react';
import iconImage from '../../PageBuilder/img/icon-image.png'
export class CustomIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    displayIconList = () => {
        const { ListingData, limit } = this.props;
        let retData = [];
        if (ListingData) {
            for (let i = 0; i < ListingData.length; i++) {
                if (i < limit) {
                    retData.push(
                        <div className="col-md-4">
                            <p><img src={ListingData[i].icon} alt="" className="mb-2 w-50" /></p>
                            <p>
                                {ListingData[i].value}
                            </p>
                        </div>
                    );
                }
            }
        }
        return retData;
    }

    render() {
        const { containerClass, style } = this.props;
        return (
            <div className={containerClass} style={{ paddingTop: style.padding_top, padding_bottom: style.padding_bottom, backgroundColor: style.background_color }}>
                <div className="row">
                    {this.displayIconList()}
                </div>
            </div>
        );
    }
}