import React from 'react'
import { Rutas } from './Router/Routes';
import { Header } from './ui/components/Header';
import './App.css'
import { Footer } from './ui/components/Footer';
import { Caparazon } from './ui/components/Caparazon';
import { ContenedorPrincipal } from './ui/components/ContenedorPrincipal';

export const App2 = () => {
  return (
    <>
      <Caparazon>
        <Header></Header>
        <ContenedorPrincipal> {/*El contenedor principal a su vez lleva sus hijos dos elementos, el footer que le pusimos absolute para ubicarlo de ultimo y el MainCuerpo que tienes las rutas */}
          <Rutas></Rutas>{/*Este MainCuerpo tiene las rutas de la aplicacion, es el main de la pagina y lo que va a cambiar dependiendo donde estemos */}
          <div className='mb-5 pb-5'></div>
      <h1>Hola</h1>
          <Footer></Footer>  {/*Este es el footer que utilizamos para el pie de pagina, tiene posicion absolute como dije anteriormnete */}
        </ContenedorPrincipal>


      </Caparazon>
    </>
  )
}




