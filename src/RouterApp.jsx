import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
// import Maintence from './pages/Maintence'
import './App.css'

function RouterApp() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='*' element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default RouterApp
