import React, { Component } from 'react';
import iconImage from '../img/icon-image.png';

export class Icon extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            iconContent: false,
            shownIcon: 2,
            showEditorPanel: false,
            showEditorPanelTab: 0,
            listCount: 1,
            // displayLimit: 3,
            isActive: false
        }
    };

    showIconContent = () => {
        const { iconContent } = this.state;
        this.setState({ iconContent: !iconContent });
    }

    clearContent = () => {
        this.props.onClickDelete(this.props.location);
    }

    showEditorPanel = () => {
        const { showEditorPanel } = this.state;
        this.setState({ showEditorPanel: !showEditorPanel });
    }

    iconMouseOver = (index) => {
        this.setState({ shownIcon: index });
    }

    iconMouseOut = () => {
        this.setState({ shownIcon: 2 });
    }

    showEditorPanelTab = (index) => {
        this.setState({ showEditorPanelTab: index });
    }

    setProperties = () => {
        this.props.setPropertiesData({}, this.props.location);
        this.setIsActive(true);
    }

    setIsActive = (isActive) => {
        this.setState({
            isActive
        });
    }

    displayIconList = () => {
        const { displayLimit } = this.state;
        const { ListingData } = this.props.data;
        console.log(ListingData)
        let retData = [];
        if (ListingData) {
            for (let i = 0; i < ListingData.length; i++) {
                // if (i < displayLimit) {
                retData.push(
                    <div className="col-md-4 pb-4">
                        <p><img src={ListingData[i].icon} alt="" className="mb-2 w-50" /></p>
                        <p>
                            {ListingData[i].value}
                        </p>
                    </div>
                );
                // }
            }
        }
        return retData;
    }

    changeProperties = (formContent) => {
        const { ListingData, padding_top, padding_bottom } = this.props.data;
        this.setState({
            ListingData: ListingData,
            padding_top: padding_top,
            padding_bottom: padding_bottom,
        });
    }

    getContent = () => {
        const { padding_top, padding_bottom, ListingData, background_color } = this.props.data;
        const { displayLimit } = this.state;
        let style = {
            padding_top,
            padding_bottom,
            background_color
        }
        return {
            style,
            type: this.props.type,
            ListingData,
            displayLimit
        };
    };

    setCount = (count) => {
        this.setState({
            displayLimit: count,
            iconContent: false,
        })
    }

    render() {
        const { iconContent, shownIcon, showEditorPanel, showEditorPanelTab, listCount } = this.state;
        const { displayFormContent, changeIndexPlace, location } = this.props;
        const { padding_top, padding_bottom, ListingData, background_color } = this.props.data;

        return (
            <div className={`d-flex content pt-${padding_top} pb-${padding_bottom}`} style={background_color ? { backgroundColor: `${background_color}` } : null}>
                <div className='col-md-9 pl-0'>
                    <div className="d-flex flex-row flex-wrap text-center left-content">
                        <div className="row">
                            {this.displayIconList()}
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
                            <i className="fal fa-pen" onClick={() => this.setProperties()}></i>
                        </div>
                        <div className="d-block w-100 paragraph-content">
                            <div className="paragraph-toggle" onClick={this.showIconContent}>
                                {`Column Icon & Text`} <i className="fas fa-caret-down"></i>
                            </div>
                            {iconContent === true && ListingData && ListingData.length > 0 &&
                                <div className="paragraph-contents">
                                    <div className="paragraph-content-left">
                                        <div className="d-block text-center column-list">
                                            <div className="d-flex">
                                                {
                                                    ListingData.map((val, index) => {
                                                        if (index < listCount) {
                                                            return (
                                                                <div className={listCount == 1 ? "col-md-12 pl-0" : listCount == 2 ? "col-md-6 pl-0" : "col-md-4 pl-0"}>
                                                                    <p><img src={val.icon} alt="" className="mb-2 w-50" /></p>
                                                                    <p>{val.value.substring(0, 36)}</p>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <ul>
                                        <li onMouseOver={() => this.setState({ listCount: 1 })} className={listCount === 1 && 'active'} onClick={() => this.setCount(1)}>
                                            {`Icon & Text`}
                                        </li>
                                        <li onMouseOver={() => this.setState({ listCount: 2 })} className={listCount === 2 && 'active'} onClick={() => this.setCount(2)}>
                                            {`2 Column Icon & Text`}
                                        </li>
                                        <li onMouseOver={() => this.setState({ listCount: 3 })} className={listCount === 3 && 'active'} onClick={() => this.setCount(3)}>
                                            {`3 Column Icon & Text`}
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