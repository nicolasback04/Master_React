import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        //Cuando el componente se monta
        alert("El componente AvisoComponet está montado")

        //Cuando el componente se desmonta
        return() => {
            alert("COMPONENTE DESMONTADO")
        }

    }, []); //Se ejecuta una vez porque se le pasa el array vacío

  return (
    <div>
        <hr/>
        <h3>Hola</h3>
        <button onClick={ e => {
            alert("Bienvenido")
        }}>Mostrar alerta</button>
    </div>
  )
}
