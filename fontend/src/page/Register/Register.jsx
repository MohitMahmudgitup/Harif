import React from 'react';
import "./register.css"
import Title from '../../compunents/Title/Title';
import { Link } from 'react-router-dom';

const Register = () => {
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
      <Title  title02={"Create an Account"}/>
      <h1 className="register-title"></h1>
      <form className="register-form">
        <input type="text" placeholder="Full Name" className="register-input" />
        <input type="email" placeholder="Email" className="register-input" />
        <input type="password" placeholder="Password" className="register-input" />
        <input type="password" placeholder="Confirm Password" className="register-input" />
        <button type="submit" className="register-button">Register</button>
      </form>
        <div className='register-help-container'>
          <Link className='register-Link-Create' to="/login">Sign Up</Link>
        </div>
    </div>
  );
};

export default Register;
