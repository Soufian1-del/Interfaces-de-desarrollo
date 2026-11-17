import { useState } from 'react'

import './App.css'
import Producto from './assets/Producto'
import BarraProgreso from './assets/BarraProgreso'
import AlertBox from './assets/AlertBox'

function App() {

  return (
    <>
      <Producto nombre="queso" precio="69" disponible={ false }></Producto>
      <BarraProgreso porcentaje={79} />
      <AlertBox tipo="exito" mostrarIcono={ true}></AlertBox>
    </>
  )
}

export default App
      