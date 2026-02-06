// import { ProtectedRoute } from "../components/ProtectedRoute"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { About } from "../views/AboutUs"
import {Login} from "../views/Login"
import {ErrorPage} from "../views/ErrorPage"
import {Register} from "../views/Register"
import { ProtectedRoute } from "../components/protectedRoute.jsx"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/registrarme" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }
