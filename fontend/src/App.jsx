import React, { useEffect, useRef } from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import About from './page/About/About';
import Contact from './page/Contact/Contact';
import Gallery from './page/Gallery/Gallery';
import Register from './page/Register/Register';
import Shop from './page/Shop/Shop';
import Navber from './compunents/Navbar/Navber';
import Login from './page/Login/Login';
import useLenis from './uitlity/useLenis';

const App = () => {
  useLenis()

  return (
    <main >
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default App;
