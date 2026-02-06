// import { ProtectedRoute } from "../components/ProtectedRoute"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { About } from "../views/AboutUs"
import {Login} from "../views/Login"
import {ErrorPage} from "../views/ErrorPage"
import {Register} from "../views/Register"
import { ProtectedRoute } from "../components/protectedRoute.jsx"
import { PublicRoute } from "../components/publicRoute.jsx"
const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/*" element={<ErrorPage/>} />


      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }
