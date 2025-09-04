import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CartProvider } from "./Context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <CartProvider>
      {/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */}

      <App />
    </CartProvider>

);
