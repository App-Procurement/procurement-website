import React, { Component } from 'react';
import FormContent from './FormContent';
import './css/renderer.css';

export class PageRendererComponent extends React.Component {
    formRefs;
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        }
        this.formRefs = React.createRef();
    };

    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
            this.setState({
                data: this.props.data,
            });
        }
    }

    render() {
        const { data } = this.state;
        return (
            // <div className="container">
                <div className="d-block">
                        <div className="w-100 py-4 py-lg-0 renderer-container">
                            <FormContent content={data} />
                        </div>
                </div>
            // </div>
        );
    }
}