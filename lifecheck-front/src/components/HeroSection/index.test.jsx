import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HeroSection from './index'; 

jest.mock('@/src/components/ui/wavy-background', () => {
    return {
        WavyBackground: ({ children, className }) => (
        <div data-testid="wavy-background" className={className}>{children}</div>
        )};
    });

// PRUEBAS HECHAS POR RODRIGO A00829180
describe('Index Component', () => {
    test('Checar si existe el texto del home de la página de inicial', () => {
        render(<HeroSection />);
        const textoHomePageEmpresas = screen.getByText('Descubre y mejora tu calidad de vida con nuestro análisis');
        expect(textoHomePageEmpresas).toBeInTheDocument();
    });

    test('debe renderizar el componente WavyBackground', () => {
        render(<HeroSection />);
        const wavyBackground = screen.getByTestId('wavy-background');
        expect(wavyBackground).toBeInTheDocument();
    });
    
    // PRUEBA HECHA POR FAUSTO - A01412004
    test('debe aplicar los estilos de texto correctamente', () => {
        render(<HeroSection />);
        const mainText = screen.getByText('Descubre y mejora tu calidad de vida con nuestro análisis');
        const secondaryText = screen.getByText('Responde las diferentes categorias para analizar tu calidad de vida');

        expect(mainText).toHaveClass('text-2xl md:text-4xl lg:text-6xl text-black font-bold inter-var text-center');
        expect(secondaryText).toHaveClass('text-base md:text-lg text-black font-semibold inter-var text-center');
    });
});