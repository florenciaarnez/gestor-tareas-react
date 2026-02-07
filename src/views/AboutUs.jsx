import '../styles/views/aboutUs.css'
import { Navbar } from "../components/header";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="pageAbout">
        <div id="presentation"><h1>Acerca de Nosotros</h1>
        <p>My tasks es una aplicación para gestionar tareas de manera eficiente. Permitiendo al usuario Iniciar Sesion administrar sus tareas personales, ponerles fecha limite y mantener un registro de tareas completadas, poder visualizar su perfil y editarlo.</p>
      </div>
      </div>
    </>
  );
}

export { About };
