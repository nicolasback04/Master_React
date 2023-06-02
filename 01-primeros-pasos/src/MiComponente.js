//1 Importar modulos de react / dependencias
import React from "react";

//Funcion del componente
const MiComponente = () => {

    let nombre = "Name";
    let web = "nameweb.es"

    let usuario = {
        nombre: "Azul",
        apellidos: "España",
        web: "azuulspaweb.es"
    };

    return (
        <div className="mi-componente">
            <h2>Componente creado</h2>
            <h3>Datos del usuario: </h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellidos: <strong>{usuario.apellidos}</strong></li>
                <li>Web: <strong>{usuario.web}</strong></li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
            
        </div>
    
    );
};

//Export
export default MiComponente;