import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al botón! "+nombre);
    }

    const hasDadoDobleClick = (e, nombre) => {
        alert("Has dado doble click!");
    }

    const hasEntrado = (e, accion) => {
        alert(`Has ${accion} entrado a la caja con el mouse`);
    }

    const estasDentro = e => {
        console.log("Estas dentro del Input, ingresa tu nombre");
    }

    const estasFuera = e => {
        console.log("Estas fuera del Input");
    }

  return (
    <div>
        <h1>Evento en React</h1>

        <p>
            {/*Evento Click*/}
            <button onClick={e => hasDadoClick(e, "Alex") }>Click!</button>
        </p>
        
        <p>
            {/*Evento Doble Click*/}
            <button onDoubleClick={e => hasDadoDobleClick(e, "Alex") }>Doble Click!</button>
        </p>
        
        <div id="caja" 
            onMouseEnter={ e=> hasEntrado(e, "entrado") }
            onMouseLeave={ e=> hasEntrado(e, "salido") }
        >
            {/*Evento onMouseEnter onMouseLeave*/}
            Pasa por encima
        </div>

        <p>
            {/*Evento focus y blur*/}
            <input  type="text" 
                    onFocus={ estasDentro }     
                    onBlur={ estasFuera }
                    placeholder="Introduce tu nombre..."/>
        </p>
    </div>
  )
}
