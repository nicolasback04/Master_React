import React, {useEffect, useState} from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [ usuario, setUsuario ] = useState("Peñafiel");
    const [ fecha, setFecha ] = useState("27-06-2004");
    const [ contador, setContador ] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value);
    };

    const cambiarFecha = e => {
        setFecha(Date.now());
    }

    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent")
    }, []);

    useEffect(() => {

        setContador(contador+1);
        console.log("Has modificado el usuario: " + contador);

    }, [fecha, usuario]);

  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>

        <strong>{usuario}</strong>
        <strong className={ contador > 10 ? 'label label-green' : 'label'}>{fecha}</strong>

        <p>
            <input  type="text"
                    onChange={ modUsuario }
                    placeholder="Cambiar el nombre"
            />

            <button onClick={cambiarFecha}>Cambiar fecha</button>
        </p>
        
        { usuario == "NICOLAS" && <AvisoComponent />}
    </div>
  )
}
