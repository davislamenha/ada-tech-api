import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ProductList from '../../components/ProductList';

const Cart = () => {
  const { cart, resetCart, total } = useContext(CartContext);

  const handleClearCart = () => {
    resetCart();
  };

  return (
    <main className="container">
      <div className="btn-container">
        <Link to={'/'} className="back-link">
          Voltar para home
        </Link>

        <button type="button" onClick={handleClearCart}>
          Limpar Carrinho
        </button>
      </div>

      <h2 className="title">Carrinho</h2>
      <p className="subtitle">Compre seus produtos</p>

      {cart.length > 0 ? (
        <ProductList products={cart} cart={true} />
      ) : (
        <p className="message">Seu carrinho está vazio</p>
      )}

      {total > 0 && (
        <p className="container total-price">
          <b>Total: </b>
          {total.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      )}
    </main>
  );
};

export default Cart;
