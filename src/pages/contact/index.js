import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout.js';
import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineWarning } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import Helmet from 'react-helmet';
import '../../css/tabs.css';

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2)
//     .required('Name required'),
//   email: yup
//     .string()
//     .email()
//     .required('Enter your Email Address'),
//   company: yup.string().required(),
//   phone: yup
//     .number()
//     .positive()
//     .integer(),
//   service: yup.string().required(),
//   description: yup.string()
// });

const postData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 100);
  });
};

const FlavorForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  //   {
  //   resolver: yupResolver(schema)
  // }
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const [state, setState] = useState('');
  const handleChange = (event) => {
    setState({ value: event.target.value });
  };
  console.log(errors);
  const history = useHistory();

  const submitForm = async (data) => {
    console.log('Submission starting', data);
    const result = await postData(data);
    console.log('Submitting complete', result.success);
    setIsSuccessfullySubmitted(result.success);
    reset();
    // history.push('/Thankyou.html');npm run deploy
    console.log(data);
  };
  return (
    <Layout>
      <div className='p-5 bg-contact'>
        <h1 className='ch1 text-center'>Get In Touch</h1>
        <div className='cFlex text-center'>
          <span>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 512 512'
              className='rIcon'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z'></path>
              <path d='M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z'></path>
            </svg>
            info@synectiks.com
          </span>
          <span>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 512 512'
              className='rIcon webText'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z'></path>
            </svg>
            609 608 0429 X 102
          </span>
        </div>
        <h6 className='text-dark text-center'>
          Get in Touch to See How We Can Help Achieve Your IT Goals
        </h6>
        <form
          form='Cform'
          id='Cform'
          action='https://synectiks.com/Thankyou.html'
          onSubmit={handleSubmit(submitForm)}
          // action="https://synectiks.com/Thankyou.html"
          // action="#"
          className='was-validated px-5'>
          <input
            type='hidden'
            name='redirect'
            value='https://synectiks.com/Thankyou.html'
          />
          <input
            type='hidden'
            name='retURL'
            value='https://synectiks.com/Thankyou.html'
          />
          <div className='row'>
            <div className='text-left  col-sm-4  col-md-6 col-lg-6 col-xl-6 field-group'>
              <label htmlFor='name'>Your Name *</label>
              <input
                // id="name"
                // maxLength="80"
                // name="name"
                size='20'
                type='text'
                {...register('first_name', {
                  required: true,
                  minLength: 2,
                  MaxLength: 80,
                })}
                disabled={isSubmitting || isSuccessfullySubmitted}
              />
              <div className='error'>
                {errors.first_name && (
                  <div className='d-flex align-items-baseline'>
                    <AiOutlineWarning className='mr-2' />
                    <p>Enter Your Name</p>
                  </div>
                )}
              </div>
            </div>

            <div className='text-left  col-sm-4  col-md-6 col-lg-6 col-xl-6 field-group'>
              <label htmlFor='email'>Email *</label>
              <input
                id='email'
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  },
                })}
                size='20'
                type='text'
                disabled={isSubmitting || isSuccessfullySubmitted}
              />
              <div className='errorml'>
                {errors.email && (
                  <div className='d-flex align-items-baseline'>
                    <AiOutlineWarning className='mr-2' />
                    <p>Enter Your Email Id</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='text-left  col-sm-4  col-md-6 col-lg-6 col-xl-6 field-group'>
              <label htmlFor='company'>Company Name *</label>
              <input
                id='company'
                maxLength='80'
                {...register('company', { required: true })}
                size='20'
                type='text'
                disabled={isSubmitting || isSuccessfullySubmitted}
              />
              <div className='errorc'>
                {errors.company && (
                  <div className='d-flex align-items-baseline'>
                    <AiOutlineWarning className='mr-2' />
                    <p>Enter Your Company Name</p>
                  </div>
                )}
              </div>
            </div>

            <div className='text-left  col-sm-4  col-md-6 col-lg-6 col-xl-6 field-group'>
              <label htmlFor='mobile'>Phone</label>
              <input
                id='mobile'
                minLength='10'
                maxLength='10'
                {...register('mobile', { required: false, minLength: 10 })}
                size='20'
                type='tel'
                disabled={isSubmitting || isSuccessfullySubmitted}
              />
              <div className='errormb'>
                {errors.mobile && (
                  <div className='d-flex align-items-baseline'>
                    <AiOutlineWarning className='mr-2' />
                    <p>Enter Your Mobile Number</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='text-left  col-sm-4  col-md-6 col-lg-6 col-xl-6 field-group'>
              <label htmlFor='service'>Select Service *</label>
              <select
                id='service'
                {...register('service', { required: true })}
                // value={this.state.value}
                onBlur={handleChange}
                // onChange={this.handleChange}
                disabled={isSubmitting || isSuccessfullySubmitted}>
                <option value=''>--None--</option>
                <option value='Microservices'>&nbsp;Microservices</option>
                <option value='Devops'>&nbsp;Devops</option>
                <option value='Cloudmigrationservices'>
                  &nbsp;Cloud Migration Services
                </option>
                <option value='Publiccloudsolutions'>
                  &nbsp;Public Cloud Solutions
                </option>
                <option value='Hybridcloudsolutions'>
                  &nbsp;Hybrid Cloud Solutions
                </option>
                <option value='Monitoring&analyticssolutions'>
                  &nbsp;Monitoring & Analytics Solutions
                </option>
                <option value='Hostingervices'>&nbsp;Hosting Services</option>
                <option value='protectclooud'>&nbsp;Protect Cloud</option>
                <option value='Backupservices'>&nbsp;Backup Services</option>
                <option value='DisasterRecoveryservices'>
                  &nbsp;Disaster Recovery Services
                </option>
                <option value='Microsoft365services'>
                  &nbsp;Microsoft 365 Services
                </option>
                <option value='Managedservices'>&nbsp;Managed Services</option>
                <option value='Others' id='others'>
                  &nbsp;Other
                </option>
              </select>

              <div className='errormss'>
                {errors.service && (
                  <div className='d-flex align-items-baseline'>
                    <AiOutlineWarning className='mr-2' />
                    <p>Select Your Service</p>
                  </div>
                )}
              </div>
              <div
                className={
                  state.value !== 'Others'
                    ? 'd-none'
                    : 'd-block text-left  col-sm-4  col-md-6 col-lg-6 col-xl-6 field-group'
                }>
                <textarea
                  {...register('description')}
                  rows='3'
                  cols='40'
                  placeholder="Write Others's description If selected"
                  id='des'
                  disabled={isSubmitting || isSuccessfullySubmitted}

                  // className={this.state.value !== 'Others' ? 'hide' : ''}
                ></textarea>
                <div className='errormss' id='iText'>
                  {errors.description && (
                    <div className='d-flex align-items-baseline'>
                      <AiOutlineWarning className='mr-2' />
                      <p>Enter Your Other Service</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className='col-sm-4 col-md-6 col-lg-6 col-xl-6 field-group'
              style={{ alignSelf: 'baseline', marginTop: '2rem' }}>
              <button
                type='submit'
                name='submit'
                value='Submit'
                className='btn w-50 pos-3'
                id='submit-btn'>
                Submit
              </button>
            </div>
          </div>
          {isSuccessfullySubmitted && (
            <div className='alert alert-success' role='alert'>
              <div className='text-center'>
                <h1 className='alert-heading text-capitalize text-center'>
                  Thank You For Contacting Us
                </h1>
                <hr />
                <h3 className='text-capitalize text-center'>
                  we will get back to you soon !
                </h3>
              </div>
            </div>
          )}
        </form>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
`
          }}
        /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
             var vvfc_BaseURL = (("https:" == document.location.protocol) ? "https://forms.id-visitors.com/FrontEndWeb/" : "http://forms.id-visitors.com/FrontEndWeb/");
var vvfc_ServiceURL = vvfc_BaseURL + 'ProcessFormCapture.aspx';
var vvfc_ScriptURL = vvfc_BaseURL + 'Scripts/vvfcscript.js';
var trackedForms = ['Cform'];
var options = { accountId: 'q00IB13hyn', serviceURL: vvfc_ServiceURL, pollInterval: 5000,
forms: [{ id: 'Cform', ignoreFields: ['__VIEWSTATE', '__VIEWSTATEGENERATOR', '__EVENTVALIDATION'], accountFormId: '5e62826c97c1d008fccf2c22' } ]};
(function (src) {
var vvscript = document.createElement('script');
vvscript.type = 'text/javascript';
vvscript.async = true; vvscript.src = src;
var scriptElements = document.getElementsByTagName('script');
var lastScriptElement = scriptElements[scriptElements.length - 1];
lastScriptElement.parentNode.insertBefore(vvscript, lastScriptElement.nextSibling);
})(vvfc_ScriptURL);
       `,
          }}
        />
      </div>
    </Layout>
  );
};
export default FlavorForm;
