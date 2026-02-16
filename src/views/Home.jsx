import { useState, useEffect } from "react";
import '../styles/views/home.css'
import { Navbar } from "../components/header";
import { getTasksComplete, getTasksInProgress, addTask, updateTask, deleteTask} from "../services/apiFirebase.js";
import { useAuth } from "../context/authContext.jsx";
import { serverTimestamp } from "firebase/firestore";

const Home = () => {

  const { user } = useAuth(); 
  const [tasks, setTasks] = useState([]);
  const [tasksInProgress, setTasksInProgress] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    userId: user.uid,
    titleTask: "",
    task: "",
    creationDate: serverTimestamp(),
    complete: false,
    deadLine: ""
  })
  const fetchingData = async (uid) => {
    try{
      const tasks = await getTasksComplete(uid);
      console.log("Buscando tareas para el UID:", uid);
      setTasks(tasks);
      console.log("Tareas obtenidas:", tasks);
      console.log("usuario", user)

      const tasksinprogres= await getTasksInProgress(uid);
      setTasksInProgress(tasksinprogres);
      console.log("Tareas en progreso:", tasksinprogres);

    } catch (error) {
      console.error("Error al obtener tareas:", error);
    }
  }

  useEffect(() => {
    if (user) {
      fetchingData(user.uid);
    }
  }, [user]);

  // agregar nueva tareaaa

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      const addedTask = await addTask({
        userId: formData.userId,
        titleTask: formData.titleTask,
        task: formData.task,
        creationDate: formData.creationDate,
        complete: formData.complete,
        deadLine: formData.deadLine
      })

      setTasks([addedTask, ...tasks])
      setFormData({
        userId: user.uid,
        titleTask: "",
        task: "",
        creationDate: serverTimestamp(),
        complete: false,
        deadLine: ""
      })
      fetchingData(user.uid);
    }



  return (
    <>
      <Navbar />
      <div className="page Home">
        <div id="tasksContainer">
          {/* FORM IZQUIERDO */}
          <button id="newTaskButton" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Cancelar" : "Nueva tarea"}
          </button>
          {showForm && (
            <form className="taskForm" onSubmit={handleSubmit}>
              <h3>Nueva tarea</h3>

            <input type="text"
            placeholder="Título" 
            name="titleTask" 
            value={formData.titleTask}
            onChange={handleChange}
            required
            />
            <br />
            <textarea 
            placeholder="Descripción" 
            name="task"
            value={formData.task}
            onChange={handleChange}
            required
            ></textarea>

            <p>fecha limite: <input type="date"
             name="deadLine" 
             value={formData.deadLine}
             onChange={handleChange}
             required
             />
            </p>
            <br />
            <input type="hidden" 
            name="creationDate" 
            value="okis" 
            onChange={handleChange}
            required
            />

            <button type="submit">Agregar</button>
          </form>
        )}
          <div className="tasks">
            <p>Zona de tareas</p>
          </div>
          <div className="tasks">
            <h3>Titulo de la tarea</h3>
            <p>ESTE seria el lugfar dond escribis tu tarea tengo que ver que entre todo perfecto</p>
            <br></br>
            <div id="dates">
              <div class="date">
                <p>Fecha de creación: 22/05/26</p>
              </div>
               <div class="date">
                  <p>Fecha LIMITE: 22/05/26</p>
               </div>
             
            </div>
           
          </div>
          <div className="tasks">
            <h3>Titulo de la tarea</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm</p>
          </div>
           <div className="tasks">
            <p>Zona de tareas</p>
          </div>
          <div className="tasks">
            <h3>Titulo de la tarea</h3>
            <p>ESTE seria el lugfar dond escribis tu tarea tengo que ver que entre todo perfecto</p>
          </div>
          <div className="tasks">
            <h3>Titulo de la tarea</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm</p>
          </div>
          
          <div className="tasks">
            <h3>Titulo de la tarea</h3>
            <p>ESTE seria el lugfar dond escribis tu tarea tengo que ver que entre todo perfecto</p>
          </div>
          <div className="tasks">
            <h3>Titulo de la tarea</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm</p>
          </div>


        </div>
      </div>
    </>
  );
};

export { Home };
