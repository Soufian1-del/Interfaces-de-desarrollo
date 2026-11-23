
import './App.css'
import Producto from './assets/Props/Producto'
import BarraProgreso from './assets/Props/BarraProgreso'
import AlertBox from './assets/Props/AlertBox'
import SaludoPersonalizado from './assets/Saludo/SaludoPersonalizado'
import ProductoDescuento from './assets/Funciones/ProductoDescuento'
import Pedido from './assets/Funciones/Pedido'
import Tarjeta from './assets/Eventos/Tarjeta'

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
      <div>
        <h2>Ejercicio 1-funciones</h2>
        <ProductoDescuento nombre="monitor" precio={200} descuento={10}/>
      </div>
      <div>
        <h2>Ejercicio 3-funciones</h2>
        <Pedido producto="libro" cantidad={3} precio={20}/>
      </div>
      <div>
        <h2>Ejercicio-eventos</h2>
        <Tarjeta nombre="atun" precio={15} cantidad={10000}/>
      </div>
    </div>
  )
}

export default App
      