import React, { Component } from 'react';
import verticalImage from '../img/vertical-image.png';
import horizontalImage from '../img/horizontal-image.png';

export class Image extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            imageContent: false,
            shownImage: 0,
            showEditorPanel: false,
            showEditorPanelTab: 0,
            isActive: false
        }
    };

    componentDidMount() {
        const { properties } = this.props;
        const { padding_bottom, padding_top, description, placeHolder, url } = properties;
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

    handleStateChange = (e) => {
        const { value, name } = e.target;
        const { properties } = this.props;
        properties[name] = value;
        this.props.onChangeContent(properties);
    }

    handleSliderStateChange = (e, index) => {
        const { value, name } = e.target;
        const { properties } = this.props;
        properties.carouselList[index]['url'] = value;
        this.props.onChangeContent(properties);
    }

    addNewImage = () => {
        let { properties } = this.props;
        properties.carouselList.push({ url: '' });
        this.props.onChangeContent(properties);
    }

    removeListing = (index) => {
        const { properties } = this.props;
        properties.carouselList.splice(index, 1);
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
                                {properties['displayType'] !== 'slider' &&
                                    <>
                                        <div className="tab-content">
                                            <img src={properties['url']} alt="" />
                                            <h6>Upload image</h6>
                                            <input type="text" value={properties['url']} name="url" onChange={this.handleStateChange} />
                                        </div>
                                        <div className="tab-content">
                                            <h6>Description</h6>
                                            <input type="text" value={properties['description']} name="description" onChange={this.handleStateChange} />
                                        </div>
                                    </>
                                }
                                {properties['displayType'] === 'slider' &&
                                    <>
                                        {properties.carouselList.map((val, index) => {
                                            return (
                                                <div className="tab-content">
                                                     <button className="btn btn-primary float-right">
                                                        <i className="fal fa-trash" onClick={() => this.removeListing(index)}></i>
                                                    </button>
                                                    <img src={val['url']} alt="" />
                                                    <h6>Upload image</h6>
                                                    <input type="text" value={val['url']} name="url" onChange={(e) => this.handleSliderStateChange(e, index)} />
                                                </div>
                                            )
                                        })
                                        }
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-link add-new-item" onClick={this.addNewImage}><i class="far fa-plus"></i> Add New Item</button>
                                        </div>
                                    </>
                                }
                            </>
                        }
                        {showEditorPanelTab === 1 &&
                            <div className="tab-settings">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Padding Top</label>
                                            <select className="form-control" name="padding_top" onChange={this.handleStateChange}>
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
                                            <select className="form-control" name="padding_bottom" onChange={this.handleStateChange}>
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
                                                    name='background_color' onChange={this.handleStateChange} />
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