import React from 'react';
import '../../css/form.css';
import loginImg from '../../img/scenario/homepage/LoginScreen.png';
import Layout from '../../components/Layout';
const Login = () => {
  return (
    <Layout>
      <div className='main-background'>
        <div className='form-background'>
          <h2>
            SIGN <span>IN</span>
          </h2>
          <form action='' className='login-form'>
            <label htmlFor='username'>
              <input type='email' name='email' placeholder='your email id' />
            </label>
            <label htmlFor='password'>
              <input
                type='password'
                name='password'
                id=''
                placeholder='your password'
              />
            </label>
            <div className='stay'>
              <div className='stay-in'>
                <label htmlFor='stay'>
                  <input type='checkbox' name='stay' id='' />
                </label>
                <h6>Stay login</h6>
              </div>
              <h6>Forgot Password</h6>
            </div>
            <label htmlFor='submit'>
              <input type='submit' value='Sign In' />
            </label>
          </form>
        </div>
        <div className='vector'>
          <div className='vector-image' />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
