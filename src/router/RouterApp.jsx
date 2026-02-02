// import { ProtectedRoute } from "../components/ProtectedRoute"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { About } from "../views/AboutUs"
import {Login} from "../views/Login"
import {Register} from "../views/Register"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/registrarme" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }
