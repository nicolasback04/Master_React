import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";
import { useState } from "react";

function App() {

  const [listadoState, setListadoState] = useState([]);
  return (
    <div className="layout">
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Pelis</h1>
        </header>

        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        <section className="content">

            {/*Listado de peliculas*/}
            <Listado listadoState={listadoState} setListadoState={setListadoState} />

        </section>

        <aside className="lateral">
            {/*Buscador*/}
            <Buscador />

            {/*Crear*/}
            <Crear setListadoState={setListadoState} />
        </aside>

        <footer className="footer">
            &copy; Master en JavaScript ES12 y TypeScript - <a href="/#">Página web</a>
        </footer>

    </div>
  );
}

export default App;
