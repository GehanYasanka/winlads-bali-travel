import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import './App.css'
import { ToastContainer } from "react-toastify";



function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home />} />
     
      <Route path={'/*'} element={<Home />} />

    </Routes>
    <ToastContainer />
  </BrowserRouter>
  )
}

export default App
