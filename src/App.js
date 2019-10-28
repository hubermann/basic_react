import React from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';

//test bootstrap component button
import { Button } from 'react-bootstrap';
// Importar Componentes
import Calculadora from './components/Calculadora'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="danger">Danger</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Calculadora />
      </header>
    </div>
  );
}

export default App;
