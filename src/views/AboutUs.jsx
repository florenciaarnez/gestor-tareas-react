import '../styles/views/aboutUs.css'
import { Navbar } from "../components/header";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="pageAbout">
        <div id="presentation"><h1>Acerca de Nosotros</h1>
        <p>My tasks es una aplicación para gestionar tareas de manera eficiente. Permitiendo al usuario loguearse y visualizar únicamente sus tareas, con la posibilidad de filtrar por tareas completadas, retrasadas o en proceso, siendo una herramienta para visualizar el progreso de cada uno. En cada tarea el usuario puede visualizar cuando fue creada la descripcion de esta y la fecha para la cual esta deberia estar terminada</p>
        <h2>Tecnologías Utilizadas:</h2>
        <ul>
          <li>React: Para la interfaz de usuario con JSX </li>
          <li>React Router: Para la navegación entre diferentes paginas</li>

          <li>Firebase: Para la autenticación (Firebase Authentication) y almacenamiento de datos. Tambien utilizandola como servicio de backend</li>
          <li>CSS: Para el diseño y estilo de la aplicación, Responsive utilizando flex box y grid</li>
        </ul>
      </div>
      <img src="../../public/estructura.png" alt="Fondo de papel" />
      </div>
    </>
  );
}

export { About };
