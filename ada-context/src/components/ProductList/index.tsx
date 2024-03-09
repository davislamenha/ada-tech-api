import React from 'react';
import ProductCard from '../ProductCard';
import PropTypes from 'prop-types';
import './ProductList.css';

const ProductList = ({ products, cart }) => {
  return (
    <ul className="products-list container">
      {products.length > 0 &&
        products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} cart={cart} />
            </li>
          );
        })}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  cart: PropTypes.bool,
};

export default ProductList;
