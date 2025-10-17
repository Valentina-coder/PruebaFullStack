import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ButtonProfile from './ButtonProfile';
import '@testing-library/jest-dom';


describe('ButtonProfile', () => {

 
  const mockOnClick = vi.fn();

  // Test 1
  it('debe renderizar el botón con el texto por defecto "Perfil"', () => {
    render(<ButtonProfile onClick={mockOnClick} />);
    expect(screen.getByRole('button', { name: /Perfil/i })).toBeInTheDocument();
  });

  // Test 2
  it('debe renderizar el botón con el texto personalizado', () => {
    render(<ButtonProfile onClick={mockOnClick} text="Mi Cuenta" />);
    expect(screen.getByRole('button', { name: /Mi Cuenta/i })).toBeInTheDocument();
  });

  // Test 3
  it('debe ejecutar la función onClick al hacer clic', async () => {
    const user = userEvent.setup();
    render(<ButtonProfile onClick={mockOnClick} />);
    const button = screen.getByRole('button', { name: /Perfil/i });

    await user.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  // Test 4
  it('debe contener la clase base de Ant Design para Button', () => {
    const { container } = render(<ButtonProfile onClick={mockOnClick} />);
    const button = container.querySelector('.ant-btn');
    expect(button).toBeInTheDocument();
  });
});
