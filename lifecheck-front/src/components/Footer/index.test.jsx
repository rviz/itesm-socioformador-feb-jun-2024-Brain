import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index'; // Asume que este es el componente Footer

// PRUEBAS HECHAS POR HUGO - A00834109
describe('Footer Component', () => {
  test('should display the current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Brain.`)).toBeInTheDocument();
  });

  test('should contain a Privacy Policy link', () => {
    render(<Footer />);
    const privacyLink = screen.getByText('Privacy Policy');
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink.closest('a')).toHaveAttribute('href', '/privacy');
  });

  test('should contain a Terms of Service link', () => {
    render(<Footer />);
    const termsLink = screen.getByText('Terms of Service');
    expect(termsLink).toBeInTheDocument();
    expect(termsLink.closest('a')).toHaveAttribute('href', '/terms');
  });

  test('should have appropriate class names for styling part 1', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('text-black text-center');
  });

  test('should have appropriate class names for styling part 2', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('self-center items-center p-4');
  });

  test('should render container with appropriate styling part 3', () => {
    render(<Footer />);
    const containerElement = screen.getByText(`© ${new Date().getFullYear()} Brain.`).closest('div');
    expect(containerElement).toHaveClass('container');
  });
  test('should render container with appropriate styling part 4', () => {
    render(<Footer />);
    const containerElement = screen.getByText(`© ${new Date().getFullYear()} Brain.`).closest('div');
    expect(containerElement).toHaveClass('mx-auto');
  });

  test('should render container with appropriate styling part 5', () => {
    render(<Footer />);
    const containerElement = screen.getByText(`© ${new Date().getFullYear()} Brain.`).closest('div');
    expect(containerElement).toHaveClass('mt-2');
  });

  test('should render links with correct class names (test 1)', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveClass('text-black');
    });
  });

  test('should render links with correct class names (test 2)', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveClass('hover:underline');
    });
  });
  test('should render links with correct class names', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveClass('px-2');
    });
  });
});
