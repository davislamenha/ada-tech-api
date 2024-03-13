import { Skeleton } from '@mui/material';
import ProductsCard, { IProduct } from '../ProductsCard';
import './ProductsList.css';

interface ProductsListProps {
  products: IProduct[];
  isLoading: boolean;
}

const ProductsList = ({ products, isLoading }: ProductsListProps) => {
  return (
    <ul className="products-list">
      {!isLoading
        ? products.map((product) => {
            return (
              <li key={product.id}>
                <ProductsCard product={product} />
              </li>
            );
          })
        : Array.from({ length: 20 }, (_, index) => {
            return (
              <li key={index}>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={320}
                  height={360}
                  sx={{ borderRadius: '8px' }}
                />
              </li>
            );
          })}
    </ul>
  );
};

export default ProductsList;
