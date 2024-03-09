import { Link } from 'react-router-dom';
import { ShoppingCart } from '@phosphor-icons/react';
import './Header.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <div className="container">
        <h1>LOGO</h1>
        <ul>
          <li>
            <Link to={'/carrinho'} className="cart-link">
              <ShoppingCart size={32} />
              <span className="cart-quantity">{cart.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
