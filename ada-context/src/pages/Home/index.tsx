import React, { useEffect, useState } from 'react';
import fakeStoreApi from '../../api/api';
import ProductList from '../../components/ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await fakeStoreApi.get('/products');
      setProducts(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <main className="container">
      <h2 className="title">Nossos produtos</h2>
      <p className="subtitle">Os melhores produtos do mercado</p>
      <ProductList products={products} />
    </main>
  );
};

export default Home;
