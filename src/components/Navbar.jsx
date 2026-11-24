import { Link } from "react-router";

function Navbar({ issuedCount }) {
  return (
    <div className="navbar">
      <h2>Library Book Manager</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/issued">Issued ({issuedCount})</Link>
      </div>
    </div>
  );
}

export default Navbar;
