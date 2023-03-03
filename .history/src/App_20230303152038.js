import React from 'react'
import { Rutas } from './Router/Routes';
import { Header } from './ui/components/Header';
import './App.css'
import { Footer } from './ui/components/Footer';
const App = () => {
  return (
    <>
      <div className="contenedor-header">
        <Header></Header>
      </div>
      <Rutas></Rutas>
      <Footer></Footer>

    </>
  )
}
export default App;
