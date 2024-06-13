import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Evaluation from './page'; // Asegúrate de que la ruta al componente es correcta


// PRUEBAS HECHAS POR FAUSTO - A01412004
const mockRedirect = jest.fn();
jest.mock('next/navigation', () => ({
  redirect: () => mockRedirect() 
}));

jest.mock('@/src/services/user', () => ({
    getUser: jest.fn().mockResolvedValue({ user: null })
  }));
describe('Evaluation', () => {
  test('Verificar que se hace la navegación correctamente', () => {
    
    render(<Evaluation />);
    expect(mockRedirect).toHaveBeenCalled();
  });

  test.skip('Verificar que se hace la navegación correctamente con un user dado', () => {
    jest.mock('@/src/services/user', () => ({
        getUser: jest.fn().mockResolvedValue({ user: { id: 'auth0|66634d8fe3dee57435b90652' } }) 
      }));
    render(<Evaluation />);
    expect(mockRedirect).not.toHaveBeenCalled();
  });
});
