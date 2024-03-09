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
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};

export default Home;
