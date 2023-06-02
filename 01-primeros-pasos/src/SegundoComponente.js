import React from 'react'

export const SegundoComponente = () => {

const libros = ["Harry Potter", "Game of Thrones", "Clean Code"];
//const libros = [];

  return (
    <div>
        <h1>Listado de libros</h1>

        {libros.length >= 1 ? 
            (<ul>
                {
                    libros.map((libro, indice) => {
                        return <li key={indice}>{libro}</li>
                    })
                }
            </ul>)
            : <p>No hay libros</p>
        }
    </div>
  )
}
