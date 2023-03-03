import React from 'react'
import { Rutas } from './Router/Routes';
import { Header } from './ui/components/Header';
import './App.css'
import { Footer } from './ui/components/Footer';
const App = () => {
  return (
    <>
    <div className="contenedor-cien">
    <Header></Header>
    <div className="contenedor-completo">
      
      <Rutas></Rutas>
      <h1>h</h1>
     <Footer></Footer>
 
    </div>
    </div>

    </>
  )
}
export default App;
