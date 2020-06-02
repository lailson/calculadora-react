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
        expect(input).toHaveValue('0')
    })
      
})

