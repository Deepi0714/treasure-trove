import React from "react";
import "./Page_Style/Home.css";
// import front from "../Pages/Images/front.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="home-heading">TREASURE TROVE</h1>
          <p className="home-subtitle">Discover Fashion, Fun & Future at One Place</p>
        </div>
        <div className="hero-banner">
          <img 
            src="https://tse2.mm.bing.net/th/id/OIP.c5k_snM1wDV3wP8UNgk2bAHaEo?pid=Api&P=0&h=220"
            alt="Fashion Banner"
          />
        </div>
      </div>

      
      <div className="section-grid">
        <div className="section-card">
          <h3>Get your game on</h3>
          <Link to="/electronics">
            <img src="https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg" alt="Gaming" />
          </Link>
          <Link to="/home-kitchen">Kitchen Essentials</Link>
        </div>

        <div className="section-card">
          <h3>Shop for your home essentials</h3>
          <div className="mini-grid">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_1x._SY116_CB563137408_.jpg" alt="Cleaning Tools" />
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_1x._SY116_CB563137408_.jpg" alt="Home Storage" />
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_1x._SY116_CB563137408_.jpg" alt="Decor" />
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_1x._SY116_CB563137408_.jpg" alt="Bedding" />
          </div>
          <Link to="/homedecor">Discover more in Home</Link>
        </div>

        <div className="section-card">
          <h3>Fashion trends you like</h3>
          <div className="mini-grid">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" alt="Dresses" />
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" alt="Knits" />
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg" alt="Jackets" />
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" alt="Jewelry" />
          </div>
          <Link to="/womens-fashion">Explore more</Link>
        </div>

        <div className="section-card">
          <h3>New home arrivals under ₹500</h3>
          <div className="mini-grid">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg" alt="Kitchen" />
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/BTS25/GenAIExperiment/Group_C/Fuji_QuadCard_Electronics_BTS25_1x._SY116_CB789327598_.jpg" alt="Cans" />
            <img src="https://m.media-amazon.com/images/I/217GQ1a2QzL._SY75_.jpg" alt="Mirror" />
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg" alt="Pillow" />
          </div>
          <Link to="/electronics">Shop more deals</Link>
        </div>
      </div>
    </div>    
    
  );
};

export default Home;
