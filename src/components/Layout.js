import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../css/index.css';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins';
    }
`;
const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <GlobalStyle />
      <div className='d-block w-100 position-absolute top-bg'></div>
      <div className='position-relative d-block w-100 px-lg-5 wrapper-view'>
        <div className='container-fluid'>
          <Helmet>
            <html lang='en' />
            <title>{title}</title>
            <meta name='description' content={description} />

            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href={`${withPrefix('/')}img/apple-touch-icon.png`}
            />
            <link
              rel='icon'
              type='image/png'
              href={`${withPrefix('/')}img/favicon-32x32.png`}
              sizes='32x32'
            />
            <link
              rel='icon'
              type='image/png'
              href={`${withPrefix('/')}img/favicon-16x16.png`}
              sizes='16x16'
            />

            <link
              rel='mask-icon'
              href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
              color='#ff4400'
            />
            <meta name='theme-color' content='#fff' />

            <meta property='og:type' content='business.business' />
            <meta property='og:title' content={title} />
            <meta property='og:url' content='/' />
            <meta
              property='og:image'
              content={`${withPrefix('/')}img/og-image.jpg`}
            />
            <link
              rel='stylesheet'
              href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css'
              integrity='sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6'
              crossorigin='anonymous'></link>
            <link
              rel='stylesheet'
              href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'></link>
            <script
              src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js'
              integrity='sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf'
              crossorigin='anonymous'></script>
          </Helmet>
          <Navbar />
          <main className='d-block w-100 main-container'>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default TemplateWrapper;
