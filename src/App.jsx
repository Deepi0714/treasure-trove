import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from './Component/ProtectedRoute.jsx';
import NavBar from './Component/NavBar';
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Cart from "./Pages/Cart.jsx"; 
import Wishlist from './Pages/Wishlist';
import SearchResults from './Pages/SearchResults';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ToysGames from "./Pages/ToysGames";
import BoysFashion from "./Pages/BoysFashion";
import BeautyCare from "./Pages/BeautyCare.jsx";
import GirlsFashion from "./Pages/GirlsFashion.jsx";
import HomeKitchen from "./Pages/HomeKitchen.jsx";
import Electronics from "./Pages/Electronics.jsx";
import MensFashion from "./Pages/MensFashion.jsx";
import WomensFashion from "./Pages/WomensFashion.jsx";
import Groceries from "./Pages/Groceries.jsx";
import Jewellery from "./Pages/Jewellery.jsx";
import HomeDecor from "./Pages/HomeDecor.jsx";
import Books from "./Pages/Books.jsx";
import Sign_up from "./Pages/Sign_up.jsx";
import ProductCard from "./Component/ProductCard.jsx";
import ProductDetails from './Pages/ProductDetails.jsx';
import Checkout from './Pages/Checkout.jsx';
import OrderSummary from './Pages/OrderSummary';
import { CartProvider } from './Context/CartContext';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="demo">
      <BrowserRouter>
          <CartProvider>
            {isAuthenticated && <NavBar />}
            <div className="page-content">
              <Routes>
                <Route path="/login" element={isAuthenticated ? ( <Navigate to="/" replace />): (<Login setIsAuthenticated={setIsAuthenticated} />)}/>
                <Route path="/sign_up" element={ isAuthenticated ? ( <Navigate to="/" replace /> ) : ( <Sign_up setIsAuthenticated={setIsAuthenticated} />)}/>

             
                <Route path="/" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Home /></ProtectedRoute>} />
                <Route path="/cart" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Cart /></ProtectedRoute>} />
                <Route path="/wishlist" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Wishlist /></ProtectedRoute>} />
                <Route path="/search" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SearchResults /></ProtectedRoute>} />
                <Route path="/toys-games" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ToysGames /></ProtectedRoute>} />
                <Route path="/boys-fashion" element={<ProtectedRoute isAuthenticated={isAuthenticated}><BoysFashion /></ProtectedRoute>} />
                <Route path="/beauty-care" element={<ProtectedRoute isAuthenticated={isAuthenticated}><BeautyCare /></ProtectedRoute>} />
                <Route path="/girls-fashion" element={<ProtectedRoute isAuthenticated={isAuthenticated}><GirlsFashion /></ProtectedRoute>} />
                <Route path="/home-kitchen" element={<ProtectedRoute isAuthenticated={isAuthenticated}><HomeKitchen /></ProtectedRoute>} />
                <Route path="/electronics" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Electronics /></ProtectedRoute>} />
                <Route path="/mens-fashion" element={<ProtectedRoute isAuthenticated={isAuthenticated}><MensFashion /></ProtectedRoute>} />
                <Route path="/womens-fashion" element={<ProtectedRoute isAuthenticated={isAuthenticated}><WomensFashion /></ProtectedRoute>} />
                <Route path="/groceries" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Groceries /></ProtectedRoute>} />
                <Route path="/jewellery" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Jewellery /></ProtectedRoute>} />
                <Route path="/homedecor" element={<ProtectedRoute isAuthenticated={isAuthenticated}><HomeDecor /></ProtectedRoute>} />
                <Route path="/books" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Books /></ProtectedRoute>} />
                <Route path="/productcard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ProductCard /></ProtectedRoute>} />
                <Route path="/productdetails" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ProductDetails /></ProtectedRoute>} />
                <Route path="/checkout" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Checkout /></ProtectedRoute>} />
                <Route path="/order-summary" element={<ProtectedRoute isAuthenticated={isAuthenticated}><OrderSummary /></ProtectedRoute>} />
                <Route path="/product/:category/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ProductDetails /></ProtectedRoute>} />

              </Routes>
            </div>
          </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
