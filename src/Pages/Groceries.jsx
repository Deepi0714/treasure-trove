import React, { useRef } from 'react';
import groceriesdata from './data/groceriesdata';
import '../Pages/Page_Style/Groceries.css';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const Groceries = () => {
  const rowRef = useRef(null);
  const { addToCart, addToWishlist } = useCart();

  return (
    
    <div className="main-content">
    <div className="groceries-section">
      <div className="groceries-title">Groceries</div>

      <div className="carousel-wrapper">
        <div className="groceries-row" ref={rowRef}>
          {groceriesdata.map((product) => (
            <div className="groceries-card" key={product.id}>
              <Link to={`/product/groceries/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="groceries-image"
                />
              </Link>
              <div className="groceries-info">
                <div className="groceries-name">{product.name}</div>
                <div className="groceries-price">{product.price}</div>
                <div className="groceries-rating">⭐ {product.rating}</div>
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

export default Groceries;
