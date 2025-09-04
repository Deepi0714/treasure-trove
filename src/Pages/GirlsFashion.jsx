import React, { useRef } from 'react';
import girlsfashiondata from './data/girlsfashiondata';
import '../Pages/Page_Style/GirlsFashion.css';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const GirlsFashion = () => {
  const rowRef = useRef(null);
  const { addToCart, addToWishlist } = useCart();

  return (
    
    <div className="main-content">
    <div className="girls-fashion-section">
      <div className="girls-fashion-title">Girls' Fashion</div>

      <div className="carousel-wrapper">
        <div className="girls-fashion-row" ref={rowRef}>
          {girlsfashiondata.map((product) => (
            <div className="girls-fashion-card" key={product.id}>
              <Link to={`/product/girlsfashion/${product.id}`} >
                <img
                  src={product.image}
                  alt={product.name}
                  className="girls-fashion-image"
                />
              </Link>
              <div className="girls-fashion-info">
                <div className="girls-fashion-name">{product.name}</div>
                <div className="girls-fashion-price">{product.price}</div>
                <div className="girls-fashion-rating">⭐ {product.rating}</div>
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

export default GirlsFashion;
