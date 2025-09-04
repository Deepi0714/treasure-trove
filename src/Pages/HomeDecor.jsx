import React, { useRef } from 'react';
import homedecordata from './data/homedecordata';
import '../Pages/Page_Style/HomeDecor.css';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const HomeDecor = () => {
  const rowRef = useRef(null);
  const { addToCart, addToWishlist } = useCart();

  return (
    
    <div className="main-content">
    <div className="home-decor-section">
      <div className="home-decor-title">Home Decor</div>

      <div className="carousel-wrapper">
        <div className="home-decor-row" ref={rowRef}>
          {homedecordata.map((product) => (
            <div className="home-decor-card" key={product.id}>
              <Link to={`/product/homedecor/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="home-decor-image"
                />
              </Link>
              <div className="home-decor-info">
                <div className="home-decor-name">{product.name}</div>
                <div className="home-decor-price">{product.price}</div>
                <div className="home-decor-rating">⭐ {product.rating}</div>
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

export default HomeDecor;
