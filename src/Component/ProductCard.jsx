import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, index }) => {
  return (
    <Link to={`/product/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <p>⭐ {product.rating}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
