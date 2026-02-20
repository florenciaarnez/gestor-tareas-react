import '../styles/views/aboutUs.css'
import { Navbar } from "../components/header";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="pageAbout">
        <div id="presentation"><h1>Acerca de Nosotros</h1>
        <p>My tasks es una aplicación para gestionar tareas de manera eficiente. Permitiendo al usuario iniciar sesion y visualizar únicamente sus tareas, con la posibilidad de filtrar por tareas completadas, retrasadas o en proceso, siendo una herramienta para visualizar el progreso de cada uno. En cada tarea el usuario puede visualizar cuando fue creada la descripcion de esta y la fecha para la cual esta deberia estar terminada</p>
      
        <h2>Tecnologías Utilizadas:</h2>
        <ul>
          <li>React: Para la interfaz de usuario con JSX, permitiendo al usuario una pagina dinamica e interactiva</li>
          <li>React Router: Para la navegación entre diferentes paginas</li>

          <li>Firebase: Utilizandola como servicio de backend, Para la autenticación: Firebase Authentication y almacenamiento de datos: Firestore.</li>
          <li>CSS: Para el diseño y estilo de la aplicación, Responsive utilizando flex box y grid</li>
        </ul>
        <h2>Estructura del proyecto</h2>
        <p>El proyecto esta organizado de forma modular, para mayor organización y escalabilidad en el futuro. Con carpetas separas para los servicios, componentes y vistas contando con archivos de entorno .env para configuraciones con Firebase</p>

           <ul>
          <li><strong>Src:</strong> Directorio con toda la logica de la pagina web</li>
          <li><strong>Componentes:</strong> Para la reutilización de código y organización de la interfaz de usuario, dentro de este directorio se encuentran:

                   <p className="sub">header.jsx: con la navbar utilizada en cada pagina</p>

                   <p className="sub">protectedRoute.jsx: con la logica para proteger las rutas</p>
                   <p className="sub"><strong>publicRoute.jsx:</strong> con la logica para las rutas publicas y que unicamente se pueda acceder si no hay user logueado</p></li>
          <li><strong>config:</strong> Con la configuracion de Firebase:
              <p className='sub'><strong>firebase.js:</strong> Inicializacion de Firebase y configuracion de bases de datos</p></li>
          <li><strong>router:</strong> Como estan configuradas las rutas de la pagina web utilizando React Router</li>
          <li><strong>Services:</strong> Con la logica para consumir la API de Firebase</li>
          <li><strong>Styles:</strong> Dividido en directorios Components y Views cada uno con archivos css para manejo de estilos</li>
          <li><strong>Views:</strong> Contiene las diferentes vistas de la aplicación, cada una en su propio archivo:
          <p className='sub'>Login.jsx: Vista para el inicio de sesión de usuarios</p>
          <p className='sub'>Register.jsx: Vista para el registro de nuevos usuarios</p>
          <p className='sub'>Home.jsx: Vista principal del usuario una vez logueado con todas las tareas</p>
          <p className='sub'>AboutUs.jsx: Vista con información sobre la aplicación y su desarrollo</p>
          </li>
          <li><strong>Main.jsx:</strong> Componente principal que renderiza toda la pagina Web</li>
        </ul>
        <h2>Implementacion del AuthContext</h2>
        <ul>
          <li>Se crea un contexto de autenticacion en el cual se proporciona de forma global el inicio de sesion del usuario que inicio sesion por medio de un token, permitiendo asi acceder a la informacion del usuario en cualquier componente de la pagina web, sin la necesidad de usar prop drilling</li>
        </ul>
        <h2>Decisiones Técnicas:</h2>
        <h3>Optimizacion de Queries </h3>
        <p> Implemento una estrategia de filtrado en el front y unicamente hacer una peticion a Firebase para obtener las tareas del usuario logueado.</p>
        <ul>
        <li>Evito lecturas innecesarias y traer continuamente los datos por medio de fetchingData, utilizando estados que guardan el valor de tareas filtradas</li>
        <li>Utilizando los estados evito el tiempo de carga innecesario y mejoro la interfaz de usuario</li>
        <li>Es una decisión viable porque en la peticion traigo unicamente las tareas del usuario logueado, y al ser pocas estas no sobrecargan la memoria del navegador</li>
        </ul>
        <h2>Dificultades y soluciones: </h2>
        <ul>
          <li><strong>Dificultad</strong> Manejo de fechas en Firebase y Date js</li>
          <li><strong>Solución:</strong> Manejar unicamente el cambio de fechas en las queries a la hora de retornar las tareas, utilizando el método toDateString() para formatear las fechas. 
          Manejar unicamente to Date() en el front para mayor organizacion del codigo y pasarlo a Timestamp en UpdateTasks() y addTasks().</li>
        </ul>
      </div>
      </div>
    </>
  );
}

export { About };
