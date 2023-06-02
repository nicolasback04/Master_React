import React, { useState } from 'react'
import { guardarEnStorage } from '../helpers/guardarEnStorage';

export const Crear = (setListadoState) => {

  const tituloComponente = "Añadir peliculas";

  const [ peliState, setPeliState ] = useState({
      titulo: '',
      descripcion: ''
  });

  const{ titulo, descripcion } = peliState;

  const conseguirDatosForm = e => {
    e.preventDefault();

    //Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //Crear objeto de la pelicula a guardar
    let peli = {
        id: new Date().getTime(),
        titulo,
        descripcion,
        descripcion
    };

    //Guardar estado
    setPeliState(peli);

        //Actiualizar el estadodel listado principal
        setListadoState(elementos =>{
          return [...elementos, peli];
        })

    //Guardar en el almacenamieto local
    guardarEnStorage("pelis", peli);
    

  }

  return (
    <div className="add">
                <h3 className="title">{tituloComponente}</h3>

                <strong>
                  {(titulo && descripcion) && "Has creado la pelicula: " + titulo}
                </strong>

                <form className="formulario" onSubmit={conseguirDatosForm}>
                    <input  type="text" 
                            id="titulo"
                            name="titulo"
                            placeholder="Titulo" />

                    <textarea 
                            id="descripcion"
                            name="descripcion"
                            placeholder="Descripción"></textarea>

                    <input  type="submit" 
                            id="save"
                            value="Guardar"/>
                </form>
    
    </div>
  )
}
