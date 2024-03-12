import { useContext, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Box, Button, Modal, Typography } from '@mui/material';
import fakeApi from './api/api';
import ProductsList from './components/ProductsList';
import { IProduct } from './components/ProductsCard';
import { SearchContext } from './context/SearchContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: '8px',
  bgcolor: '#fff',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const { searchTerm } = useContext(SearchContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await fakeApi.get('/products');

      setProducts(data);
    } catch (error) {
      console.log(error);
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
            <ProductsList products={filteredProducts} />
          ) : (
            <ProductsList products={products} />
          )}
          <Button onClick={handleOpen}>Open modal</Button>
        </div>
      </main>
      <Footer />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default App;
