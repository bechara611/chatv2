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
   
     <Footer></Footer>
 
    </div>
    </div>

    </>
  )
}

const App2 = () => {
  return (
    <>
    <div className="contenedor-cien">
    <Header></Header>
    <div className="contenedor-completo">
      
      <Rutas></Rutas>
   
     <Footer></Footer>
 
    </div>
    </div>

    </>
  )
}


<Caparazon>
<Header></Header>
<ContenedorPrincipal> {/*El contenedor principal a su vez lleva sus hijos dos elementos, el footer que le pusimos absolute para ubicarlo de ultimo y el MainCuerpo que tienes las rutas */}
  <MainCuerpo></MainCuerpo>{/*Este MainCuerpo tiene las rutas de la aplicacion, es el main de la pagina y lo que va a cambiar dependiendo donde estemos */}


  <Footer></Footer>  {/*Este es el footer que utilizamos para el pie de pagina, tiene posicion absolute como dije anteriormnete */}
</ContenedorPrincipal>


</Caparazon>
export default App;
