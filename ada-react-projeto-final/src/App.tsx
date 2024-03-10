import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Box, Button, Modal, Typography } from '@mui/material';
import fakeApi from './api/api';
import ProductsList from './components/ProductsList';
import { IProduct } from './components/ProductsCard';

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

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <ProductsList products={products} />
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
