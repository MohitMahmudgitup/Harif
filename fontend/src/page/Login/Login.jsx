import React from 'react';
import './login.css';
import Title from '../../compunents/Title/Title';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="register-container">
            <div className='contact-bg1'></div>
      <div className='contact-bg2'></div>
      <div className='contact-bg3'></div>
      <div className='contact-bg4'></div>
      <div className='contact-bg5'></div>
      <div className='contact-bg6'></div>
      <div className='contact-bg7'></div>
      <div className='contact-bg8'></div>
      <div className='contact-bg9'></div>
      <div className='contact-bg10'></div>
      <Title title02={"Login"}/>
      <h1 className="register-title"></h1>
      <form className="register-form">
        <input type="email" placeholder="Email" className="register-input" />
        <input type="password" placeholder="Password" className="register-input" />
        <div className='Login-help-container'>
          <div className='Login-help-forgot-container'><p>Forgot password?</p><Link className='Login-Link-Forgot' to="/forgot-password">Send reset code.</Link></div>
          <Link className='Login-Link-Create' to="/register">Create Account</Link>
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Login;
