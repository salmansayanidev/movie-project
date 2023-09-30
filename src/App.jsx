// import { useState, useEffect } from 'react'
import './App.css'
import Home from './screens/home'
import Header from './components/Header'
import {  Route, Routes, } from 'react-router-dom';
import SingleMovie from './components/SingleMovie';
import PopularMovies from './components/PopularMovies'
import NowPlaying from './components/NowPlaying';
import UpcomingMovies from './components/UpcomingMovies';
import TopRatedMovies from './components/TopRatedMovies';
import PopularPerson from './components/PopularPerson';
import SinglePerson from './components/SinglePerson';

// import api from './api/'


function App() {

  
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<PopularMovies />} />
          <Route path="/movie/now-playing" element={<NowPlaying />} />
          <Route path="/movie/upcoming" element={<UpcomingMovies />} />
          <Route path="/movie/top-rated" element={<TopRatedMovies />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='/person' element={<PopularPerson />} />
          <Route path='/person/:id' element={<SinglePerson />} />
        </Routes>
    </>
  )
}

export default App;
