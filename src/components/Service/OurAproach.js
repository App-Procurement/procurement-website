import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import remark from 'remark';
import remarkHTML from 'remark-html';
import { HTMLContent } from '../Content';
const toHTML = (value) =>
    remark().use(remarkHTML).processSync(value).toString();

const OurAproach = ({ data }) => {
    return (
        data ?
            <div className="aproach-container">
                {
                    data.description && data.img &&
                    <div className="d-block w-100 py-4 px-lg-5 px-3 header-container tab-background">
                        <div className="d-block w-100 pb-5 px-lg-5 px-2">
                            <p className="text-center mb-5">
                                <img style={{width: "100%"}} src={data.img} />
                            </p>
                            <p>
                                <HTMLContent content={toHTML(data.description)} />
                            </p>
                        </div>
                    </div>
                }
                {
                    data.actions && data.actions.map((item, index) => {
                        return (
                            <div className={`d-block w-100 py-5 px-lg-5 px-3 actions-container ${index % 2 !== 0 ? 'tab-background' : 'tab-background-dark'}`}>
                                <div key={v4()} className="d-block w-100 py-5 px-lg-5 px-2">
                                    <div className="row align-items-center justify-content-center">
                                        {!item.issideimage &&
                                            <>
                                                <div className="col-md-12 col-12">
                                                    <div className="content">
                                                        <span className="d-block">{item.heading}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-12">
                                                    <div className="d-block mb-4 text-center banner-image">
                                                        <img style={{width: "100%"}} src={item.img} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-12">
                                                    <div className="d-block content">
                                                        <HTMLContent content={toHTML(item.text)} />
                                                    </div>
                                                </div>
                                            </>}
                                        {item.issideimage &&
                                            <>
                                                <div className={index % 2 ? 'col-md-5 col-12 order-md-last' : 'col-md-6 col-12 order-md-first'}>
                                                    <div className="d-block mb-4 banner-image">
                                                        <img src={item.img} />
                                                    </div>
                                                </div>
                                                <div className={index % 2 ? 'col-md-6 col-12' : 'col-md-5 col-12'}>
                                                    <div className="d-block content">
                                                        <span className="d-block">{item.heading}</span>
                                                        <HTMLContent content={toHTML(item.text)} />
                                                    </div>
                                                </div>
                                            </>}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div> :
            <div>no data</div>
    );
};

export default OurAproach