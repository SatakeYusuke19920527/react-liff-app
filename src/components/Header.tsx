import '../styles/Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="h_wrapper">
      <div className="menu_item">Header</div>
      <div className="menu_item">
        <Link to="/main">Main</Link>
      </div>
      <div className="menu_item">
        <Link to="/user">User</Link>
      </div>
    </div>
  );
};

export default Header;
