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
            // ListingData: [
            //     { value: 'Phasellus vestibulum nulla a mi mattis, in fringilla elit sodales.', isDelete: false },
            //     { value: 'Duis ullamcorper massa tincidunt, euismod tortor et, mollis erat.', isDelete: false },
            //     { value: 'Pellentesque lobortis nisi ut dolor laoreet sollicitudin et vitae justo..', isDelete: false },
            //     { value: 'Mauris maximus lorem vitae neque pellentesque, sit amet aliquam turpis feugiat.', isDelete: false },
            // ],
            // padding_top: 0,
            // padding_bottom: 0,
            // listType: 'unordered',
            // types: 'disc',
            isActive: false
        }
    };

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

    displayListing = () => {
        const { ListingData, types } = this.props.data;
        let retData = [];
        if (ListingData) {
            for (let i = 0; i < ListingData.length; i++) {
                retData.push(
                    <li type={types}>
                        <p>{ListingData[i].value}</p>
                    </li>
                )
            }
        }
        return retData;
    }

    changeProperties = (formContent) => {
        const { ListingData, padding_top, padding_bottom, listType, types } = this.props.data;
        this.setState({
            ListingData: ListingData,
            padding_top: padding_top,
            padding_bottom: padding_bottom,
            listType: listType,
            types: types,
        });
        // this.props.setPropertiesData(formContent, this.props.location);
    }

    getContent = () => {
        const { ListingData, padding_top, padding_bottom, listType, types, background_color } = this.props.data;
        let style = {
            padding_top,
            padding_bottom,
            listType,
            types,
            background_color
        }
        return {
            ListingData,
            style,
            type: this.props.type
        };
    };

    render() {
        const { padding_top, padding_bottom, listType, background_color } = this.props.data;
        const { displayFormContent, changeIndexPlace, location } = this.props;
        return (
            <div className={`d-flex content pt-${padding_top} pb-${padding_bottom}`} style={background_color ? { backgroundColor: `${background_color}` } : null}>
                <div className='col-md-9 pl-0'>
                    <div className="d-flex flex-row flex-wrap left-content">
                        {listType == 'unordered' &&
                            <ul>
                                {this.displayListing()}
                            </ul>
                        }
                        {listType == 'ordered' &&
                            <ol>
                                {this.displayListing()}
                            </ol>
                        }
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
                    </div>
                </div>
            </div>
        );
    }
}