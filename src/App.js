import './App.css';
import logo from './imagenes/educacion.png';
import Boton from './components/Boton.js';
import Pantalla from './components/Pantalla.js';
import BotonClear from './components/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const [flag, setFlag] = useState(0);

  const agregarInput = val => {
    if (input === 'Infinity' || flag === 1) {
      setInput(val);
      setFlag(0);
    } else {
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    if (input) {
      const expr = input.replace(/[+\-*/.]$/,"");
      if (!expr) return;
      try {
        const result = evaluate(expr);
        setInput(result.toString());
      } catch (error) {
        console.error(error);
        setInput('Error');
        setFlag(1);
      }
    }
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
      <img
      src={logo}
      className='logo'
      alt='logo'
      />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>  
        </div>   
      </div>
    </div>
  );
}

export default App;
