function AlertBox({tipo, mostrarIcono=false}){
    if(tipo==="info"){
        if(mostrarIcono==true){
            return(
                    <>
                    <p>{tipo}</p>
                    <p>ℹ️</p>
                    </>
                );
        } else{
             return(
                    <>
                    <P>{tipo}</P>
                    </>
                );
        }
    } else if(tipo==="error"){
        if(mostrarIcono==true){
            return(
                    <>
                    <p>{tipo}</p>
                    <p>❌</p>
                    </>
                );
        } else{
             return(
                    <>
                    <p>{tipo}</p>
                    </>
                );
        }
    } else if(tipo==="exito"){
        if(mostrarIcono==true){
            return(
                    <>
                    <p>{tipo}</p>
                    <p>✅</p>
                    </>
                );
        } else{
             return(
                    <>
                    <p>{tipo}</p>
                    </>
                );
        }
    }
    
}

export default AlertBox;