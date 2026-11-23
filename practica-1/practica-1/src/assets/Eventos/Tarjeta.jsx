function Tarjeta({nombre, precio, cantidad}){
    const info = document.getElementById("info");
    function onMouseEnter() {
        info.innerHTML = `<span> Precio: ` + precio + `€. Quedan ` + cantidad  + ` unidades</span>`
    }
    function onMouseLeave() {
        info.innerHTML = ''
    }
    return(
        <>
        <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{nombre}</p>
        <p id="info"></p>
        </>
    );
}
export default Tarjeta