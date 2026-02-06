import '../styles/views/register.css'
import { Navbar } from "../components/header";
import { useState } from "react";
import { useAuth } from '../context/authContext.jsx';

const Register = () => {
  const [formDataUser, setFormDataUser] = useState({
    email: "",
    password: "",
    user: ""
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { register } = useAuth(); // => hook para usar el contexto de autenticación

  const handleSubmit = async (e) => {
    e.preventDefault(); // evita que se recargue la página

    // data del usuario logueado
    console.log("Email:", formDataUser);
    try{

      await register(formDataUser.email, formDataUser.password);
    console.log("Usuario creado:");
    setError(null); // Limpiar errores previos si la creación fue exitosa
    setSuccess("Usuario creado exitosamente");

    }
    catch(error){

      console.error("Error al crear el usuario:", error);

      setSuccess(null);

      let mensaje = "Error al crear el usuario";

      //manejo de los distintos tipos de errores
      
      if (error.code === "auth/invalid-email") {
      mensaje = "El email ingresado no es válido"

    } else if (error.code === "auth/email-already-in-use") {
      mensaje = "Este email ya está registrado"

    } else if (error.code === "auth/weak-password") {
      mensaje = "La contraseña debe tener al menos 6 caracteres"

    } else if (error.code === "auth/missing-email") {
      mensaje = "Tenés que ingresar un email"
    }
    setError(mensaje);
  }
};

  return (
    <>
      <Navbar />
      <div id="register">
         <div className='register-container'>
            <h2>Registrarse</h2>

            <form onSubmit={handleSubmit}>
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
              
              <div id="register-button"><button type="submit">Registrarme</button></div>
              {error && <p style={{ color: "red", marginTop: "10px", marginBottom: "10px" }}>{error}</p>}
              {success && <p style={{ color: "green", marginTop: "10px", marginBottom: "10px" }}>{success}</p>}
            </form>
        </div>
      </div>
     
  </>
  );
}

export { Register };