function Pedido({producto, cantidad, precio}){
    function calcularTotal(cantidad, precio){
        return cantidad * precio;
    }
    
    return(
        <>
        <p>Producto= {producto}</p>
        <p>Cantidad= {cantidad}</p>
        <p>Precio= {precio}</p>
        <p>Total= {calcularTotal(cantidad, precio)}</p>
        </>
    )
}
export default Pedido;