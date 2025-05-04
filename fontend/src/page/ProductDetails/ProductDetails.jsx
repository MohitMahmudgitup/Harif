import React from 'react';
import './ProductDetails.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { product as productList } from "../../uitlity/db"; // fix spelling

const ProductDetails = () => {
  const product = productList[1]; // TEMP: use the first product for this example

  return (
    <main className="product-container">
      <div className="product-grid">
        <div className='ProductDetails-bg1'></div>
        <div className="product-images">
          <Swiper spaceBetween={20} slidesPerView={1}>
            {product.images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <img  className= "product-image " src={image} alt={`${product.name}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-brand">{product.brand}</p>
          <p className="product-description">{product.description}</p>
          <div className="product-price">${product.price}</div>
          <p className="product-meta">
            <strong>Category:</strong> {product.category} | <strong>Type:</strong> {product.type} |{' '}
            <strong>Gender:</strong> {product.gender}
          </p>
          <div className="scent-profile">
            <h3>Scent Profile</h3>
            <p><strong>Top Notes:</strong> {product.scent_profile.top_notes.join(', ')}</p>
            <p><strong>Heart Notes:</strong> {product.scent_profile.heart_notes.join(', ')}</p>
            <p><strong>Base Notes:</strong> {product.scent_profile.base_notes.join(', ')}</p>
          </div>
          <p className="product-rating">⭐ {product.rating.average} ({product.rating.count} reviews)</p>
        
          <div className='ProductDetails-button-container'>
            <button className='ProductDetails-btn-buy-now'>Buy now</button>
            <button className='ProductDetails-btn-addtocart'>Add to cart</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
