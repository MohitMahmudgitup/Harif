import React, { useRef, useState } from 'react';
import './register.css';
import axios from "axios";
import Title from '../../compunents/Title/Title';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const inputRaf = useRef();
  const navigate = useNavigate();




  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("number", number);
      formData.append("image", image);
  
      const URL = "http://localhost:4000/api/user/register";
      const response = await axios.post(URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      navigate("/")
      
    } catch (error) {
      console.error("Registration error:", error);
    }
  };
  




















  const handleImageClick = () =>{
    inputRaf.current.click();
  }
  const handleImageChange = (e) =>{
    const file = e.target.files[0];
    setImage(file)
  }


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
      <h1 className='register-title f1' >Create an Account</h1>
      <form className="register-form f3" onSubmit={handleOnSubmit}  method="post" encType="multipart/form-data">
        <div onClick={handleImageClick} className='person_man_image_box'>
          {
            !image ? (
              <img className='upload_image' src="https://cdn.pixabay.com/photo/2021/10/11/00/59/upload-6699084_1280.png" alt="" />
            ):(
              <img className='upload_image_in' src={URL.createObjectURL(image)} alt="" />
            )
          }
        <input  onChange={handleImageChange} className='register-image-input' type="file" ref={inputRaf} name ="image" />
        </div>
        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Full Name" className="register-input" />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="register-input" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="register-input" />
        <input value={number} onChange={(e)=>setNumber(e.target.value)} type="number" placeholder="+88-0000-000000" className="register-input" />
        <button type="submit" className="register-button">Register</button>
      </form>
        <div className='register-help-container'>
          <Link className='register-Link-Create f3' to="/login">Sign Up</Link>
        </div>
    </div>
  );
};

export default Register;
