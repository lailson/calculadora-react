import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Calculadora from './Calculadora'

describe('Calculadora', () => {
    it('deve limpar o campos de numeros', () => {
        const { getByTestId, getByText } =  render(<Calculadora />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('Apagar'))
        const input = getByTestId('txtNumeros')
        expect(input.textContent).toEqual('0')
    })
      
    it('deve somar  2 + 3 e obter 5', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('+'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('txtNumeros').textContent).toEqual('5')
    })

    it('deve subtrair  5 - 3 e obter 2', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('5'))
        fireEvent.click(getByText('-'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('txtNumeros').textContent).toEqual('2')
    })

    it('deve dividir  6 - 3 e obter 2', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('6'))
        fireEvent.click(getByText('/'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('txtNumeros').textContent).toEqual('2')
    })

    it('deve multiplicar  2 x 3 e obter 6', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('X'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('txtNumeros').textContent).toEqual('6')
    })

    it('deve somar  2.5 + 3 e obter 5.5', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('.'))
        fireEvent.click(getByText('5'))
        fireEvent.click(getByText('+'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('txtNumeros').textContent).toEqual('5.5')
    })

    it('deve somar  2.52 + 3 e obter 5.5 apertando mais de uma vez no ponto', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('.'))
        fireEvent.click(getByText('5'))
        fireEvent.click(getByText('.'))
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('+'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('txtNumeros').textContent).toEqual('5.52')
    })
    
})

