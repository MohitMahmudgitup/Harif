import React from 'react';
import './Advertis.css';
import { advertis } from '../../assets';

const Advertis = () => {
  return (
    <section className='advertis'>
      <div className='advertis-container'>
        <div className='advertis-blur'></div>
        <div className='advertis-images01'>
          {Object.values(advertis).map((item, index) => (
            <img key={index} src={item} alt={`Advert ${index + 1}`} />
          ))}
        </div>
        <div className='advertis-images02'>
          {Object.values(advertis).map((item, index) => (
            <img key={index} src={item} alt={`Advert ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advertis;
