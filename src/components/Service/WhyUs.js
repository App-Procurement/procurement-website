import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import remark from 'remark';
import remarkHTML from 'remark-html';
import { HTMLContent } from '../Content';
import { GoTriangleUp,GoTriangleDown } from "react-icons/go";
const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();

const WhyUs = ({ data }) => {
  function renderConclusions(conclusiondivs) {
    if (conclusiondivs && conclusiondivs.length > 0) {
      return conclusiondivs.map((conclusiondiv) => {
        return (
          <div key={v4()} className="col-md-6 col-sm-6 col-12 reason-box">
            <div className="pb-5">
              <div className="d-block py-3 reason-name teal">{conclusiondiv.text}</div>
              <div className="d-block">
                <img src={conclusiondiv.img} alt={conclusiondiv.text} />
              </div>
              <div className="d-block reason-description text-black my-3">
                <HTMLContent content={toHTML(conclusiondiv.description)} />
              </div>
            </div>
          </div>
        );
      });
    }
    return null;
  }
  function renderList(listdivs) {
    if (listdivs && listdivs.length > 0) {
      return listdivs.map((listdiv) => {
        return (
          <div key={v4()} className="list-box">

              <div className="d-block py-3 list-box-name">{listdiv.text}</div>
              <div className="d-block">
                <HTMLContent  className='listdiv-paragraph py-3 px-2' content={toHTML(listdiv.description)} />
            </div>
          </div>
        );
      });
    }
    return null;
  }
  function renderReasons(reasons) {
    if (reasons && reasons.length > 0) {
      return reasons.map((reason) => {
        return (
          <div key={v4()} className="col-md-4 col-sm-6 col-12 reason-box">
            <div className="pb-5">
              <div className="d-block reason-image">
                <img src={reason.img} alt={reason.text} />
              </div>
              <div className="d-block py-3 reason-name">{reason.text}</div>
              <div className="d-block reason-description">
                <HTMLContent content={toHTML(reason.description)} />
              </div>
            </div>
          </div>
        );
      });
    }
    return null;
  }

  return (
    data ?
      <>
        <div className="d-block w-100 py-4 px-lg-5 px-3 tab-background hybrid-cloud-container">
          <div className="d-block w-100 px-lg-5 px-2">
            <div className="row align-items-center justify-content-between">
              {data.fullimg &&(<>
                <div className="col-md-12 col-sm-12 p-0">
                  <div className="d-inline-block bg-white hybrid-cloud-image m-0">
                    <img src={data.img} alt="" />
                  </div>
                </div>
                {/* <div className="col-md-12 col-sm-12">
                  <HTMLContent className="d-block w-100 content" content={toHTML(data.description)} />
                </div> */}
              </>)}
              {!data.fullimg &&(<>
                <div className="col-md-12 col-sm-12 p-0 ">
                  <div className="d-inline-block bg-white hybrid-cloud-image m-0">
                    <img src={data.img} alt="" />
                  </div>
                </div>
              </>)}
              <div className='listdiv p-0'>
                <div className='p-0 p-md-5'>

              <div className="col-md-12 col-sm-12">
                  <HTMLContent className="d-block w-100 content" content={toHTML(data.description)} />
                </div>
                <div className="d-list-grid my-3">
                  {renderList(data.listdivs)}
                </div>
              </div>
      <div className="d-block w-100 py-4 px-lg-5 px-3 teal-background">
          <div className="d-flex flex-column justify-content-center align-items-center px-lg-5 px-2">
          <GoTriangleUp className='up-sym'/>
          {/* <span className='up-sym'>&#9650;</span> */}
          <div className='list-div-product'>
            <HTMLContent content={toHTML(data.productdescription)} />
          </div>
          </div>
        </div>
              </div>

            </div>
          </div>
        </div>

           <div className="d-block w-100 py-5 px-lg-5 px-3 text-center tab-dark-background">
          <div className="d-block w-100 px-lg-5 px-2">
            <h2 className="d-block pt-4 pb-5 reason-header">
              {data.reasonstext}
            </h2>
            <div className="row">
              {renderReasons(data.reasons)}
            </div>
          </div>
        </div>
        <div className="d-block w-100 pb-5 text-center tab-background">
          <div className="d-block py-5 teal-background">
             <div className="d-flex flex-column justify-content-center align-items-center px-lg-5 px-2 text-justify">
          <GoTriangleDown className='down-sym'/> {data.conclusiondivstext}
          </div>
          </div>
          <div className="d-block w-100 px-lg-5 px-2 my-5">
            <div className="row">
              {renderConclusions(data.conclusiondivs)}
            </div>
          </div>
        </div>
        <div className="d-block w-100 py-5 px-lg-5 px-3 tab-background finally-help-container">
          <div className="d-block w-100 py-4 px-lg-5 px-2">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-12">
                <div className="content">
                  <HTMLContent content={toHTML(data.conclusion)} />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="d-block w-100 image">
                  <img src={data.conclusionimg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </> :
      <div>No data </div>
  );
};

WhyUs.propTypes = {
  data: PropTypes.object
}

export default WhyUs
