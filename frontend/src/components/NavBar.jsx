import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../api/auth.js';

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header className="navbar">
      <div className="brand">Crypto App</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/add-crypto">Add Crypto</Link>
        <button type="button" onClick={handleLogout} className="nav-button">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
