import '../styles/views/home.css'
import { Navbar } from "../components/header";
import { useState } from "react";
import { useAuth } from '../context/authContext.jsx';

const Login = () => {
    const [formDataUser, setFormDataUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

   const { login } = useAuth();
   
    const handleSubmit = async (e) => {
    e.preventDefault(); // evita que se recargue la página
    
    try{
      await login(formDataUser.email, formDataUser.password);
      setError(null); // Limpiar errores previos si la creación fue exitosa
      setSuccess("Usuario logueado exitosamente");
    }
    catch(error){
      console.error("Usuario o contraseña incorrectos:", error);
      setSuccess(null);
      setError("Error al loguearte");
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "400px", margin: "40px auto" }}>
        <h2>Iniciar Sesion</h2>

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

        <button type="submit">Ingresar</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </div>
  </>
  );
}

export { Login };