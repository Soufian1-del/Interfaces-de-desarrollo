import { useState } from 'react'

import './App.css'
import Producto from './assets/Producto'
import BarraProgreso from './assets/BarraProgreso'

function App() {

  return (
    <>
      <Producto nombre="queso" precio="69" disponible={ false }></Producto>
      <BarraProgreso porcentaje={79} />
    </>
  )
}

export default App
      