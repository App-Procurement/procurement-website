import React, { Component } from 'react';

export class Button extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            showEditorPanel: false,
            showEditorPanelTab: 0,
            background_color: ''
        }
    };

    componentDidMount() {
        const { properties } = this.props;
    }

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

    setIsActive = (isActive) => {
        this.setState({
            isActive
        });
    };

    showEditorPanel = () => {
        this.props.showhideProperties();
    }

    handleStateChange = (e) => {
        const { value, name } = e.target;
        const { properties } = this.props;
        properties[name] = value;
        this.props.onChangeContent(properties);
    }

    render() {
        const { showEditorPanel, showEditorPanelTab } = this.state;
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
                            <div className="tab-content mb-3">
                                <p><span>Button</span></p>
                                <input type="text" value={properties['title']} name="title" onChange={this.handleStateChange} />
                            </div>
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