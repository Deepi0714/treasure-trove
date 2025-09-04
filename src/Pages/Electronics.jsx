import React, { useRef } from 'react';
import electronicsdata from './data/electronicsdata';
import '../Pages/Page_Style/Electronics.css';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const Electronics = () => {
  const rowRef = useRef(null);
  const { addToCart, addToWishlist } = useCart();

  return (
    
    <div className="main-content">
    <div className="electronics-section">
      <div className="electronics-title">Electronics</div>

      <div className="carousel-wrapper">
        <div className="electronics-row" ref={rowRef}>
          {electronicsdata.map((product) => (
            <div className="electronics-card" key={product.id}>
              <Link to={`/product/electronics/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="electronics-image"
                />
              </Link>
              <div className="electronics-info">
                <div className="electronics-name">{product.name}</div>
                <div className="electronics-price">{product.price}</div>
                <div className="electronics-rating">⭐ {product.rating}</div>
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
  );
};

export default Electronics;
