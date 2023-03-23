import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
// import PokeId from './pages/PokeDetail'
import PokeDetail from './pages/PokeDetail'
import PokemonProvider from './context/PokemonContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/:pokeId',
    element: <PokeDetail/>
  }
    
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <PokemonProvider>
    <RouterProvider router = {router}/>
  </PokemonProvider>
)


