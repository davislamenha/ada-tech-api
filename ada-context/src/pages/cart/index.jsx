import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <main className="container">
      <Link to={'/'}>Voltar para home</Link>
      <h2 className="title">Carrinho</h2>
      <p className="subtitle">Compre seus produtos</p>
    </main>
  );
};

export default Cart;
