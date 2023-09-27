// import { useState, useEffect } from 'react'
import './App.css'
import Home from './screens/home'
import Header from './components/Header'
import {  Route, Routes, } from 'react-router-dom';
// import api from './api/'


function App() {

  
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default App;
