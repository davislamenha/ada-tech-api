import React from 'react';
import ProductCard from '../ProductCard';
import PropTypes from 'prop-types';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <ul className="products-list container">
      {products.length > 0 &&
        products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
