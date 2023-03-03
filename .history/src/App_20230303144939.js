import React from 'react'
import { Rutas } from './Router/Routes';
import { Header } from './ui/components/Header';
import './App.css'
import { Footer } from './ui/components/Footer';
const App = () => {
  return (
    <>
      <div className="contenedor-completo">
        <Header></Header>
        <Rutas></Rutas>
        <div className="separar"></div>
       <Footer></Footer>

      </div>
    </>
  )
}
export default App;
