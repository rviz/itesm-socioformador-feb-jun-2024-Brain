import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MyComponent from "./index"; // Asegúrate de que la ruta al componente es correcta

// PRUEBAS HECHAS POR FAUSTO - A01412004
describe("MyComponent", () => {
  test('Verifica que el ícono de Academia se renderiza cuando la categoría es "Educación"', () => {
    render(
      <MyComponent
        cardName="Educación"
        showedCategory="Educación"
        littleDown={false}
        toggleVisibility={() => {}}
        checkValue={0}
      />,
    );
    const academicCapIcon = screen.getByTestId("AcademicCapIcon");
    expect(academicCapIcon).toBeInTheDocument();
  });

  test('Verifica que el botón es funcional y llama a la función toggleVisibility con "Educación" como argumento al ser clickeado', () => {
    const toggleVisibilityMock = jest.fn();
    render(
      <MyComponent
        cardName="Educación"
        showedCategory=""
        littleDown={false}
        toggleVisibility={toggleVisibilityMock}
        checkValue={0}
      />,
    );
    const button = screen.getByRole("button"); // Obtiene el botón
    fireEvent.click(button); // Simula el clic en el botón
    expect(toggleVisibilityMock).toHaveBeenCalledWith("Educación");
  });

  test('Verifica que los estilos de fondo del componente cambian de "bg-white" a "bg-[#fbbf24]" al ser "Educación" la categoría mostrada', () => {
    const { rerender } = render(
      <MyComponent
        cardName="Educación"
        showedCategory=""
        littleDown={false}
        toggleVisibility={() => {}}
        checkValue={0}
      />,
    );
    let cardStyleDiv = screen.getByTestId("card-style");
    expect(cardStyleDiv).toHaveClass("bg-white");

    // Renderiza el componente con la categoría mostrada
    rerender(
      <MyComponent
        cardName="Educación"
        showedCategory="Educación"
        littleDown={false}
        toggleVisibility={() => {}}
        checkValue={0}
      />,
    );
    cardStyleDiv = screen.getByTestId("card-style");
    expect(cardStyleDiv).toHaveClass("bg-[#fbbf24]"); // Verifica que el estilo cambia cuando la categoría mostrada coincide
  });

  test('Verifica la correcta renderización del ícono "QuestionMarkCircleIcon" cuando el valor de checkValue es 1', () => {
    render(
      <MyComponent
        cardName="Educación"
        showedCategory="Educación"
        littleDown={false}
        toggleVisibility={() => {}}
        checkValue={1}
      />,
    );
    const statusIcon = screen.getByTestId("QuestionMarkCircleIcon");
    expect(statusIcon).toBeInTheDocument();
  });
});
