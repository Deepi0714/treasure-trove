import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import boysfashiondata from "./data/boysfashiondata";
import girlsfashiondata from "./data/girlsfashiondata";
import toysgamesData from "./data/toysgamesdata"; 
import beautycaredata from "./data/beautycaredata";
import homekitchendata from "./data/homekitchendata";
import electronicsdata from "./data/electronicsdata";
import mensfashiondata from "./data/mensfashiondata";
import womensfashiondata from "./data/womensfashiondata";
import groceriesdata from "./data/groceriesdata";
import jewellerydata from "./data/jewellerydata";
import homedecordata from "./data/homedecordata";
import booksdata from "./data/booksdata";
import { useCart } from "../Context/CartContext";
import "../Pages/Page_Style/ProductDetails.css";

const ProductDetails = () => {
  const { category, id } = useParams();
  const { addToCart, addToWishlist } = useCart();
  const navigate = useNavigate();

  const dataMap = {
    boysfashion: boysfashiondata,
    girlsfashion: girlsfashiondata,
    toysgames: toysgamesData, 
    beautycare: beautycaredata,
    homekitchen: homekitchendata,
    electronics: electronicsdata,
    mensfashion: mensfashiondata,
    womensfashion: womensfashiondata,
    groceries: groceriesdata,
    jewellery: jewellerydata,
    homedecor: homedecordata,
    books: booksdata,
  };

  const products = dataMap[category] || [];
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div style={{ padding: "20px" }}>Product not found.</div>;

  const handleBuyNow = () => {
    const productWithQuantity = { ...product, quantity: 1 };

    navigate("/checkout", { state: { buyNowProduct: product } });
  };

  return (
    <div className="main-content_product-details">
      <img src={product.image} alt={product.name} className="products_images" />
      <div className="details-content">
        <h2>{product.name}</h2>
        <p>{product.quality}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating} ⭐</p>
        <div className="buttons">
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          <button onClick={() => addToWishlist(product)}>Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
