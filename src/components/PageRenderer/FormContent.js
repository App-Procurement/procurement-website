import React from 'react';
import { CustomHeader } from './components/CustomHeader';
import { CustomList } from './components/CustomList';
import { CustomImage } from './components/CustomImage';
import { CustomVideo } from './components/CustomVideo';
import { CustomIcon } from './components/CustomIcon';
import { CustomDivider } from './components/CustomDivider';
import { CustomButton } from './components/CustomButton';

export const componentType = {
    TEXT: "text",
    LIST: "list",
    IMAGE: "image",
    VIDEO: "video",
    ICON: "icon",
    DIVIDER: "divider",
    BUTTON: "button"
};

class FormContent extends React.Component {
    constructor(props) {
        super(props);
        const { content } = props;
        this.state = {
            formData: content,
            isSubmitted: this.props.isSubmittedStatus,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(prevProps.content) !== JSON.stringify(this.props.content)) {
            const { content } = this.props;
            this.setState({
                formData: content,
                isSubmitted: this.props.isSubmittedStatus,
            });
        }
    }

    displayFormData = () => {
        const { isSubmitted, formData } = this.state;
        let retData = [];
        if (formData) {
            if (formData) {
                for (let j = 0; j < formData.length; j++) {
                    let data = formData[j];
                    retData.push(
                        this.displayformField(data, j)
                    );
                }
            }
        }
        return retData;
    }

    getDataFromForm = (validate) => {
        let errorData = {
            isValid: true
        };
        return {
            isValid: errorData.isValid,
            formData: this.state.formData
        };
    };

    displayformField = (formData, index) => {
        console.log(formData);
        let frmData = [];
        if (formData.type === componentType.TEXT) {
            frmData.push(
                <CustomHeader key={formData.id} type={formData.type} style={formData.style} name={formData.name} title={formData.title} />
            );
        } else if (formData.type === componentType.LIST) {
            frmData.push(
                <CustomList key={formData.id} containerClass="form-group" style={formData.style} ListingData={formData.ListingData} />
            );
        } else if (formData.type === componentType.IMAGE) {
            frmData.push(
                <CustomImage containerClass="form-group" description={formData.description} style={formData.style} url={formData.url} sliderData={formData.carouselList } />
            );
        } else if (formData.type === componentType.VIDEO) {
            frmData.push(
                <CustomVideo containerClass="form-group" description={formData.description} style={formData.style} url={formData.url} />
            );
        } else if (formData.type === componentType.ICON) {
            frmData.push(
                <CustomIcon containerClass="form-group" type={formData.type} style={formData.style} ListingData={formData.ListingData} limit={formData.displayLimit} />
            );
        }
        else if (formData.type === componentType.DIVIDER) {
            frmData.push(
                <CustomDivider containerClass="form-group" style={formData.style} />
            );
        }
        else if (formData.type === componentType.BUTTON) {
            frmData.push(
                <CustomButton containerClass="form-group" type={formData.type} style={formData.style} title={formData.title} />
            );
        }
        return frmData;
    }

    render() {
        return (
            <div className="workflow-tab-pane">
                {this.displayFormData()}
            </div>
        );
    }
}

export default FormContent;