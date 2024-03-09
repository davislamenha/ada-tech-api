import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>LOGO</h1>
        <ul>
          <li>
            <Link to={'/carrinho'}>Carrinho</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
