import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Page from './page';
import { useUser } from '@auth0/nextjs-auth0/client';


//Eugenio Lozano | A00835338

jest.mock('@auth0/nextjs-auth0/client', () => ({
  useUser: jest.fn(),
}));

const mockUser = {
  name: 'Eugenio Lozano',
  email: 'correo02prueba@gmail.com',
  picture: 'http://foto/perfil.jpg',
  sub: 'auth0|123456789',
};

describe('Page Component', () => {
  beforeEach(() => {
    useUser.mockReturnValue({
      user: mockUser,
      error: null,
      isLoading: false,
    });
  });

  test('Render de botón "Editar Perfil". ', () => {
    render(<Page />);
    const editButton = screen.getByText('Editar Perfil');
    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveClass('w-full');
  });

  test('Render de botón "Ver Resultados". ', () => {
    render(<Page />);
    fireEvent.click(screen.getByText('Empleados'));
    const viewResultsButtons = screen.getAllByText('Ver Resultados');
    expect(viewResultsButtons).toHaveLength(6);
    viewResultsButtons.forEach(button => {
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      // Aquí podrías verificar algún comportamiento adicional si hay alguna acción tras el clic
    });
  });

  test('Aparece el título "Ajustes Generales" al cambiar a la pestaña correspondiente. ', () => {
    render(<Page />);
    fireEvent.click(screen.getByText('Ajustes generales'));
    expect(screen.getByText('Ajustes Generales')).toBeInTheDocument();
  });

  test('Muestra el "Loading..." cuando está cargando', () => {
    useUser.mockReturnValue({
      user: null,
      error: null,
      isLoading: true,
    });
    render(<Page />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('Muestra el mensaje de error si hay un error. ', () => {
    const errorMessage = 'Error de autenticación';
    useUser.mockReturnValue({
      user: null,
      error: { message: errorMessage },
      isLoading: false,
    });
    render(<Page />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test('Renderiza el componente SideNav y los tabs funcionan. ', () => {
    render(<Page />);
    expect(screen.getByText('Mi información')).toBeInTheDocument();
    expect(screen.getByText('Ajustes generales')).toBeInTheDocument();
    expect(screen.getByText('Empleados')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Ajustes generales'));
    expect(screen.getByText('Preferencias de Idioma')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Empleados'));
    // Verifica que el contenido de "Empleados" se haya renderizado correctamente
    expect(screen.getByRole('heading', { name: /Empleados/i })).toBeInTheDocument();
  });

  test('Renderiza la lista de empleados correctamente', () => {
    render(<Page />);
    fireEvent.click(screen.getByText('Empleados'));
    const employees = [
      "Eugenio Pérez",
      "Valeria Gómez",
      "Rodrigo García",
      "Hugo Sánchez",
      "Gabriel Yunes",
      "Fausto Faustín",
    ];
    employees.forEach((employee) => {
      expect(screen.getByText(employee)).toBeInTheDocument();
    });
  });

  test('El botón "Cerrar Sesión" se muestra y redirige correctamente', () => {
    render(<Page />);
    const logoutButton = screen.getByText('Cerrar Sesión');
    expect(logoutButton).toBeInTheDocument();
    expect(logoutButton.closest('a')).toHaveAttribute('href', '/api/auth/logout');
  });

  test('El componente UserSettings si renderiza. ', () => {
    render(<Page />);
    fireEvent.click(screen.getByText('Ajustes generales'));
    expect(screen.getByText('Ajustes Generales')).toBeInTheDocument();
    expect(screen.getByText('Preferencias de Idioma')).toBeInTheDocument();
    expect(screen.getByText('Tema')).toBeInTheDocument();
    expect(screen.getByText('Accesibilidad')).toBeInTheDocument();
    expect(screen.getByText('Privacidad')).toBeInTheDocument();
  });

  test('El botón "Agregar Empleado" es visible. ', () => {
    render(<Page />);
    fireEvent.click(screen.getByText('Empleados'));
    const addButton = screen.getByText('Agregar Empleado');
    expect(addButton).toBeInTheDocument();
    fireEvent.click(addButton);
  });
});
