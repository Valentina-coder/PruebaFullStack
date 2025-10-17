import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';

vi.mock('../atoms/Header/TittleText', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-title-text">{children}</div>
  ),
}));

vi.mock('../atoms/Header/ButtonProfile', () => ({
  default: ({ onClick }: { onClick: () => void }) => (
    <button data-testid="mock-button-profile" onClick={onClick}>
      Perfil Mock
    </button>
  ),
}));


describe('Header Component', () => {
  let alertSpy: any;
  beforeEach(() => {
    alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
  });


  afterEach(() => {
    alertSpy.mockRestore();
    vi.clearAllMocks();
  });

  it('debe renderizar el título del portafolio', () => {
    render(<Header />);
    

    expect(screen.getByText('Mi Portafolio')).toBeInTheDocument();
  });


  it('debe renderizar todos los ítems de navegación', () => {
    render(<Header />);
    const menuItems = [ 'Inicio', 'Proyectos', 'Habilidades', 'Contacto'];
    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
    
    const selectedItem = screen.getByText('Inicio');
    expect(selectedItem.closest('li')).toHaveClass('ant-menu-item-selected');
  });

  it('debe ejecutar la función handleProfileClick (mostrar alert) al hacer click en ButtonProfile', () => {
    render(<Header />);
    const profileButton = screen.getByTestId('mock-button-profile');
    fireEvent.click(profileButton)
    expect(alertSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledWith("Navegando a Perfil!");
  });
  
  it('debe renderizar el componente con el rol semántico de banner y las clases de Ant Design', () => {
    const { container } = render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    

    expect(container.querySelector('.ant-layout-header')).toBeInTheDocument();
  });
});