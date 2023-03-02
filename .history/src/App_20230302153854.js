import React from 'react'
import { Rutas } from './Router/Routes';
import { Header } from './ui/components/Header';
import './App.css'
 const App = () => {
  return (
    <>
    <div className="contenedor-completo">
    <Header></Header>
    <Rutas></Rutas>
    <div className='final'><h2>Hola</h2></div>
    </div>
    </>
  )
}
export default App;
