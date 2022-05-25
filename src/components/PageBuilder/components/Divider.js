import React, { Component } from 'react';

export class Divider extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            dividerContent: false,
            shownDivider: 0,
            showEditorPanel: false,
            showEditorPanelTab: 0,
            isActive: false,
            padding_top: 0,
            padding_bottom: 0,
        }
    };

    showDividerContent = () => {
        const { dividerContent } = this.state;
        this.setState({ dividerContent: !dividerContent });
    }

    clearContent = () => {
        this.props.onClickDelete(this.props.location);
    }

    showEditorPanel = () => {
        const { showEditorPanel } = this.state;
        this.setState({ showEditorPanel: !showEditorPanel });
    }

    dividerMouseOver = (index) => {
        this.setState({ shownDivider: index });
    }

    dividerMouseOut = () => {
        this.setState({ shownDivider: 0 });
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
        const { padding_top, padding_bottom } = formContent;
        this.setState({
            padding_top: padding_top,
            padding_bottom: padding_bottom,
        });
        // this.props.setPropertiesData(formContent, this.props.location);
    };

    getContent = () => {
        const { padding_top, padding_bottom, background_color } = this.state;
        let style = {
            padding_top,
            padding_bottom,
            background_color
        }
        return {
            style,
            type: this.props.type
        };
    };

    render() {
        const { dividerContent, shownDivider, showEditorPanel, showEditorPanelTab } = this.state;
        const { displayFormContent, changeIndexPlace, location } = this.props;
        const { padding_top, padding_bottom, background_color } = this.props.data;
        return (
            <div className={`d-flex content pt-${padding_top} pb-${padding_bottom}`} style={background_color ? { backgroundColor: `${background_color}` } : null}>
                <div className='col-md-9 pl-0'>
                    <div className="d-flex flex-row flex-wrap text-center left-content">
                        <div className="d-block w-100 mt-3 divider"></div>
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
                            <div className="paragraph-toggle" onClick={this.showDividerContent}>
                                {`Divider`} <i className="fas fa-caret-down"></i>
                            </div>
                            {dividerContent === true &&
                                <div className="paragraph-contents">
                                    <div className="paragraph-content-left">
                                        {shownDivider === 0 &&
                                            <div className="d-flex h-100 align-items-center justify-content-center">
                                                <div className="d-block w-100 divider"></div>
                                            </div>
                                        }
                                        {shownDivider === 1 &&
                                            <div className="d-flex h-100 align-items-center justify-content-center">

                                            </div>
                                        }
                                    </div>
                                    <ul>
                                        <li onMouseOver={() => this.dividerMouseOver(0)} onMouseOut={this.dividerMouseOut} className={shownDivider === 0 && 'active'}>
                                            {`Divider`}
                                        </li>
                                        <li onMouseOver={() => this.dividerMouseOver(1)} onMouseOut={this.dividerMouseOut} className={shownDivider === 1 && 'active'}>
                                            {`Spacer`}
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}