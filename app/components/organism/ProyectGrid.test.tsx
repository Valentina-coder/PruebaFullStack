import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectGrid from './ProyectGrid'; 


vi.mock('../molecules/Card/Card', () => ({
  default: (props: any) => (
    <div data-testid="mock-project-card" data-title={props.title}>
      Mock Card: {props.title}
    </div>
  ),
}));


const PROJECT_TITLES = [
  "E-commerce con microservicios",
  "Dashboard de analíticas",
  "Blog personal con CMS",
];


describe('ProjectGrid Component', () => {

  it('debe renderizar el título principal de la sección', () => {
    render(<ProjectGrid />);
    
    const mainTitle = screen.getByRole('heading', { level: 2, name: /Proyectos Destacados/i });
    expect(mainTitle).toBeInTheDocument();
  });


  it('debe renderizar la cantidad correcta de tarjetas de proyecto', () => {
    render(<ProjectGrid />);  
    const cards = screen.getAllByTestId('mock-project-card');
    expect(cards.length).toBe(PROJECT_TITLES.length);
  });


  it('debe pasar las propiedades correctas a cada componente Card', () => {
    render(<ProjectGrid />);
    PROJECT_TITLES.forEach(title => {
      expect(screen.getByText(`Mock Card: ${title}`)).toBeInTheDocument();
    });
    

    const mockCards = screen.getAllByTestId('mock-project-card');
    
    expect(mockCards[0]).toHaveAttribute('data-title', PROJECT_TITLES[0]);
    expect(mockCards[1]).toHaveAttribute('data-title', PROJECT_TITLES[1]);
    expect(mockCards[2]).toHaveAttribute('data-title', PROJECT_TITLES[2]);
  });
  

  it('debe renderizar el componente Divider de Ant Design', () => {
    render(<ProjectGrid />);
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
  });
});