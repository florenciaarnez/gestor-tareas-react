import { useState, useEffect } from "react";
import '../styles/views/home.css'
import { Navbar } from "../components/header";
import { getTasksUser, addTask, updateTask, deleteTask } from "../services/apiFirebase.js";

const Home = () => {

  return (
    <>
      <Navbar />
      <div className="page Home">
          {/* FORM IZQUIERDO */}
          <form className="taskForm">
            <h3>Nueva tarea</h3>

            <input type="text" placeholder="Título" />
            <textarea placeholder="Descripción"></textarea>
            <p>fecha limite: <input type="date" /></p>

            <button type="submit">Agregar</button>
          </form>
        <div id="tasksContainer">
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


        </div>
      </div>
    </>
  );
};

export { Home };
