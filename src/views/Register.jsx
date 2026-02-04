import { Navbar } from "../components/header";
import '../styles/views/home.css'
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth } from "../config/firebase.js";

const Register = () => {
  const [formDataUser, setFormDataUser] = useState({
    email: "",
    password: "",
    user: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que se recargue la página

    // Acá ves lo que capturó el formulario
    console.log("Email:", formDataUser);
    createUserWithEmailAndPassword(auth, formDataUser.email, formDataUser.password)
    
  };

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "400px", margin: "40px auto" }}>
        <h2>Registrarse</h2>

      <form onSubmit={handleSubmit}>
         <div>
          <label>Nombre de Usuario</label>
          <input
            type="text"
            name="user"
            value={formDataUser.user}
            onChange={(e) => setFormDataUser({ ...formDataUser, user: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formDataUser.email}
            onChange={(e) => setFormDataUser({ ...formDataUser, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={formDataUser.password}
            onChange={(e) => setFormDataUser({ ...formDataUser, password: e.target.value })}
            required
          />
        </div>

        <button type="submit">Registrarme</button>
      </form>
    </div>
  </>
  );
}

export { Register };