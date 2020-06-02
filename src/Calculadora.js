import React, { useState } from 'react';
import './Calculadora.css';
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton';
import CalculadoraService from './Calculadora.service'

function Calculadora() {
  const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService()
  
  const [txtNumeros, setTxtNumeros] = useState('0')
  const [numero1, setNumero1] = useState('0')
  const [numero2, setNumero2] = useState(null)
  const [operacao, setOperacao] = useState(null)

  function adicionarNumero(numero) {
    let resultado
    if (operacao === null) {
      resultado = concatenarNumero(numero1, numero)
      setNumero1(resultado)
    } else {
      resultado = concatenarNumero(numero2, numero)
      setNumero2(resultado)
    }
    setTxtNumeros(resultado)
  }

  function definirOperacao(op) {
    // apenas define a operação caso ela não exista
    if (operacao === null){
      setOperacao(op)
      return 
    }
    //caso operação estiver defnida e número 2 selecionado, realiza o cálculo da operação
    if (numero2 !== null) {
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao)
      setOperacao(op)
      setNumero1(resultado.toString())
      setNumero2(null)
      setTxtNumeros(resultado.toString())
    }
  }

  function acaoCalcular() {
    if (numero2 === null) {
      return
    }
    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao)
    setTxtNumeros(resultado)
  }

  function limpar() {
    setTxtNumeros('0')
    setNumero1('0')
    setNumero2(null)
    setOperacao(null)
  }


  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input data-testid="txtNumeros" input={txtNumeros}></Input>
        <div className='row'>
          <Button onClick={() => adicionarNumero('7')}>7</Button>
          <Button onClick={() => adicionarNumero('8')}>8</Button>
          <Button onClick={() => adicionarNumero('9')}>9</Button>
          <Button onClick={() => definirOperacao('/')}>/</Button>
        </div>
        <div className='row'>
          <Button onClick={() => adicionarNumero('4')}>4</Button>
          <Button onClick={() => adicionarNumero('5')}>5</Button>
          <Button onClick={() => adicionarNumero('6')}>6</Button>
          <Button onClick={() => definirOperacao('*')}>X</Button>
        </div>
        <div className='row'>
          <Button onClick={() => adicionarNumero('1')}>1</Button>
          <Button onClick={() => adicionarNumero('2')}>2</Button>
          <Button onClick={() => adicionarNumero('3')}>3</Button>
          <Button onClick={() => definirOperacao('+')}>+</Button>
        </div>
        <div className='row'>
          <Button onClick={() => adicionarNumero('.')}>.</Button>
          <Button onClick={() => adicionarNumero('0')}>0</Button>
          <Button onClick={acaoCalcular}>=</Button>
          <Button onClick={() => definirOperacao ('-')}>-</Button>
        </div>
        <div className='row'>
          <ClearButton onClick={limpar}>Apagar</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
