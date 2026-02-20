import { useState, useEffect } from "react";
import '../styles/views/home.css'
import { Navbar } from "../components/header";
import { getTasksInProgress, addTask, updateTask, deleteTask} from "../services/apiFirebase.js";
import { useAuth } from "../context/authContext.jsx";
import { serverTimestamp, Timestamp} from "firebase/firestore";

const Home = () => {

  const { user } = useAuth(); 
  const [tasksInProgress, setTasksInProgress] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [formData, setFormData] = useState({
    userId: user.uid,
    titleTask: "",
    task: "",
    creationDate: new Date(),
    complete: false,
    deadLine: ""
  })

  const statusTitle = "En Progreso"
  const statusIcon = "🚀"
  const statusTitleComplete = "Completada"
  const statusIconComplete = "✅"
  const statusTitleOverdue = "Atrasada"
  const statusIconOverdue = "⏰"

  const fetchingData = async (uid) => {
    try{

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const TaskToSave = {
      userId: formData.userId,
      titleTask: formData.titleTask,
      task: formData.task,
      complete: formData.complete,
      deadLine: new Date(formData.deadLine + "T12:00:00"),
    };

    if (editingTask !== null) {
      const res = await updateTask(editingTask, TaskToSave)
      const updatedTask = tasksInProgress.map(t =>
      t.id === editingTask ? { ...t, ...res } : t)
      setTasksInProgress(updatedTask)
      setEditingTask(null)

    } else{
      const addedTask = await addTask({
        userId: formData.userId,
        titleTask: formData.titleTask,
        task: formData.task,
        creationDate: formData.creationDate,
        complete: formData.complete,
        deadLine: new Date(formData.deadLine + "T12:00:00"),
      })
      setTasksInProgress([addedTask, ...tasksInProgress])
    }
    
      setFormData({
        userId: user.uid,
        titleTask: "",
        task: "",
        creationDate: new Date (),
        complete: false,
        deadLine: ""
      })

        setShowForm(false)
        setShowButton(true)
  }

  const handleUpdateTask = (task) => {
    setFormData({
      userId: task.userId,
      titleTask: task.titleTask,
      task: task.task,
      creationDate: task.creationDate,
      complete: task.complete,
      deadLine: task.deadLine ? task.deadLine.toISOString().slice(0, 10) : "",
    })
        setEditingTask(task.id);
  }

  const handleDeleteTask = async (id) => {
   try {
     if (!confirm("¿Seguro que deseas borrar la tarea?")) {
       return
     }


     const idDeletedTask = await deleteTask(id)
     alert(`Tarea borrada con éxito`)
     const filteredTasks = tasksInProgress.filter(t => t.id !== id)
     setTasksInProgress(filteredTasks)


   } catch (error) {
     console.log(error)
   }
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
            {showButton && (
              <>
              <button 
              id="newTaskButton" 
              onClick={() => {if (!editingTask) {setShowForm(!showForm), setShowButton(!showButton)}}
            }
            >
              Nueva tarea
            </button>
            </>
            )}
            
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
            {/* CHECK    //"✅"*/}
            <button type="submit">{editingTask ? "Actualizar" : "Agregar"}</button>
            <button id= "cancelButton" type="button" onClick={() => {
              setShowForm(false);
              setShowButton(true);
              setEditingTask(null);
               setFormData({
                        userId: user.uid,
                        titleTask: "",
                        task: "",
                        creationDate: new Date(),
                        complete: false,
                        deadLine: ""
                      })
            }}>Cancelar</button>
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
                  onClick={() => {
                    if (!showForm) {
                      setShowForm(!showForm);
                      handleUpdateTask(task);
                      setEditingTask(task.id);
                     
                  } else {
           
                    handleUpdateTask(task);
                      setEditingTask(task.id);
                    }

                        console.log("Tarea a editar:", editingTask);
                    }}
                >Editar</button>

                <button 
                  id="CompleteButton" 
                  onClick={() => handleUpdateTask({...task, complete: true})}
                >Hecho
                </button>
            </div>
            <button 
              id="DeleteButton" 
              onClick={() => handleDeleteTask(task.id)}
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
