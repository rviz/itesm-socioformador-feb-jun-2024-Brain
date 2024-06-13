import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import MyComponent from './index';


// PRUEBAS HECHAS POR GABRIEL - A00835179
describe('MyComponent', () => {
  test('Renderiza el componente correctamente', () => {
    const { getByText } = render(<MyComponent cardName="General" feedback="1. **Retroalimentación General**: #Esta es una retroalimentación general.#" />);
    expect(getByText('Recomendaciones')).toBeInTheDocument();
  });
  
  test('Muestra correctamente el número y título de la recomendación', () => {
    const feedback = "1. **Consejo de Seguridad**: #Cierra tus puertas.#";
    const { getByText } = render(<MyComponent cardName="Seguridad" feedback={feedback} />);
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('Consejo de Seguridad')).toBeInTheDocument();
  });

  test('Aplica los colores correctos para la tarjeta de Vivienda', () => {
    const feedback = "1. **Consejo de Vivienda**: #Revisa la plomería.#";
    const { container } = render(<MyComponent cardName="Vivienda" feedback={feedback} />);
    fireEvent.mouseEnter(container.querySelector('.flip-card-front'));
    expect(container.querySelector('.flip-card-back')).toHaveClass('bg-[#ffbf77]');
  });

  test('Asigna los colores de texto y fondo correctos basados en el nombre de la tarjeta', () => {
    const feedback = "1. **Consejo de Seguridad**: #Mantente seguro.#";
    const { container } = render(<MyComponent cardName="Seguridad" feedback={feedback} />);
    const front = container.querySelector('.flip-card-front');
    expect(front).toHaveClass('text-[#50b6b6]');
  });

  test('Oculta el contenido de la recomendación al retirar el mouse', async () => {
    const feedback = "1. **Consejo de Salud**: #Come saludable.#";
    const { getByText, queryByText } = render(<MyComponent cardName="Salud" feedback={feedback} />);
    fireEvent.mouseEnter(getByText('Consejo de Salud'));
    fireEvent.mouseLeave(getByText('Consejo de Salud'));
    await waitFor(() => expect(queryByText('Come saludable')).not.toBeInTheDocument());
  });

  test('Renderiza múltiples recomendaciones correctamente', () => {
    const feedback = "1. **Consejo Uno**: #Contenido uno.# 2. **Consejo Dos**: #Contenido dos.#";
    const { getByText } = render(<MyComponent cardName="General" feedback={feedback} />);
    expect(getByText('Consejo Uno')).toBeInTheDocument();
    expect(getByText('Consejo Dos')).toBeInTheDocument();
  });

  test('Los colores de fondo y texto cambian basados en la categoría de la tarjeta', () => {
    const feedback = "1. **Consejo Ambiental**: #Recicla más.#";
    const { container } = render(<MyComponent cardName="Medio ambiente" feedback={feedback} />);
    const back = container.querySelector('.flip-card-back');
    expect(back).toHaveClass('bg-[#66e6b3]');
  });

  test('No muestra el contenido de la recomendación sin interacción', () => {
    const feedback = "1. **Consejo de Estilo de Vida**: #Camina diariamente.#";
    const { queryByText } = render(<MyComponent cardName="Equilibrio trabajo-vida" feedback={feedback} />);
    expect(queryByText('Camina diariamente')).not.toBeInTheDocument();
  });

  test('Limpia correctamente el estado de hover', () => {
    const feedback = "1. **Consejo de Limpieza**: #Limpia regularmente.#";
    const { getByText, queryByText } = render(<MyComponent cardName="General" feedback={feedback} />);
    fireEvent.mouseEnter(getByText('Consejo de Limpieza'));
    fireEvent.mouseLeave(getByText('Consejo de Limpieza'));
    expect(queryByText('Limpia regularmente')).not.toBeInTheDocument();
  });

  test('Maneja correctamente el texto de recomendación largo', () => {
    const longFeedback = "1. **Consejo Largo**: #" + "a".repeat(1000) + "#";
    const { getByText } = render(<MyComponent cardName="General" feedback={longFeedback} />);
    fireEvent.mouseEnter(getByText('Consejo Largo'));
    expect(getByText("a".repeat(1000))).toBeInTheDocument();
  });
});
