import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./index";
import { useUser } from "@auth0/nextjs-auth0/client";

// Mock de useUser
jest.mock("@auth0/nextjs-auth0/client", () => ({
  useUser: jest.fn(),
}));

// PRUEBAS HECHAS POR RODRIGO - A00829180
describe("Header Component", () => {
  test("debe renderizar los componentes básicos", () => {
    useUser.mockReturnValue({ user: null });
    render(<Header />);
    expect(screen.getByText("Brain")).toBeInTheDocument();
    expect(screen.getByText("Evaluación")).toBeInTheDocument();
    expect(screen.getByText("Empresas")).toBeInTheDocument();
    expect(screen.getByText("Recursos")).toBeInTheDocument();
    expect(screen.getByText("SpeechToText")).toBeInTheDocument();
  });

  test("debe cambiar de estilos al simular scroll", () => {
    useUser.mockReturnValue({ user: null });
    render(<Header />);
    expect(screen.getByRole("banner")).toHaveClass("text-white"); // Inicialmente debería tener texto blanco
    // Simula el cambio de estado de scrolling
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    setTimeout(() => {
      expect(screen.getByRole("banner")).toHaveClass("text-[#0C1B2A]"); // Verifica el cambio de clase cuando scrolling es true
    }, 0);
  });
});
