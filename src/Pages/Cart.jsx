import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import '../Pages/Page_Style/Cart.css';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useCart();

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[₹,]/g, ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="main-content">
   <div className="cart-container">
  <h2 className="cart-title">Your Cart</h2>
  {cartItems.length === 0 ? (
    <p className="cart-empty">No items in cart.</p>
  ) : (
    <>
      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <div className="qty-controls">
              <button className="qty-btn" onClick={() => decreaseQuantity(item.id)}>−</button>
              <span>{item.quantity}</span>
              <button className="qty-btn" onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(item)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h3 className="total-amount">Total: ₹{totalPrice.toFixed(2)}</h3>
        <button className="checkout-btn" onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </button>
      </div>
    </>
  )}
</div>
</div>

  );
};

export default Cart;