import React, { useState } from 'react';
import './Calculadora.css';
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton';

function Calculadora() {
  const [txtNumeros, setTxtNumeros] = useState('0')

  function adicionarNumero(numero) {
    setTxtNumeros(txtNumeros + numero)
  }


  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={txtNumeros}></Input>
        <div className='row'>
          <Button onClick={() => adicionarNumero('7')}>7</Button>
          <Button onClick={() => adicionarNumero('8')}>8</Button>
          <Button onClick={() => adicionarNumero('9')}>9</Button>
          <Button>/</Button>
        </div>
        <div className='row'>
          <Button onClick={() => adicionarNumero('4')}>4</Button>
          <Button onClick={() => adicionarNumero('5')}>5</Button>
          <Button onClick={() => adicionarNumero('6')}>6</Button>
          <Button>X</Button>
        </div>
        <div className='row'>
          <Button onClick={() => adicionarNumero('1')}>1</Button>
          <Button onClick={() => adicionarNumero('2')}>2</Button>
          <Button onClick={() => adicionarNumero('3')}>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>.</Button>
          <Button onClick={() => adicionarNumero('0')}>0</Button>
          <Button>=</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <ClearButton>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
