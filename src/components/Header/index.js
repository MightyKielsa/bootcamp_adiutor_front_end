import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/resources">Resources</Link>
    </nav>
  );
}

export default Header;
