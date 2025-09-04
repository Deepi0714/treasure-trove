import React, { useRef } from 'react';
import toygamesdata from './data/toysgamesdata';
import '../Pages/Page_Style/ToysGames.css';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const ToysGames = () => {
  const rowRef = useRef(null);
  const { addToCart, addToWishlist } = useCart();

  return (
    
    <div className="main-content">
    <div className="toys-games-section">
      <div className="toys-games-title">Toys & Games</div>

      <div className="carousel-wrapper">
        <div className="toys-games-row" ref={rowRef}>
          {toygamesdata.map((product) => (
            <div className="toys-games-card" key={product.id}>
              <Link to={`/product/toysgames/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
              </Link>
              <div className="toys-games-info">
                <div className="toys-games-name">{product.name}</div>
                <div className="toys-games-price">{product.price}</div>
                <div className="toys-games-rating">⭐ {product.rating}</div>
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

export default ToysGames;
