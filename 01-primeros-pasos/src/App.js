import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  const ficha_medica={
    altura: "175cm",
    grupo: "A+",
    estado:"bueno"
  }

  const numero = 123465;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react!
        </p>

        {/*cargar mi primer componente*/}
        <div>
        <hr/>
        <EventosComponente/>
        <hr/>
        <TercerComponente
        nombre="Nicolas"
        apellido="Peñafiel"
        ficha={ficha_medica}
        />
        <hr/>
        <SegundoComponente/>
        <hr/>
        <MiComponente/>  
        </div>
        
      </header>

    </div>
  );
}

export default App;
