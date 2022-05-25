import React, { Component } from 'react';
import horizontalImage from '../img/horizontal-image.png';
export class Video extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            showEditorPanel: false,
            showEditorPanelTab: 0
        }
    };

    clearContent = () => {
        this.props.onClickDelete(this.props.location);
    }

    showEditorPanel = () => {
        const { showEditorPanel } = this.state;
        this.setState({ showEditorPanel: !showEditorPanel });
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
    };

    changeProperties = (formContent) => {
        // const { padding_top, padding_bottom, url, description } = formContent;
        // this.setState({
        //     padding_top: padding_top,
        //     padding_bottom: padding_bottom,
        //     url: url,
        //     description: description,
        // });
        // this.props.setPropertiesData(formContent, this.props.location);
    };

    getContent = () => {
        const { padding_top, padding_bottom, url, description, background_color } = this.props.data;
        let style = {
            padding_top,
            padding_bottom,
            background_color
        }
        return {
            style,
            description,
            url,
            type: this.props.type
        };
    };

    render() {
        const { displayFormContent, changeIndexPlace, location } = this.props;
        const { padding_top, padding_bottom, url, description, background_color } = this.props.data;
        return (
            <div className={`d-flex content pt-${padding_top} pb-${padding_bottom}`} style={background_color ? { backgroundColor: `${background_color}` } : null}>
                <div className="col-md-9 pl-0">
                    <div className="row flex-row flex-wrap left-content position-relative">
                        <div className="col-md-6">
                            <video key={url} width="100%" height="240" controls>
                                <source src={url} type="video/mp4" />
                            </video>
                            {/* <div className="d-flex w-100 h-100 align-items-center justify-content-center play-btn">
                                <i className="fas fa-play-circle"></i>
                            </div> */}
                        </div>
                        <div className="col-md-6">
                            <p>{description}</p>
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
                    </div>
                </div>
            </div>
        );
    }
}