import React from 'react';
import './about.css';
import Title from '../../compunents/Title/Title';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <Title title02={"About Us"}/>
      <p className="about-description f1">
        Welcome to our website! We're dedicated to providing the best service possible.
        Our team is passionate about innovation and customer satisfaction.
      </p>

      <section className="about-section">
      <Title title01={""} title02={"Our Mission"}/>
        <p className='f1'>
          To deliver high-quality solutions that help people and businesses thrive in a digital world.
        </p>
      </section>

      <section className="about-section">
      <Title title01={""} title02={"What We Offer"}/>
        <ul className="about-list f1">
          <li>Professional services tailored to your needs</li>
          <li>24/7 customer support</li>
          <li>Reliable and scalable technology</li>
          <li>Experienced and friendly staff</li>
        </ul>
      </section>

      <section className="about-section">
      <Title title01={""} title02={"Get in Touch"}/>
        <p className='f1'>
          Have questions or feedback? Feel free to <Link className='about-contect' to="/contact">contact us</Link> any time.
        </p>
      </section>
    </div>
  );
};

export default About;
