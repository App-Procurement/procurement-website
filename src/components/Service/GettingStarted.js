import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import remark from 'remark';
import remarkHTML from 'remark-html';
const toHTML = (value) =>
    remark().use(remarkHTML).processSync(value).toString();
const GettingStarted = ({ data }) => {
    return (
        data ?
            <div className="getting-container">
                <div className="d-block w-100 getting-service-container">
                    <div className="d-block w-100">
                        {data.actions && data.actions.map((action, index) => {
                            return (
                                <div key={v4()} className={`d-block w-100 py-5 px-lg-5 px-3 service ${index % 2 === 0 ? 'tab-background' : 'tab-dark-background'}`}>
                                    <div className="d-block w-100 py-5 px-lg-5 px-2">
                                        {
                                            action.heading &&
                                            <div className="heading">{action.heading}</div>
                                        }
                                        <div className="d-block text-center w-100 pb-4 service-image">
                                            <img style={{ width: "100%" }} src={action.img} />
                                        </div>
                                        <div className="d-block service-description" dangerouslySetInnerHTML={{ __html: toHTML(action.description) }} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {
                    data.testimonial &&
                    <div className="d-block w-100 py-5 px-lg-5 px-3 tab-dark-background getting-testimonial-container">
                        <div className="d-block w-100 px-lg-5 px-2">
                            <div className="d-block w-100 pt-5 testimonial-icon">❛❛</div>
                            <div className="d-block w-100 px-5 pb-5 testimonial" dangerouslySetInnerHTML={{ __html: toHTML(data.testimonial) }} />
                        </div>
                    </div>
                }
            </div> :
            <div>No data</div>
    );
};

GettingStarted.propTypes = {
    gettingstarted: PropTypes.object
}

export default GettingStarted