import React, { useEffect } from 'react';
import "./GalleryCompunents02.css";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';

const GalleryCompunents02 = () => {

  const images = [
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400/934501151218465.6307c5362ac88.png',
    'https://cdn.dribbble.com/userupload/14365176/file/original-8ee97e33938483676095aa5238a1c43d.jpg?crop=0x949-5000x4699&format=webp&resize=400x300&vertical=center',
    'https://i.etsystatic.com/5326167/r/il/f7d6f3/5311862777/il_300x300.5311862777_4ssr.jpg',
    'https://st2.depositphotos.com/1030624/11179/i/950/depositphotos_111790782-stock-photo-luxury-perfume-and-lavender-flowers.jpg',
    'https://www.tds.co.rs/wp-content/uploads/2019/04/fragrance-3619762__340.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400/934501151218465.6307c5362ac88.png',
    'https://cdn.dribbble.com/userupload/14365176/file/original-8ee97e33938483676095aa5238a1c43d.jpg?crop=0x949-5000x4699&format=webp&resize=400x300&vertical=center',
    'https://i.etsystatic.com/5326167/r/il/f7d6f3/5311862777/il_300x300.5311862777_4ssr.jpg',
    'https://st2.depositphotos.com/1030624/11179/i/950/depositphotos_111790782-stock-photo-luxury-perfume-and-lavender-flowers.jpg',
    'https://www.tds.co.rs/wp-content/uploads/2019/04/fragrance-3619762__340.jpg',
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.gallery-container02 ', {
        direction:2,
        delay:3,
        transform: "translatex(-50%)",
        scrollTrigger: {
        scroll:".gallery-container02",
        trigger: ".gallery-2",
        start: "top 100%",
        end: "bottom -1000%",
        scrub: 1,
        // markers: true,
        // pin: true, 
      },
    });
    gsap.to('.gallery-container03 ', {
        direction:2,
        delay:3,
        transform: "translatex(70%)",
        scrollTrigger: {
        scroll:".gallery-container03",
        trigger: ".gallery-2",
        start: "top 0%",
        end: "bottom -1200%",
        scrub: 1,
        // pin: true, 
      },
    });

  },[])

  return (
    <section className= "gallery-2 overflow-hidden  ">
      <div className="gallery-container02">
        {images.map((item, index) => (
          <div key={index} className="gallery-img-container02">
            <img src={item} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="gallery-container03">
        {images.map((item, index) => (
          <div key={index} className="gallery-img-container03">
            <img src={item} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="gallery-container02">
        {images.map((item, index) => (
          <div key={index} className="gallery-img-container02">
            <img src={item} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="gallery-container03">
        {images.map((item, index) => (
          <div key={index} className="gallery-img-container03">
            <img src={item} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryCompunents02;