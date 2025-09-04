import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Pages/Page_Style/OrderSummary.css'; 
import { useCart } from '../Context/CartContext';

const OrderSummary = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { clearCart } = useCart();

useEffect(() => {
  clearCart();
}, []);


  if (!state) return (
    <div className="order-summary-container">
      <p>No order found.</p>
      <button className="continue-button" onClick={() => navigate("/")}>Go Home</button>
    </div>
  );

  const { formData, cartItems, totalAmount, paymentId } = state;

  return (
    <div className="order-summary-container">
      <h2>Order Confirmation</h2>
      <p>Thank you, <strong>{formData.name}</strong>!</p>
      <p>Your order has been placed successfully.</p>
      <p><strong>Payment ID:</strong> {paymentId}</p>

      <h3>Shipping Address:</h3>
      <p>{formData.address}, {formData.city}, {formData.state} - {formData.zip}</p>
      <p>Phone: {formData.phone}</p>

      <h3>Items Ordered:</h3>
      <ul>
        {cartItems.map((item, idx) => (
          <li key={idx}>{item.name} x {item.quantity}</li>
        ))}
      </ul>

      <h3>Total Paid: ₹{totalAmount.toFixed(2)}</h3>

      <button className="continue-button" onClick={() => navigate("/")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSummary;
