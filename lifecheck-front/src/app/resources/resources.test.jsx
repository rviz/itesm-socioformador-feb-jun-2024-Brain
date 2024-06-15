import React from 'react';
import { render, screen } from '@testing-library/react';
import BigBox from './page';

// PRUEBAS HECHAS POR RODRIGO A00829180
describe('BigBox Component', () => {
    test('debe renderizar el título principal correctamente', () => {
        render(<BigBox />);
        expect(screen.getByText('La Misión de Lifecheck')).toBeInTheDocument();
    });

    test('debe renderizar textos descriptivos que contengan palabras clave', () => {
        render(<BigBox />);
        expect(screen.getByText(/Índice de Desarrollo Humano/i)).toBeInTheDocument();
        expect(screen.getByText(/calidad de vida/i)).toBeInTheDocument();
    });

    test('debe renderizar categorías con los estilos correctos', () => {
        render(<BigBox />);
        expect(screen.getByText('salud')).toHaveClass('text-red-500');
        expect(screen.getByText('educación')).toHaveClass('text-yellow-500');
    });
});
