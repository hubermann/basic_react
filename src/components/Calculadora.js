import React from 'react'
import '../assets/Calculadora.css';
import { Button } from 'react-bootstrap';

class Calculadora extends React.Component{
  render(){
    return (
      <div className="Calculadora">
        <h2>
          Soy el modulo Calculadora dentro de ./src/components/Calculadora.js
        </h2>
        <p><Button variant="danger">Danger</Button></p>
      </div>
    )
  }
}


export default Calculadora;
