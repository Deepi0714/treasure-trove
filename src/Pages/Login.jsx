import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Page_Style/Login.css";
import shopping from "../Pages/Images/shopping.png"

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Invalid email or password");
      }

     
      setIsAuthenticated(true);

      alert(`Welcome back, ${data.user.name}!`);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }

    setEmail("");
    setPassword("");
  };

  const handleSign = () => {
    navigate("/sign_up");
  };

  return (
    <>
    <h1 className="title">TREASURE TROVE</h1>
    <div className="login-wrapper">
     
      <div className = "image">
      <img src={shopping} alt="shopping"/>
    </div>
      
      <form id="loginform" onSubmit={handleLogin}>
        <h2>LOGIN</h2>
        <b>
          <label>Email:</label>
        </b>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <b>
          <label>Password:</label>
        </b>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        <button type="submit">Login</button>
     

      <h3>or</h3>
      <button onClick={handleSign}>Sign Up</button>
       </form>
    </div>
    </>
  );
};

export default Login;
