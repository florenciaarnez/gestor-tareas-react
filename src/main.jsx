import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/views/index.css'
import {RouterApp} from './router/RouterApp.jsx'
import { AuthProvider } from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterApp/>
    </AuthProvider>
  </StrictMode>
)
