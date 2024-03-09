import PropTypes from 'prop-types';
import './Product.css';

const ProductCard = ({ product }) => {
  return (
    <div className="cart">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <span>
        <b>Preço:</b>{' '}
        {product.price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>
      <button type="button" className="btn-buy">
        Comprar
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
