import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterApp from './RouterApp.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'
import './custom.scss';
import "bootstrap-icons/font/bootstrap-icons.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
