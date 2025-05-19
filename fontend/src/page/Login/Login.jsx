import React, { useState } from 'react';
import './login.css';
import Title from '../../compunents/Title/Title';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/user/login", {
        email,
        password,
      });

      console.log("Login Success:", res.data);
      navigate('/');
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error.message);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
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

      <Title title02={"Login"} />

      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className='Login-help-container'>
          <div className='Login-help-forgot-container'>
            <p>Forgot password?</p>
            <Link className='Login-Link-Forgot' to="/forgot-password">Send reset code.</Link>
          </div>
          <Link className='Login-Link-Create' to="/register">Create Account</Link>
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
