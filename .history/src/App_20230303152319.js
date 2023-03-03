import React from 'react'
import { Rutas } from './Router/Routes';
import { Header } from './ui/components/Header';
import './App.css'
import { Footer } from './ui/components/Footer';
const App = () => {
  return (
    <>
    <Header></Header>
      <div className="contenedor-completo">

        <Rutas></Rutas>
        <h1>Hola</h1>
       <Footer></Footer>

      </div>
    </>
  )
}
export default App;
