import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Page_Style/Sign_up.css";
import shopping from "../Pages/Images/shopping.png";

const Sign_up = ({ setIsAuthenticated }) => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formInput)
      });

      const data = await res.json();

      if (res.ok) {
       
        setIsAuthenticated(true);

        alert(`Welcome, ${data.user?.name || formInput.name}! Your account has been created.`);
        navigate("/login"); 
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
     <h1 className="title">TREASURE TROVE</h1>
   <div className="signup-wrapper">
         <div className = "image">
         <img src={shopping} alt="shopping"/>
       </div>
         
      <form id="Signup_form" onSubmit={handleSignup}>
        <h2>SIGN_UP</h2>
        <b><label>Name:</label></b>
        <input
          type="text"
          value={formInput.name}
          onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
          required
        /><br />

        <b><label>Email:</label></b>
        <input
          type="email"
          value={formInput.email}
          onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
          required
        /><br />

        <b><label>Phone:</label></b>
        <input
          type="number"
          value={formInput.phone}
          onChange={(e) => setFormInput({ ...formInput, phone: e.target.value })}
          required
        /><br />

        <b><label>Address:</label></b>
        <input
          type="text"
          value={formInput.address}
          onChange={(e) => setFormInput({ ...formInput, address: e.target.value })}
          required
        /><br />

        <b><label>Password:</label></b>
        <input
          type="password"
          value={formInput.password}
          onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}
          required
        /><br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
};

export default Sign_up;
