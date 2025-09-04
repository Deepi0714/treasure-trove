import React from 'react';
import { useCart } from '../Context/CartContext';
import './Page_Style/Wishlist.css'; 

const Wishlist = () => {
  const {
    wishlist,
    removeFromWishlist,
    addToCart,
    cartItems,
  } = useCart();

  const handleMoveToCart = (product) => {
    const isAlreadyInCart = cartItems.find(item => item.id === product.id);
    if (isAlreadyInCart) {
      alert("Item already in cart");
    } else {
      addToCart(product);
      removeFromWishlist(product.id);
    }
  };

  return (
    
    <div className="main-content">
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <div className="wishlist-actions">
                <button onClick={() => handleMoveToCart(item)}>Move to Cart</button>
                <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Wishlist;
