import React, { useRef } from 'react';
import mensfashiondata from './data/mensfashiondata';
import '../Pages/Page_Style/MensFashion.css';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const MensFashion = () => {
  const rowRef = useRef(null);
  const { addToCart, addToWishlist } = useCart();

  return (
    
    <div className="main-content">
    <div className="mens-fashion-section">
      <div className="mens-fashion-title">Men's Fashion</div>

      <div className="carousel-wrapper">
        <div className="mens-fashion-row" ref={rowRef}>
          {mensfashiondata.map((product) => (
            <div className="mens-fashion-card" key={product.id}>
              <Link to={`/product/mensfashion/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="mens-fashion-image"
                />
              </Link>
              <div className="mens-fashion-info">
                <div className="mens-fashion-name">{product.name}</div>
                <div className="mens-fashion-price">{product.price}</div>
                <div className="mens-fashion-rating">⭐ {product.rating}</div>
                <div className="product-buttons">
                  <button title="Add to Wishlist" onClick={() => addToWishlist(product)}>❤️</button>
                  <button title="Add to Cart" onClick={() => addToCart(product)}>🛒</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MensFashion;
