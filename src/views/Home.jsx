import { useState, useEffect } from "react";
import '../styles/views/home.css'
import { Navbar } from "../components/header";
import { getTasksComplete, getTasksInProgress, addTask, updateTask, deleteTask} from "../services/apiFirebase.js";
import { useAuth } from "../context/authContext.jsx";
import { serverTimestamp, Timestamp} from "firebase/firestore";

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

  const statusTitle = "En Progreso"
  const statusIcon = "🚀"

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
        deadLine: Timestamp.fromDate(new Date(formData.deadLine + "T12:00:00")),
      })
    console.log("Tarea agregada:", addedTask);

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
      {/* Header */}
      <div className="pageHome">
        <header className="header">
          <div className="headerContent">

            <div className="logoContainer">
              <img src="/tl.webp" alt="logo gestor" className="logo" />
              <h1>Gestor de Tareas</h1>
            </div>

            <p className="subtitle">
              Organiza tu día con claridad y enfócate en lo importante.
            </p>

            <button 
              id="newTaskButton" 
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Cancelar" : "Nueva tarea"}
            </button>
          </div>
       </header>
        <div id="tasksContainer">
          {/* Form */}
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

            <textarea 
            placeholder="Descripción" 
            name="task"
            value={formData.task}
            onChange={handleChange}
            required
            ></textarea>
            <br />
            <p>fecha limite: </p><input type="date"
             name="deadLine" 
             value={formData.deadLine}
             onChange={handleChange}
             required
             />
        
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
         {tasksInProgress.map((task) =>(
          <div className="tasks" key={task.id}>
            <div className="status">{statusIcon} {statusTitle}</div>

            <h3>{task.titleTask}</h3>
            <p>{task.task}</p>
            <br></br>
            <div id="dates">
              <div className="date">
                <p>Fecha de creación: {task.creationDate?.toLocaleDateString()}</p>
              </div>
               <div className="date">
                  <p>Fecha LIMITE: {task.deadLine?.toLocaleDateString()}</p>
               </div>
            </div>
           <div id="buttons">
              <button 
                  id="EditButton" 
                  onClick={() => setShowForm(!showForm)}
                >Editar
                </button>
              
                <button 
                  id="CompleteButton" 
                  onClick={() => setShowForm(!showForm)}
                >Hecho
                </button>
            </div>
            <button 
              id="DeleteButton" 
              onClick={() => setShowForm(!showForm)}
            >Eliminar
            </button>
          </div>
         ))}
        </div>
      </div>
    </>
  );
};

export { Home };
