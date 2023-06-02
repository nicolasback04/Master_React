import logo from './logo.svg';
import './App.css';
import { FormularioComponente } from './components/FormularioComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <FormularioComponente />
      </header>
    </div>
  );
}

export default App;
