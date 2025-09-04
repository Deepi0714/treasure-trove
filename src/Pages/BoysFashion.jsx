import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import boysfashiondata from './data/boysfashiondata';
import '../Pages/Page_Style/BoysFashion.css';

const BoysFashion = () => {
  const rowRef = useRef(null);
  const { addToCart, addToWishlist } = useCart();

  const scroll = (direction) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    
    <div className="main-content">
    <div className="boys-fashion-section">
      <h2 className="boys-fashion-title">Boys’ Fashion</h2>

      <div className="carousel-wrapper">
        <div className="boys-fashion-row" ref={rowRef}>
          {boysfashiondata.map((product) => (
            <div className="boys-fashion-card" key={product.id}>
              <Link to={`/product/boysfashion/${product.id}`}>
                <img className="boys-fashion-image" src={product.image} alt={product.name} />
              </Link>

              <div className="boys-fashion-info">
                <p className="boys-fashion-name">{product.name}</p>
                <p className="boys-fashion-price">{product.price}</p>
                <p className="boys-fashion-rating">⭐ {product.rating}</p>
              </div>

              <div className="product-buttons">
                    <button
                      title="Add to Wishlist"
                      onClick={(e) => {
                        e.preventDefault();
                        addToWishlist(product);
                      }}
                    >
                      ❤️
                    </button>
                    <button
                      title="Add to Cart"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      🛒
                    </button>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default BoysFashion;
