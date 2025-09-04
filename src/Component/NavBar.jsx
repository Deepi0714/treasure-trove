import React, { useState, useEffect, useRef } from 'react';
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../Context/CartContext';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
   const { cartItems, wishlist } = useCart();

  const categoryMap = {
    "toys-games": "/toys-games",
    "boys-fashion": "/boys-fashion",
    "beauty-care": "/beauty-care",
    "girls-fashion": "/girls-fashion",
    "home-kitchen": "/home-kitchen",
    "electronics": "/electronics",
    "mens-fashion": "/mens-fashion",
    "womens-fashion": "/womens-fashion",
    "groceries": "/groceries",
    "jewellery": "/jewellery",
    "homedecor": "/homedecor",
    "books": "/books",
  };

  const keywordRouteMap = {
    toys: "/toys-games",
    games: "/toys-games",
    boys: "/boys-fashion",
    beauty: "/beauty-care",
    girls: "/girls-fashion",
    kitchen: "/home-kitchen",
    home: "/home-kitchen",
    electronics: "/electronics",
    men: "/mens-fashion",
    womens: "/womens-fashion",
    women: "/womens-fashion",
    groceries: "/groceries",
    jewellery: "/jewellery",
    homedecor: "/homedecor",
    books: "/books",
  };

  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleCategoryClick = (category) => {
    setShowDropdown(false);
    const path = categoryMap[category];
    if (path) {
      navigate(path);
    } else {
      navigate(`/search?category=${encodeURIComponent(category)}`);
    }
  };

  
  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim().toLowerCase();

    for (const keyword in keywordRouteMap) {
      if (trimmedQuery.includes(keyword)) {
        navigate(keywordRouteMap[keyword]);
        return;
      }
    }

   
    if (trimmedQuery !== "") {
      navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='demo'>
      <nav className="navbar">
       
        <div className="dropdown" ref={dropdownRef}>
          <button className="dropbtn" onClick={handleDropdown}>
            All ▼
          </button>
          {showDropdown && (
            <div className="dropdown-content">
              <button onClick={() => handleCategoryClick("toys-games")}>Toys & Games</button>
              <button onClick={() => handleCategoryClick("boys-fashion")}>Boy's Fashion</button>
              <button onClick={() => handleCategoryClick("beauty-care")}>Beauty & Personal Care</button>
              <button onClick={() => handleCategoryClick("girls-fashion")}>Girl's Fashion</button>
              <button onClick={() => handleCategoryClick("home-kitchen")}>Home & Kitchen</button>
              <button onClick={() => handleCategoryClick("electronics")}>Electronics</button>
              <button onClick={() => handleCategoryClick("mens-fashion")}>Men's Fashion</button>
              <button onClick={() => handleCategoryClick("womens-fashion")}>Women's Fashion</button>
              <button onClick={() => handleCategoryClick("groceries")}>Groceries</button>
              <button onClick={() => handleCategoryClick("jewellery")}>Jewellery</button>
              <button onClick={() => handleCategoryClick("homedecor")}>Home Decor</button>
              <button onClick={() => handleCategoryClick("books")}>Books</button>
            </div>
          )}
        </div>

        <form className="search-bar" onSubmit={handleSearch}>
          <div className="search-input-wrapper">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>


        <ul className="nav-links">
          <li>
            <Link to="/">
              <i className="fas fa-home" style={{ marginRight: "6px" }}></i>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Login">
              <i className="fas fa-user" style={{ marginRight: "6px" }}></i>
              Login
            </Link>
          </li>
          <li>
            <Link to="/Cart">
              <i className="fas fa-shopping-cart" style={{ marginRight: "6px" }}></i>
              Cart <span style={{ color: 'red' }}>{cartItems.length}</span>
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
  <i className="fas fa-heart" style={{ marginRight: "6px", color: "crimson" }}></i>
 <span style={{ color: 'crimson' }}></span>
</Link>

          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
