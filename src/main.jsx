import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/views/index.css'
import {RouterApp} from './router/RouterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp/>
  </StrictMode>
)
