import '../styles/views/home.css'
import { Navbar } from "../components/header";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="page About">
        <h1>Acerca de Nosotros</h1>
        <p>Información sobre nuestra aplicación</p>
      </div>
    </>
  );
}

export { About };
