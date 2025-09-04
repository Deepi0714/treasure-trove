import React, { useRef } from 'react';
import womensfashiondata from './data/womensfashiondata';
import '../Pages/Page_Style/WomensFashion.css';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const WomensFashion = () => {
  const rowRef = useRef(null);
  const { addToCart, addToWishlist } = useCart();

  return (
    
    <div className="main-content">
    <div className="womens-fashion-section">
      <div className="womens-fashion-title">Women's Fashion</div>

      <div className="carousel-wrapper">
        <div className="womens-fashion-row" ref={rowRef}>
          {womensfashiondata.map((product) => (
            <div className="womens-fashion-card" key={product.id}>
              <Link to={`/product/womensfashion/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="womens-fashion-image"
                />
              </Link>
              <div className="womens-fashion-info">
                <div className="womens-fashion-name">{product.name}</div>
                <div className="womens-fashion-price">{product.price}</div>
                <div className="womens-fashion-rating">⭐ {product.rating}</div>
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

export default WomensFashion;
