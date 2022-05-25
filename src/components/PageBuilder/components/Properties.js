import React, { Component } from 'react';
import { Heading, List, Image, Video, Icon, Divider, Button } from './../Properties';
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

export class HTMLProperties extends Component {
    formContentRefs;
    constructor(props) {
        super(props);
        this.state = {
            showEditorPanel: true,
            showEditorPanelTab: 0,
            formContent: {
                // title: "",
                // type: "",
                // name: '',
                // placeHolder: '',
                // description: '',
                // ListingData: [],
                // padding_bottom: '',
                // padding_top: '',
                // listType: '',
                // types: '',
                // url: ''
            },
        }
        this.formContentRefs = [];
    };

    showEditorPanel = () => {
        this.props.hideRightSide();
    }

    setProperties = (properties, location) => {
        const { title, type, name, placeHolder, value, description, ListingData, padding_bottom, padding_top, url, listType, types, background_color, displayType, carouselList } = properties;
        const { formContent } = this.state;
        if (type != 'list' && type != 'icon') {
            formContent.title = title;
            formContent.value = value;
            formContent.type = type;
            formContent.name = name;
            formContent.description = description;
            formContent.placeHolder = placeHolder;
            formContent.padding_bottom = padding_bottom;
            formContent.padding_top = padding_top;
            formContent.background_color = background_color;
            formContent.url = url;
            formContent.displayType = displayType;
            formContent.carouselList = carouselList;
        } else {
            formContent.type = type;
            formContent.ListingData = ListingData;
            formContent.padding_bottom = padding_bottom;
            formContent.padding_top = padding_top;
            formContent.background_color = background_color;
            formContent.listType = listType;
            formContent.types = types;
        }
        this.setState({
            formContent: JSON.parse(JSON.stringify(formContent)),
            location
        });
    };

    displayPropertiesForm = () => {
        const { formContent, location } = this.state;
        let tabContent = [];
        const ContentRef = this.formContentRefs || [];
        const ref = React.createRef();
        let locations = {};
        if (location) {
            locations['index'] = location.index;
        } else {
            locations['index'] = ContentRef.length;
        }
        if (formContent.type === componentType.TEXT) {
            tabContent.push(<Heading key={"properties_" + location.index} showhideProperties={this.showEditorPanel} location={locations} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        } else if (formContent.type === componentType.LIST) {
            tabContent.push(<List key={"properties_" + location.index} showhideProperties={this.showEditorPanel} location={locations} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        } else if (formContent.type === componentType.IMAGE) {
            tabContent.push(<Image key={"properties_" + location.index} showhideProperties={this.showEditorPanel} location={locations} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        } else if (formContent.type === componentType.VIDEO) {
            tabContent.push(<Video key={"properties_" + location.index} showhideProperties={this.showEditorPanel} location={locations} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        } else if (formContent.type === componentType.ICON) {
            tabContent.push(<Icon key={"properties_" + location.index} showhideProperties={this.showEditorPanel} location={locations} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        } else if (formContent.type === componentType.DIVIDER) {
            tabContent.push(<Divider key={"properties_" + location.index} showhideProperties={this.showEditorPanel} location={locations} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        } else if (formContent.type === componentType.BUTTON) {
            tabContent.push(<Button key={"properties_" + location.index} showhideProperties={this.showEditorPanel} location={locations} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        }
        ContentRef.push(ref);
        this.formContentRefs = ContentRef;
        return tabContent;
    }

    onChangeProperties = (formContent) => {
        this.setState({
            formContent
        });
        this.props.changeProperties(JSON.parse(JSON.stringify(formContent)));
    };

    render() {
        return (
            <div className=''>
                {this.displayPropertiesForm()}
            </div>
        );
    }
}