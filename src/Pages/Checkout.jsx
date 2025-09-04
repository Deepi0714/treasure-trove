import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Pages/Page_Style/Checkout.css';

const Checkout = () => {
  const { cartItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',   
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const buyNowProduct = location.state?.buyNowProduct;

  const items = buyNowProduct
    ? [{ ...buyNowProduct, quantity: 1 }]
    : cartItems;

  const totalAmount = items.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[₹,]/g, ""));
    return acc + price * (item.quantity || 1);
  }, 0);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!/^\d{6}$/.test(formData.zip)) newErrors.zip = 'Valid 6-digit ZIP required';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!validate()) return;

    try {
      await fetch("http://localhost:5000/api/orders/send-order-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,  
          name: formData.name,
          address: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.zip}`,
          phone: formData.phone,
          items,
          totalAmount
        })
      });

      navigate("/order-summary", {
        state: {
          formData,
          cartItems: items,
          totalAmount,
          paymentId: "COD"
        }
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Order placed, but failed to send email.");
    }
  };

  return (
    <div className="main-content">
      <div className="checkout-container">
        <h2>Checkout</h2>

        {["name", "email", "address", "city", "state", "zip", "phone"].map((field) => (
          <div key={field} style={{ marginBottom: '15px' }}>
            <input
              type={field === "email" ? "email" : "text"}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              style={{
                padding: '10px',
                width: '100%',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />
            {errors[field] && (
              <div style={{ color: 'red', fontSize: '14px' }}>{errors[field]}</div>
            )}
          </div>
        ))}

        <h3>Order Summary</h3>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              {item.name} x {item.quantity || 1} = ₹
              {(parseFloat(item.price.replace(/[₹,]/g, "")) * (item.quantity || 1)).toFixed(2)}
            </li>
          ))}
        </ul>
        <h3>Total: ₹{totalAmount.toFixed(2)}</h3>

        <button onClick={handlePlaceOrder} className="checkout-button">
          Place Order (Cash on Delivery)
        </button>
      </div>
    </div>
  );
};

export default Checkout;
