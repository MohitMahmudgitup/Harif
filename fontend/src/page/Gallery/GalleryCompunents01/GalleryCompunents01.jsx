import React, { useEffect } from 'react';
import "./GalleryCompunents01.css";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const GalleryCompunents01 = () => {
  // useEffect(() => {
  //   // gsap.registerPlugin(ScrollTrigger);
  //   // gsap.to('.gallery-img-container ', {
  //   //   scale: .89,
  //   //   duration: 1,
  //   //   scrollTrigger: {
  //   //     trigger: 'img',
  //   //     markers: true,
  //   //     start: 'top top',
  //   //     pin : true
  //   //   }
  //   // });
  // })
  const images = [
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400/934501151218465.6307c5362ac88.png',
    'https://cdn.dribbble.com/userupload/14365176/file/original-8ee97e33938483676095aa5238a1c43d.jpg?crop=0x949-5000x4699&format=webp&resize=400x300&vertical=center',
    'https://i.etsystatic.com/5326167/r/il/f7d6f3/5311862777/il_300x300.5311862777_4ssr.jpg',
    'https://st2.depositphotos.com/1030624/11179/i/950/depositphotos_111790782-stock-photo-luxury-perfume-and-lavender-flowers.jpg',
    'https://www.tds.co.rs/wp-content/uploads/2019/04/fragrance-3619762__340.jpg',
  ];

  return (
    <section>
        
      <div className="gallery-container">
        {images.map((item, index) => (
          <div key={index} className="gallery-img-container">
            <img src={item} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryCompunents01;