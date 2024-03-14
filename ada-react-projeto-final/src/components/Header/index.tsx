import SearchBar from '../SearchBar';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Ada Shop</h1>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
