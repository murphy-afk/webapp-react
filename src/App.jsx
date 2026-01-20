import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import AppLayout from './layouts/appLayout';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import MovieIndex from './pages/MovieIndex';

function App() {
  const appName = 'MoviesApp'
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout appName={appName} />}>
            <Route element={<Home />} path="/" />
            <Route element={<MovieIndex />} path='/movies'/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  
  )
}

export default App
