import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HeroSectionBiz from './index'; // Asume que este componente contiene el botón save

// PRUEBAS HECHAS POR FAUSTO - A01412004
describe('Index Component', () => {
  test('Checar si existe el texto de la página de empresas', () => {
    render(<HeroSectionBiz />);
    const textoHomePageEmpresas = screen.getByText('Mejora el bienestar de tu organización');

    expect(textoHomePageEmpresas).toBeInTheDocument();
  });
  
  test('Checar si existe la descripción de la página de empresas', () => {
    render(<HeroSectionBiz />);
    const descripcionHomePageEmpresas = screen.getByText('Para una mejor colaboración, hay que contar con una buena calidad de vida. Con una evaluación que diagnosticará y retroalimentará tus áreas de crecimiento personal.');

    expect(descripcionHomePageEmpresas).toBeInTheDocument();
  });
  
  test('Confirma que el botón es clickeable', () => {
    render(<HeroSectionBiz />);
    const button = screen.getByRole('button');
    // Simula el clic en el botón
    fireEvent.click(button);
    
    expect(button).toBeEnabled(); // Comprueba que el botón está habilitado
  });
});
