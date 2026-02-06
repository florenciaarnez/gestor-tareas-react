import { Link } from "react-router-dom";
import "../styles/components/Header.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">My Tasks</h1>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/tareas">Mis tareas</Link>
        </li> */}
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/registrarme">
            Registrarme
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export {Navbar};