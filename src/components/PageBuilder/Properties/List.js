import React, { Component } from 'react';

export class List extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            listContent: false,
            shownList: 0,
            showEditorPanel: false,
            showEditorPanelTab: 0,
            isActive: false
        }
    };

    componentDidMount() {
        const { properties } = this.props;
        const { ListingData, padding_bottom, padding_top, listType, types } = properties;
    }

    showListContent = () => {
        const { listContent } = this.state;
        this.setState({ listContent: !listContent });
    }

    clearContent = () => {
        this.props.onClickDelete(this.props.location);
    }

    showEditorPanel = () => {
        const { showEditorPanel } = this.state;
        this.setState({ showEditorPanel: !showEditorPanel });
    }

    listMouseOver = (index) => {
        this.setState({ shownList: index });
    }

    listMouseOut = () => {
        this.setState({ shownList: 0 });
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
        if (properties.ListingData) {
            for (let i = 0; i < properties.ListingData.length; i++) {
                let row = properties.ListingData[i];
                retData.push(
                    <div className="tab-content mb-3">
                        <p><span>List item</span></p>
                        <p><span>{i + 1}</span></p>
                        <div className="d-flex justify-content-between">
                            <input type="text" name="value" value={row.value} onChange={(e) => this.handleStateChange(e, i)} />
                            <i onClick={() => this.removeListing(i)} className="fal fa-trash"></i>
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
        this.setState({
            properties
        });
        this.props.onChangeContent(properties);
    }

    addNewList = () => {
        let { properties } = this.props;
        properties.ListingData.push({ value: '', isDelete: false });
        this.setState({
            properties,
        });
        this.props.onChangeContent(properties);
    }

    handleStateChangePadding = (e) => {
        const { value, name } = e.target;
        const { properties } = this.props;
        properties[name] = value;
        if (name == 'listType') {
            properties.types = '';
        }
        this.props.onChangeContent(properties);
    }

    render() {
        const { showEditorPanelTab } = this.state;
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
                                <button className="btn btn-primary add-new-item" onClick={this.addNewList}>
                                    <i class="far fa-plus"></i> Add New Item
                                </button>
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
                                            <label>List Type</label>
                                            <select className="form-control" name="listType" onChange={this.handleStateChangePadding}>
                                                <option value="unordered">Unordered</option>
                                                <option value="ordered">Ordered</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Listing Types</label>
                                            <select className="form-control" name="types" onChange={this.handleStateChangePadding}>
                                                {properties.listType == 'unordered' &&
                                                    <>
                                                        <option value="">--select type--</option>
                                                        <option value="disc">disc</option>
                                                        <option value="circle">circle</option>
                                                        <option value="square">square</option>
                                                        <option value="none">none</option>
                                                    </>
                                                }
                                                {properties.listType == 'ordered' &&
                                                    <>
                                                        <option value="">--select type--</option>
                                                        <option value="1">1</option>
                                                        <option value="A">A</option>
                                                        <option value="a">a</option>
                                                        <option value="I">I</option>
                                                        <option value="i">i</option>
                                                    </>
                                                }
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