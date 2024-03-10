import ProductsCard, { IProduct } from '../ProductsCard';
import './ProductsList.css';

interface ProductsListProps {
  products: IProduct[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <ul className="products-list">
      {products.map((product) => {
        return (
          <li key={product.id}>
            <ProductsCard product={product} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
