import React, { Component } from 'react';
import './css/workflow.css';
import { Heading, List, Image, Video, Icon, Divider, Button, HTMLProperties } from './components';
import { Scrollbars } from 'react-custom-scrollbars';
import { menuIcons } from './img';
import { v4 } from 'uuid';

export const componentType = {
    TEXT: "text",
    LIST: "list",
    IMAGE: "image",
    VIDEO: "video",
    ICON: "icon",
    DIVIDER: "divider",
    BUTTON: "button"
};

const defaultData = {
    button: {
        title: 'Continue',
        padding_top: 0,
        padding_bottom: 0,
        background_color: '',
        type: componentType.BUTTON
    },
    text: {
        title: 'Heading',
        padding_top: 0,
        padding_bottom: 0,
        background_color: '',
        type: componentType.TEXT
    },
    divider: {
        padding_top: 0,
        padding_bottom: 0,
        background_color: '',
        type: componentType.DIVIDER
    },
    list: {
        ListingData: [
            { value: 'Phasellus vestibulum nulla a mi mattis, in fringilla elit sodales.', isDelete: false },
            { value: 'Duis ullamcorper massa tincidunt, euismod tortor et, mollis erat.', isDelete: false },
            { value: 'Pellentesque lobortis nisi ut dolor laoreet sollicitudin et vitae justo..', isDelete: false },
            { value: 'Mauris maximus lorem vitae neque pellentesque, sit amet aliquam turpis feugiat.', isDelete: false },
        ],
        padding_top: 0,
        padding_bottom: 0,
        background_color: '',
        listType: 'unordered',
        types: 'disc',
        type: componentType.LIST
    },
    icon: {
        ListingData: [
            { value: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', isDelete: false, icon: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', name: 'video.mp4' },
            { value: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', isDelete: false, icon: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', name: 'video.mp4' },
            { value: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', isDelete: false, icon: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', name: 'video.mp4' },
        ],
        padding_top: 0,
        padding_bottom: 0,
        background_color: '',
        type: componentType.ICON
    },
    image: {
        padding_top: 0,
        padding_bottom: 0,
        background_color: '',
        displayType: 'both',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
        type: componentType.IMAGE,
        carouselList: [
            { url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
        ]
    },
    video: {
        padding_top: 0,
        padding_bottom: 0,
        background_color: '',
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        type: componentType.VIDEO
    }
};

export class PageEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarData: [
                {
                    title: 'Text',
                    type: componentType.TEXT,
                    value: 'text',
                    iconImg: menuIcons.text

                },
                {
                    title: 'List',
                    type: componentType.LIST,
                    value: 'list',
                    iconImg: menuIcons.list
                },
                {
                    title: 'Image',
                    type: componentType.IMAGE,
                    value: 'image',
                    iconImg: menuIcons.image
                },
                {
                    title: 'Video',
                    type: componentType.VIDEO,
                    value: 'video',
                    iconImg: menuIcons.video
                },
                {
                    title: 'Icon',
                    type: componentType.ICON,
                    value: 'icon',
                    iconImg: menuIcons.icon
                },
                {
                    title: 'Divider',
                    type: componentType.DIVIDER,
                    value: 'divider',
                    iconImg: menuIcons.divider
                },
                {
                    title: 'Button',
                    type: componentType.BUTTON,
                    value: 'button',
                    iconImg: menuIcons.button
                }
            ],
            showRightPart: false,
            propertiesJsonData: [],
            formData: [],
        };
        this.formContentRefs = [];
        this.propertiesRef = React.createRef();
    };

    displaySideBar = () => {
        const { sidebarData } = this.state;
        const sidebarReturnData = [];
        for (let i = 0; i < sidebarData.length; i++) {
            let row = sidebarData[i];
            sidebarReturnData.push(
                <li key={v4()} onClick={e => this.displayFormContent(row)}>
                    <div className="d-block">
                        <span><img src={row.iconImg} alt={row.title} width="40" height="40" /></span>
                        <p>{row.title}</p>
                    </div>
                </li>
            )
        }
        return sidebarReturnData;
    }

    displayFormContent = (fieldData) => {
        const { formData } = this.state;
        const { type } = fieldData;
        let componentdata = {
            ...defaultData[type]
        };
        formData.push({ type, componentdata });
        this.setState({
            formData
        });
    }

    renderComponents = () => {
        const { formData } = this.state;
        let formDataContent = [];
        this.formContentRefs = [];
        for (let i = 0; i < formData.length; i++) {
            const data = formData[i];
            let { type, componentdata } = data;
            const location = {
                index: i,
                length: formData.length
            };
            const ref = React.createRef();
            if (type === componentType.TEXT) {
                formDataContent.push(<div className="formDataContent" key={i + 'form_data'}><Heading type={type} ref={ref} data={componentdata} location={location} displayFormContent={this.displayFormContent} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} changeIndexPlace={this.onClickChangeIndex} /></div>);
            } else if (type === componentType.LIST) {
                formDataContent.push(<div className="formDataContent" key={i + 'form_data'}><List type={type} ref={ref} location={location} data={componentdata} displayFormContent={this.displayFormContent} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} changeIndexPlace={this.onClickChangeIndex} /></div>);
            } else if (type === componentType.IMAGE) {
                formDataContent.push(<div className="formDataContent" key={i + 'form_data'}><Image type={type} ref={ref} location={location} data={componentdata} displayFormContent={this.displayFormContent} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} changeIndexPlace={this.onClickChangeIndex} /></div>);
            } else if (type === componentType.VIDEO) {
                formDataContent.push(<div className="formDataContent" key={i + 'form_data'}><Video type={type} ref={ref} location={location} data={componentdata} displayFormContent={this.displayFormContent} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} changeIndexPlace={this.onClickChangeIndex} /></div>);
            } else if (type === componentType.ICON) {
                formDataContent.push(<div className="formDataContent" key={i + 'form_data'}><Icon type={type} ref={ref} location={location} data={componentdata} onClickChangeIndex={this.onClickChangeIndex} displayFormContent={this.displayFormContent} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} changeIndexPlace={this.onClickChangeIndex} /></div>);
            } else if (type === componentType.DIVIDER) {
                formDataContent.push(<div className="formDataContent" key={i + 'form_data'}><Divider type={type} ref={ref} location={location} data={componentdata} displayFormContent={this.displayFormContent} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} changeIndexPlace={this.onClickChangeIndex} /></div>);
            } else if (type === componentType.BUTTON) {
                formDataContent.push(<div className="formDataContent" key={i + 'form_data'}><Button type={type} ref={ref} location={location} displayFormContent={this.displayFormContent} onClickDelete={this.onClickDelete} data={componentdata} setPropertiesData={this.setProperty} changeIndexPlace={this.onClickChangeIndex} /></div>);
            }
            this.formContentRefs.push(ref);
        }
        return formDataContent;
    };

    onClickDelete = (location) => {
        const { formData } = this.state;
        if (location) {
            const { index } = location;
            formData.splice(index, 1);
            this.formContentRefs.splice(index, 1);
            this.setState({
                activeLocation: -1,
                showRightPart: false,
                formData
            });
        }
    };

    onClickChangeIndex = (location, action) => {
        const { formData } = this.state;
        let { index } = location;
        if (location) {
            let newPlace = index + action;
            let temp = formData[index];
            formData[index] = formData[newPlace];
            formData[newPlace] = temp;
        }
        this.setState({ formData })
    }

    setProperty = (data, location) => {
        const { formData } = this.state;
        this.setState({
            showRightPart: true,
            activeLocation: location.index,
        });
        // }
        this.propertiesRef.current.setProperties(formData[location.index].componentdata, location);
    }

    showRightbar = () => {
        const { showRightPart } = this.state;
        let showright = !showRightPart;
        this.setState({
            showRightPart: showright,
        })
    }

    changeWorkProperties = (data) => {
        const { activeLocation, propertiesJsonData, formData } = this.state;
        const ref = this.formContentRefs[activeLocation];
        formData[activeLocation].componentdata = data;
        this.setState({ formData });
        // if (ref) {
        // ref.current.changeProperties(data);
        // }
    }

    setWorkflowJson = (data, index) => {
        const { propertiesJsonData } = this.state;
        let Data = {
            ...data,
            index
        }
        let proData = propertiesJsonData;
        if (propertiesJsonData && propertiesJsonData.length > 0) {
            for (let i = 0; i < propertiesJsonData.length; i++) {
                if (propertiesJsonData[i].index == index) {
                    propertiesJsonData.splice(i, 1);
                    proData.push(Data);
                } else {
                    proData.push(propertiesJsonData[i]);
                }
            }
        } else {
            proData.push(Data);
        }
        this.setState({
            propertiesJsonData: proData
        });
    }

    showCreateWorkflow = () => {
        const { showEditorPage } = this.state;
        let content = [];
        for (let j = 0; j < this.formContentRefs.length; j++) {
            if (this.formContentRefs[j]) {
                content.push(this.formContentRefs[j].current.getContent());
            }
        }
        this.setState({
            showEditorPage: !showEditorPage,
            properties: JSON.stringify(content)
        })
    }


    render() {
        const { showRightPart, showEditorPage, properties } = this.state;
        return (
            <div className="d-block editor-container" >
                <div className="heading">
                    PAGE BUILDER
                </div>
                <div className="d-block page-heading">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Topic 1 | page 1</h2>
                            </div>
                            <div className="col-md-6">
                                <div className="d-block text-right">
                                    <button className="btn btn-primary preview-btn" onClick={() => this.setState({ showEditorPage: false })}>Edit</button>
                                    <button className="btn btn-primary" onClick={this.showCreateWorkflow}>Create JSON</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-side">
                    <Scrollbars
                        style={{ maxHeight: '100%' }}
                    >
                        <ul>
                            {this.displaySideBar()}
                        </ul>
                    </Scrollbars>
                </div>
                {!showEditorPage &&
                    <>
                        <div className="right-container">
                            <div style={{ height: 'calc(100% - 0px)', display: 'flex', paddingLeft: '0px', paddingRight: '0px' }}>
                                <Scrollbars
                                    style={{ maxHeight: '100%' }}
                                >
                                    {this.renderComponents()}
                                </Scrollbars>
                            </div>
                        </div>
                        <div className={`right-side ${showRightPart ? '' : 'd-none'}`}>
                            <div className="d-block">
                                <HTMLProperties ref={this.propertiesRef} hideRightSide={this.showRightbar} changeProperties={this.changeWorkProperties} />
                            </div>
                        </div>
                    </>
                }
                {showEditorPage &&
                    <div className="right-container">
                        <textarea className="form-control" rows={6} value={properties}></textarea>
                    </div>
                }
            </div>
        );
    }
}