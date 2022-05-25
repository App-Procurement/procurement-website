import React, { Component } from 'react';

export class Button extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            showEditorPanel: false,
            showEditorPanelTab: 0,
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
        const { title, padding_top, padding_bottom } = this.state;
        const { type } = this.props;
        this.props.setPropertiesData({}, this.props.location);
        this.setIsActive(true);
    }

    setIsActive = (isActive) => {
        this.setState({
            isActive
        });
    };

    changeProperties = (formContent) => {
        const { title, padding_top, padding_bottom } = this.props.data;
        this.setState({
            title: title,
            padding_top: padding_top,
            padding_bottom: padding_bottom,
        });
    };

    getContent = () => {
        const { title, padding_top, padding_bottom,background_color } = this.props.data;
        let style = {
            padding_top,
            padding_bottom,
            background_color
        }
        return {
            title,
            style,
            type: this.props.type
        };
    };


    render() {
        const { displayFormContent, changeIndexPlace, location } = this.props;
        const { title, padding_top, padding_bottom, background_color } = this.props.data;
        return (
            <div className={`d-flex content pt-${padding_top} pb-${padding_bottom}`} style={background_color ? { backgroundColor: `${background_color}` } : null}>
                <div className='col-md-9 pl-0'>
                    <div className="d-flex align-items-center justify-content-start left-content position-relative">
                        <button className="btn btn-primary">{title}</button>
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