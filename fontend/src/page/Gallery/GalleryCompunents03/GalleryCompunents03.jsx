import React from 'react'
import "./GalleryCompunents03.css";
const images = [
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400/934501151218465.6307c5362ac88.png',
    'https://images.unsplash.com/photo-1615634260167-c8cdede054de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D',
    'https://perfumedubai.com/cdn/shop/articles/dior_sauvage_460x@2x.jpg?v=1652439946',
    'https://cdn.mos.cms.futurecdn.net/cDQVdephUkCGPqnfJyQM76.jpg',
    'https://www.pickaboo.com/blog/wp-content/uploads/2023/10/Perfume-for-women-in-Bangladesh.jpg',
  ];
const GalleryCompunents03 = () => {
  return (
    <div className="gallery-container-03">
        <div className="gallery-container-images-01">
        {images.map((item, index) => (
          <div key={index} className="gallery-img-container-images-01">
            <img src={item} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default GalleryCompunents03