import React, { useRef } from 'react';
import beautycaredata from './data/beautycaredata';
import '../Pages/Page_Style/BeautyCare.css';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const BeautyCare = () => {
  const rowRef = useRef(null);
  const { addToCart, addToWishlist } = useCart();

  return (
    
    <div className="main-content">
    <div className="main-content">
    <div className="beauty-care-section">
      <div className="beauty-care-title">Beauty & Personal Care</div>

      <div className="carousel-wrapper">
        <div className="beauty-care-row" ref={rowRef}>
          {beautycaredata.map((product) => (
            <div className="beauty-care-card" key={product.id}>
              <Link to={`/product/beautycare/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="beauty-care-image"
                />
              </Link>
              <div className="beauty-care-info">
                <div className="beauty-care-name">{product.name}</div>
                <div className="beauty-care-price">{product.price}</div>
                <div className="beauty-care-rating">⭐ {product.rating}</div>
                <div className="product-buttons">
                  <button
                    title="Add to Wishlist"
                    onClick={() => addToWishlist(product)}
                  >
                    ❤️
                  </button>
                  <button
                    title="Add to Cart"
                    onClick={() => addToCart(product)}
                  >
                    🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default BeautyCare;
