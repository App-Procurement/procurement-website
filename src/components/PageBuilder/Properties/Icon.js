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
            isActive: false
        }
    };

    componentDidMount() {
        const { properties } = this.props;
        const { ListingData, padding_bottom, padding_top } = properties;
    }

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

    setIsActive = (isActive) => {
        this.setState({
            isActive
        });
    }

    showEditorPanel = () => {
        this.props.showhideProperties();
    }

    displayListing = () => {
        const { properties } = this.props;
        let retData = [];
        if (properties && properties.ListingData) {
            for (let i = 0; i < properties.ListingData.length; i++) {
                let row = properties.ListingData[i];
                retData.push(
                    <div className="tab-content mb-3">
                        <button className="btn btn-primary float-right">
                            <i className="fal fa-trash" onClick={() => this.removeListing(i)}></i>
                        </button>
                        <p><span>{i + 1}</span> Image</p>
                        <div className="row align-items-center justify-content-between">
                            <div className="col-4">
                                <p><img src={row.icon} alt="" /></p>
                            </div>
                            <div className="col-8">
                                <div className="d-flex flex-wrap pb-3">
                                    <label className="d-block w-100">Text</label>
                                    <input type="text" value={row.value} name="value" onChange={(e) => this.handleStateChange(e, i)} />
                                </div>
                                <div className="d-flex flex-wrap pb-3">
                                    <label className="d-block w-100">Icon Url</label>
                                    <input type="text" value={row.icon} name="icon" onChange={(e) => this.handleStateChange(e, i)} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        return retData;
    }

    handleStateChange = (e, index) => {
        const { value, name } = e.target;
        const { properties } = this.props;
        properties.ListingData[index][name] = value;
        this.props.onChangeContent(properties);
    }

    removeListing = (index) => {
        const { properties } = this.props;
        properties.ListingData.splice(index, 1);
        this.props.onChangeContent(properties);
    }

    addNewList = () => {
        let { properties } = this.props;
        properties.ListingData.push({ value: '', name: '', isDelete: false });
        this.props.onChangeContent(properties);
    }

    handleStateChangePadding = (e) => {
        const { value, name } = e.target;
        const { properties } = this.props;
        properties[name] = value;
        this.props.onChangeContent(properties);
    }

    render() {
        const { iconContent, shownIcon, showEditorPanel, showEditorPanelTab } = this.state;
        const { properties } = this.props;
        return (
            <div className='editor-panel show'>
                <div className="d-flex justify-content-between panel-heading">
                    <h5>Edit Numbered List</h5>
                    <i className="fal fa-times" onClick={this.showEditorPanel}></i>
                </div>
                <div className="panel-tabs">
                    <ul>
                        <li onClick={() => this.showEditorPanelTab(0)} className={showEditorPanelTab === 0 && 'active'}>CONTENT</li>
                        <li onClick={() => this.showEditorPanelTab(1)} className={showEditorPanelTab === 1 && 'active'}>SETTINGS</li>
                    </ul>
                    <div className="panel-tab-contents">
                        {showEditorPanelTab === 0 &&
                            <>
                                {this.displayListing()}
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-link add-new-item" onClick={this.addNewList}><i class="far fa-plus"></i> Add New Item</button>
                                </div>
                            </>
                        }
                        {showEditorPanelTab === 1 &&
                            <div className="tab-settings">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Padding Top</label>
                                            <select className="form-control" name="padding_top" onChange={this.handleStateChangePadding}>
                                                <option value="1">1px</option>
                                                <option value="2">2px</option>
                                                <option value="3">3px</option>
                                                <option value="4">4px</option>
                                                <option value="5">5px</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Padding Bottom</label>
                                            <select className="form-control" name="padding_bottom" onChange={this.handleStateChangePadding}>
                                                <option value="1">1px</option>
                                                <option value="2">2px</option>
                                                <option value="3">3px</option>
                                                <option value="4">4px</option>
                                                <option value="5">5px</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Background Color</label>
                                            <div className="d-flex background">
                                                <span></span>
                                                <input type='color' placeholder='color name' value={properties['background_color']}
                                                    name='background_color' onChange={this.handleStateChangePadding} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}