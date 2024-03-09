import PropTypes from 'prop-types';
import './Product.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductCard = ({ product, cart }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const handleBuy = () => {
    addToCart(product);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="cart-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.substring(0, 20) + '...'}</h3>
      <span className="cart-info">
        <b>Preço:</b>{' '}
        {product.price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>

      {cart && (
        <span className="cart-info">
          <b>Quantidade:</b> {product.quantity}
        </span>
      )}

      {cart ? (
        <button type="button" className="btn-remove" onClick={handleRemove}>
          Remover
        </button>
      ) : (
        <button type="button" className="btn-buy" onClick={handleBuy}>
          Comprar
        </button>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.bool,
};

export default ProductCard;
