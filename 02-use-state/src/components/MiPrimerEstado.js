import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    /*
    //Problemática

    let nombre = "Saul Robles";

    const cambiarNombre = e => {
        nombre = "Name user"
    }
    */

    //Solución con useState
    const [ nombre, setNombre ] = useState("Name User");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

  return (
    <div>
        <h3>Componente: Mi Primer Estado</h3>
        <strong className="label">
            {nombre}
        </strong>
        &nbsp;

        <button onClick={ e => cambiarNombre(e, "Alexander") }>Cambiar nombre por Alex</button>

        &nbsp;
        <input type="text" onKeyUp={ e=> cambiarNombre(e, e.target.value) } placeholder='cambiar el nombre' />

    </div>
  )
}
