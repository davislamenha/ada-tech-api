import { useContext, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import fakeApi from "./api/api";
import ProductsList from "./components/ProductsList";
import { ProductContext } from "./context/ProductsContext";

function App() {
  const { products, setProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await fakeApi.get("/products");

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <ProductsList products={products} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
