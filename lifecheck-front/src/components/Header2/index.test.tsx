import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header2 from "./index";
import { useUser } from "@auth0/nextjs-auth0/client";

// Valeria Enríquez Limón A00832782
jest.mock("@auth0/nextjs-auth0/client");

const mockedUseUser = useUser as jest.MockedFunction<typeof useUser>;

describe("Header2 component", () => {
  beforeEach(() => {
    mockedUseUser.mockReturnValue({ user: null });
  });

  test("Se renderiza correctamente", () => {
    render(<Header2 />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("Se muestran los tabs correctos en el header", () => {
    render(<Header2 />);
    expect(screen.getByText("Evaluación")).toBeInTheDocument();
    expect(screen.getByText("Resultados")).toBeInTheDocument();
    expect(screen.getByText("Empresas")).toBeInTheDocument();
    expect(screen.getByText("Recursos")).toBeInTheDocument();
  });

  test("Se renderiza el link de inicio con icono", () => {
    render(<Header2 />);
    const homeLink = screen.getByRole("link", { name: "Brain" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.querySelector("svg")).toBeInTheDocument();
  });

  test("El botón de menú tienes las clases correctas", () => {
    render(<Header2 />);
    const userMenuButton = screen.getByRole("button", {
      name: "Toggle user menu",
    });
    expect(userMenuButton).toHaveClass(
      "rounded-full bg-white hover:text-[#23A28B]",
    );
  });

  test("nav element has role navigation", () => {
    render(<Header2 />);
    expect(screen.getByRole("navigation")).toBeTruthy();
  });

  test("El link de Home se renderiza correctamente", () => {
    render(<Header2 />);
    expect(screen.getByRole("link", { name: "Brain" })).toHaveAttribute(
      "href",
      "/#",
    );
  });

  test("El link de Evaluación se renderiza correctamente", () => {
    render(<Header2 />);
    expect(screen.getByText("Evaluación")).toHaveAttribute(
      "href",
      "/evaluation",
    );
  });

  test("El link de Resultados se renderiza correctamente", () => {
    render(<Header2 />);
    expect(screen.getByText("Resultados")).toHaveAttribute("href", "/results");
  });

  test("El link de Empresas se renderiza correctamente", () => {
    render(<Header2 />);
    expect(screen.getByText("Empresas")).toHaveAttribute("href", "/business");
  });

  test("El link de Recursos se renderiza correctamente", () => {
    render(<Header2 />);
    expect(screen.getByText("Recursos")).toHaveAttribute("href", "/resources");
  });
});
