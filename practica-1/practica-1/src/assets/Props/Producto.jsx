function Producto( { nombre, precio, disponible = false} ) {
  if (disponible) {
    return (
      <>
        <p style={{ color: "green" }}>{nombre} En stock</p>
        <p>{precio}</p>
      </>
    );
  } else {
    return (
      <>
        <p style={{ color: "red" }}>{nombre} Agotado</p>
      </>
    );
  }
}
export default Producto;
