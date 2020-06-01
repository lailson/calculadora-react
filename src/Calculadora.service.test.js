import React from 'react'
import ReactDOM from 'react-dom'
import CalculadoraService from './Calculadora.service'

describe('Teste do CalculadoraService', () => {
    const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService()

    it('deve garantir que 1 + 4 = 5', () => {
        let resultado = calcular(1, 4, SOMA)
        expect(resultado).toEqual(5)
    })

    it('deve garantir que 1 - 4 = -3', () => {
        let resultado = calcular(1, 4, SUBTRACAO)
        expect(resultado).toEqual(-3)
    })

    it('deve garantir que 1 / 4 = 0.25', () => {
        let resultado = calcular(1, 4, DIVISAO)
        expect(resultado).toEqual(0.25)
    })

    it('deve garantir que 1 * 4 = 4', () => {
        let resultado = calcular(1, 4, MULTIPLICACAO)
        expect(resultado).toEqual(4)
    })

    it('deve retornar 0 para operação inválida', () => {
        let operacaoInvalida = calcular(1, 4, '%')
        expect(operacaoInvalida).toEqual(0)
    })
})