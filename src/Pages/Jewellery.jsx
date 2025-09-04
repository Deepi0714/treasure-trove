import React, { useRef } from 'react';
import jewellerydata from './data/jewellerydata';
import '../Pages/Page_Style/Jewellery.css';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const Jewellery = () => {
  const rowRef = useRef(null);
  const { addToCart, addToWishlist } = useCart();

  return (
    
    <div className="main-content">
    <div className="jewellery-section">
      <div className="jewellery-title">Jewellery</div>

      <div className="carousel-wrapper">
        <div className="jewellery-row" ref={rowRef}>
          {jewellerydata.map((product) => (
            <div className="jewellery-card" key={product.id}>
              <Link to={`/product/jewellery/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="jewellery-image"
                />
              </Link>
              <div className="jewellery-info">
                <div className="jewellery-name">{product.name}</div>
                <div className="jewellery-price">{product.price}</div>
                <div className="jewellery-rating">⭐ {product.rating}</div>
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

export default Jewellery;
