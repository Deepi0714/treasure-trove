import React, { useRef } from 'react';
import booksdata from './data/booksdata';
import '../Pages/Page_Style/Books.css';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const Books = () => {
  const rowRef = useRef(null);
  const { addToCart, addToWishlist } = useCart();

  return (
    
    <div className="main-content">
    <div className="books-section">
      <div className="books-title">Books</div>

      <div className="carousel-wrapper">
        <div className="books-row" ref={rowRef}>
          {booksdata.map((product) => (
            <div className="books-card" key={product.id}>
              <Link to={`/product/books/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="books-image"
                />
              </Link>
              <div className="books-info">
                <div className="books-name">{product.name}</div>
                <div className="books-price">{product.price}</div>
                <div className="books-rating">⭐ {product.rating}</div>
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

export default Books;
