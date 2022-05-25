import React from 'react';
import '../../css/index.css';

const TemplateWrapper = ({ children }) => {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css'
        integrity='sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6'
        crossorigin='anonymous'></link>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'></link>
      <div className='d-block w-100 position-absolute top-bg'></div>
      <div className='position-relative d-block w-100 px-5 wrapper-view'>
        <div className='container-fluid'>
          <main className='d-block w-100 main-container'>{children}</main>
        </div>
      </div>
    </>
  );
};

export default TemplateWrapper;
