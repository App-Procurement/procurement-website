import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Workflow, componentType } from './Workflow';

class WorkflowComponent extends React.Component {
    workflowRef = null;
    constructor(props) {
        super(props);
        let data = [];
        if (props.data) {
            data = JSON.parse(props.data);
        }
        this.state = {
            data: data,
        };
        this.workflowRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data && this.props.data) {
            let isError = false;
            let data = {};
            try {
                data = JSON.parse(this.props.data);
            }
            catch (e) {
                isError = true;
            }
            if (!isError) {
                this.setState({
                    data
                });
            }
        }
    }

    onClickNext = (index, tabData) => {
        console.log(tabData);
        setTimeout(() => {
            this.workflowRef.current.showNextTab();
        }, 3000);
    };

    render() {
        const { data } = this.state;
        return (
            <div>
                <Workflow formData={data} onClickNext={this.onClickNext} ref={this.workflowRef} waitForResponse={true} />
            </div>
        );
    }
}

export default WorkflowComponent
