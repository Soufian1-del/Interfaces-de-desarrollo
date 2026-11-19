import { useState } from 'react'

import './App.css'
import Producto from './assets/Producto'
import BarraProgreso from './assets/BarraProgreso'
import AlertBox from './assets/AlertBox'
import SaludoPersonalizado from './assets/SaludoPersonalizado'

function App() {

  return (
    <div>
      <div>
        <h2>saludo personalizado</h2>
        <SaludoPersonalizado nombre="Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso"/>
      </div>
      <div>
        <h2>ejercicio 1</h2>
        <Producto nombre="queso" precio="69" disponible={ false }></Producto>
      </div>
      <div className='pt-10 pb-10'>
        <h2>ejercicio 2</h2>
        <BarraProgreso porcentaje={79} />
      </div>
      <div>
        <h2>ejercicio 3</h2>
        <div className=' border-solid border-2'>
          <AlertBox tipo="exito" mostrarIcono={ true}></AlertBox>
        </div>
      </div>
    </div>
  )
}

export default App
      