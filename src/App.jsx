import './App.css'
import AppLayout from './layouts/appLayout';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import MovieIndex from './pages/MovieIndex';
import MovieDetails from './pages/MovieDetails';

function App() {
  const appName = 'MoviesApp'
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout appName={appName} />}>
            <Route element={<Home />} path="/" />
            <Route element={<MovieIndex />} path='/movies'/>
            <Route element={<MovieDetails />} path={'/movies/:id'} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  
  )
}

export default App
