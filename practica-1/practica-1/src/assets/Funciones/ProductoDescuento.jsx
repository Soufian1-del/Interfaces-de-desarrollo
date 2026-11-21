function ProductoDescuento({nombre, precio, descuento}){
    function Calculo(precioBase, porcentaje){
        return precioBase * (100-porcentaje)/100;
    }
    
    return(
        <>
        <p>producto: {nombre}</p>
        <p>precio: {precio}</p>
        <p>descuento: {descuento}</p>
        <p>precio final: {Calculo(precio, descuento)}</p>
        </>
    )
}
export default ProductoDescuento;