import React, { useRef } from 'react';
import homekitchendata from './data/homekitchendata';
import '../Pages/Page_Style/HomeKitchen.css';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const HomeKitchen = () => {
  const rowRef = useRef(null);
  const { addToCart, addToWishlist } = useCart();

  return (
    
    <div className="main-content">
    <div className="home-kitchen-section">
      <div className="home-kitchen-title">Home & Kitchen</div>

      <div className="carousel-wrapper">
        <div className="home-kitchen-row" ref={rowRef}>
          {homekitchendata.map((product) => (
            <div className="home-kitchen-card" key={product.id}>
              <Link to={`/product/homekitchen/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="home-kitchen-image"
                />
              </Link>
              <div className="home-kitchen-info">
                <div className="home-kitchen-name">{product.name}</div>
                <div className="home-kitchen-price">{product.price}</div>
                <div className="home-kitchen-rating">⭐ {product.rating}</div>
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

export default HomeKitchen;
