import { Link } from "react-router-dom";
import "../styles/components/Header.css"
import { useAuth } from '../context/authContext.jsx';

const Navbar = ({setStatus}) => {
  const { logout, user } = useAuth();
  return (
    <nav className="navbar">
      <h1 className="logo">My Tasks</h1>

      <ul className="nav-links">
        <li>
          {user && <button onClick={() => setStatus("progress")}>
            <Link to="/">Home</Link>
          </button>}
        </li>
        <li>
             { user && <button onClick ={()=> setStatus("complete")}>Completadas
          </button>}
        </li>
        <li>

          { user && <button onClick ={()=> setStatus("overdue")}>Atrasadas
          </button>}
        </li>
        <li>
          <button>
            {<Link to="/about">Sobre Nosotros</Link>}
          </button>
        </li>
        <li>
          {!user && (
            <button>
              <Link to="/login"> Iniciar sesion</Link>
            </button>
          )}
        </li>
        <li>
          {!user &&<button>
            <Link to="/register">
              Registrarme
            </Link>
          </button>}
        </li>
        <li>
          {user && <button id="logout" onClick={logout}>cerrar sesion</button>}
        </li>
      </ul>
    </nav>
  );
}

export {Navbar};