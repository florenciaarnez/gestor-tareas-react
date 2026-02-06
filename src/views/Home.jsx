import '../styles/views/home.css'
import { Navbar } from "../components/header";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="page Home">
        <h1>Página de Inicio</h1>
        <p>Bienvenido a nuestra aplicación</p>
      </div>
    </>
  );
}

export { Home };
