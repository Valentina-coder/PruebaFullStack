import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ContainerButton from "./ContainerButton"; // Ajusta la ruta si es necesario

describe("ContainerButton Component", () => {


  it("debe renderizar el botón con texto y tipo 'primary' por defecto", () => {
    const buttonText = "Guardar";
    
    render(<ContainerButton text={buttonText} />);

    const buttonElement = screen.getByRole("button", { name: buttonText });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("ant-btn-primary");
    expect(buttonElement).toHaveClass("ant-btn");
  });


  it("debe renderizar el botón con el tipo 'dashed' correctamente", () => {
    const buttonText = "Cancelar"
    render(<ContainerButton text={buttonText} type="dashed" />);
    const buttonElement = screen.getByRole("button", { name: buttonText });
    

    expect(buttonElement).toHaveClass("ant-btn-dashed");
    expect(buttonElement).not.toHaveClass("ant-btn-primary");
  });


  it("debe llamar a la función onClick cuando se presiona el botón", () => {
    const handleClick = vi.fn();
    const buttonText = "Enviar";
    render(<ContainerButton text={buttonText} onClick={handleClick} />);
    const buttonElement = screen.getByRole("button", { name: buttonText });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  

  it("no debe fallar si se hace click y onClick no está definido", () => {
    const buttonText = "Simple Botón";
    expect(() => {
      render(<ContainerButton text={buttonText} />);
      const buttonElement = screen.getByRole("button", { name: buttonText });
      fireEvent.click(buttonElement);
    }).not.toThrow();
  });
});