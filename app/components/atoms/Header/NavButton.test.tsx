import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NavButton from './NavButton';

describe('NavButton', () => {
  
  
  it('debe renderizar el componente NavButton correctamente', () => {
    render(<NavButton />);
    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();
  });


  it('debe mostrar los tres ítems del menú', () => {
    render(<NavButton />);
    
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Perfil')).toBeInTheDocument();
    expect(screen.getByText('Logros')).toBeInTheDocument();
  });

  it('debe contener las claves (keys) definidas para cada ítem del menú', () => {
    const { container } = render(<NavButton />);
    const menuItems = container.querySelectorAll('.ant-menu-item');

    expect(menuItems.length).toBe(3);
    expect(menuItems[0].getAttribute('key')).toBe('1');
    expect(menuItems[1].getAttribute('key')).toBe('2');
    expect(menuItems[2].getAttribute('key')).toBe('3');
  });

  it('debe usar el modo horizontal en el menú', () => {
    const { container } = render(<NavButton />);
    const menu = container.querySelector('.ant-menu-horizontal');
    expect(menu).toBeInTheDocument();
  });
});
