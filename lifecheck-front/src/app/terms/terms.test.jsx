import React from "react";
import { render, screen } from "@testing-library/react";
import Page from "./page";

// PRUEBAS HECHAS POR RODRIGO - A00829180
describe("Terms and Conditions Page", () => {
  test('debe renderizar el título "Términos y Condiciones"', () => {
    render(<Page />);
    expect(screen.getByText("Términos y Condiciones")).toBeInTheDocument();
  });

  test("debe cargar la imagen de fondo con los atributos adecuados", () => {
    render(<Page />);
    const backgroundImage = screen.getByRole("img", {
      name: "Terms and Conditions",
    });
    expect(backgroundImage.src).toContain("terms.jpg");
    expect(backgroundImage).toHaveClass("object-cover");
  });

  test("debe mostrar el icono académico con el color inicial correcto", () => {
    render(<Page />);
    const academicIcon = screen.getByTestId("academic-icon");
    expect(academicIcon).toHaveClass("text-yellow-400");
  });
});
