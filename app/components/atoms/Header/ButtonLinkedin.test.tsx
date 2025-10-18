import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ButtonLinkedin from './ButtonLinkedin';
import type { ButtonLinkedinProps } from './ButtonLinkedin'; 
import { message } from 'antd';



vi.spyOn(message, 'info').mockImplementation(() => ({}) as any);


describe('ButtonLinkedin Component', () => {
  const linkedinUrl = 'https://www.linkedin.com/in/valentina-cortez-zuniga-51553038b/';

  it('debe renderizar el botón con texto por defecto', () => {
    render(<ButtonLinkedin linkedinUrl={linkedinUrl} />);
    const button = screen.getByRole('button', { name: /Mi Perfil de LinkedIn/i });
    expect(button).toBeInTheDocument();
  });

  it('debe renderizar el botón con texto personalizado', () => {
    const customText = 'LinkedIn';
    render(<ButtonLinkedin linkedinUrl={linkedinUrl} text={customText} />);
    const button = screen.getByRole('button', { name: customText });
    expect(button).toBeInTheDocument();
  });

  it('al hacer click se abre la URL y cambia el estado', () => {
    render(<ButtonLinkedin linkedinUrl={linkedinUrl} />);

    
    const openMock = vi.spyOn(window, 'open').mockImplementation(() => null);

    const button = screen.getByRole('button', { name: /Mi Perfil de LinkedIn/i });
    fireEvent.click(button);

    
    expect(openMock).toHaveBeenCalledWith(linkedinUrl, '_blank', 'noopener,noreferrer');

    
    expect(screen.getByRole('button', { name: /Mi Perfil de LinkedIn ✅/i })).toBeInTheDocument();

    
    expect(message.info).toHaveBeenCalledWith('Abriendo LinkedIn...');

    openMock.mockRestore();
  });

  it('debe aceptar la prop size', () => {
    render(<ButtonLinkedin linkedinUrl={linkedinUrl} size="small" />);
    const button = screen.getByRole('button', { name: /Mi Perfil de LinkedIn/i });
    expect(button.className).toMatch(/ant-btn-sm/); 
  });
});
