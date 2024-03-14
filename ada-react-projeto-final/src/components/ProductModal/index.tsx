import { Box, Modal, Typography, Grid, Paper, Button } from '@mui/material';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { IProduct } from '../ProductsCard';
import { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductsContext';
import { SearchContext } from '../../context/SearchContext';

interface IModal {
  product: IProduct;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: IModal) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50em',
    borderRadius: '8px',
    bgcolor: '#fff',
    boxShadow: 6,
    p: 4,
    padding: '51px 32px;',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

  const [prod, setProd] = useState<IProduct>(product);
  const { products, findProductIndexById } = useContext(ProductContext);
  const { filteredProducts, findFilteredProductIndexById } =
    useContext(SearchContext);
  const [productIndex, setProductIndex] = useState<number>(
    findProductIndexById(product.id),
  );

  useEffect(() => {
    setProd(product);
  }, []);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setProductIndex(findFilteredProductIndexById(product.id));
    }
  }, [filteredProducts, product.id, findFilteredProductIndexById]);

  const handleNext = () => {
    const productsList =
      filteredProducts.length > 0 ? filteredProducts : products;

    if (productIndex !== productsList.length - 1) {
      setProd(productsList[productIndex + 1]);
      setProductIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    const productsList =
      filteredProducts.length > 0 ? filteredProducts : products;

    if (productIndex !== 0) {
      setProd(productsList[productIndex - 1]);
      setProductIndex((prev) => prev - 1);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        <Paper
          sx={{
            margin: 'auto',
            flexGrow: 1,
            ...style,
            '&.MuiPaper-root': {
              border: 'none',
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <Button onClick={handlePrev} startIcon={<ChevronLeft />}></Button>
            </Grid>
            <Grid item>
              <img
                src={prod.image}
                alt=""
                style={{ width: '150px', height: '100%', objectFit: 'contain' }}
              />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    color="#94b053"
                  >
                    {prod.category}
                  </Typography>
                  <Typography variant="h5">
                    {prod.title.substring(0, prod.title.indexOf(' ') + 1)}
                  </Typography>
                  <Typography variant="h6">
                    {prod.title.substring(prod.title.indexOf(' ') + 1)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {prod.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {prod.description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  Price: {prod.price}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                onClick={handleNext}
                startIcon={<ChevronRight />}
              ></Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Modal>
  );
};
