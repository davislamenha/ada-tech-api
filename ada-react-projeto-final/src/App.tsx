import { useContext, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import fakeApi from './api/api';
import ProductsList from './components/ProductsList';
import { SearchContext } from './context/SearchContext';
import { ProductContext } from './context/ProductsContext';

function App() {
  const { products, setProducts } = useContext(ProductContext);
  const { searchTerm, filteredProducts, setFilteredProducts } =
    useContext(SearchContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await fakeApi.get('/products');

      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      const filteredProducts = products.filter((product) => {
        const searchTermLower = searchTerm.toLowerCase();
        const titleLower = product.title.toLowerCase();
        const categoryLower = product.category.toLowerCase();

        const titleMatch = titleLower
          .split(' ')
          .filter((word) => word.startsWith(searchTermLower));
        const categoryMatch = categoryLower
          .split(' ')
          .filter((word) => word.startsWith(searchTermLower));

        return titleMatch.length > 0 || categoryMatch.length > 0;
      });

      setFilteredProducts(filteredProducts);
    }
  }, [searchTerm, products]);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          {searchTerm.trim() ? (
            <ProductsList isLoading={isLoading} products={filteredProducts} />
          ) : (
            <ProductsList isLoading={isLoading} products={products} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
