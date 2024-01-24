// Calculador.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculador Component', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('clearMemory sets state to initial values', () => {
    const { container } = render(<Calculator />);
    fireEvent.click(screen.getByText('AC'));

    expect(container.querySelector('.display').textContent).toBe('0');
  });

  test('setOperation updates state for different operations', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('/'));    
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('='));

  });

  test('setDigits different digits', () => {
    
    render(<Calculator />);
    
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('9'));

  });

  test('Should perform multiplication in the mathematical calculation', () => {
    
    const { container } = render(<Calculator />);
    
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(container.querySelector('.display').textContent).toBe('6');

  });

  test('Should perform division in the mathematical calculation', () => {
    
    const { container } = render(<Calculator />);
    
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    expect(container.querySelector('.display').textContent).toBe('3');

  });

  test('Should perform minus in the mathematical calculation', () => {
    
    const { container } = render(<Calculator />);
    
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(container.querySelector('.display').textContent).toBe('6');

  });

  test('Should perform plus in the mathematical calculation', () => {
    
    const { container } = render(<Calculator />);
    
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('='));

    expect(container.querySelector('.display').textContent).toBe('11');

  });

  test('should show fraction number', () => {
    const { container } = render(<Calculator />);

    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('0'));

    expect(container.querySelector('.display').textContent).toBe('1.0');
  });

  test('Should throw an exception', () => {
    render(<Calculator />);
    let button = screen.getByText('=');
    button.innerHTML = 'force error';

    fireEvent.click(button)

    const spy = jest.spyOn(button, 'click').mockImplementation(() => {});

    expect(spy).toHaveBeenCalledWith(new Error('not implemented'));
    
    spy.mockRestore();
    //expect(() => fireEvent.click(button)).toHaveBeenCalledWith(new Error('not implemented'))
  });

});
