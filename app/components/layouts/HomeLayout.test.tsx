import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomeLayout from './HomeLayout';

describe("HomeLayout Component", () => {

  it("debe renderizar el Layout principal con children", () => {
    render(
      <HomeLayout>
        <div>CPagina Principal</div>
      </HomeLayout>
    );
    expect(screen.getByText("Contenido principal")).toBeInTheDocument();
  });

  it("debe renderizar el Header dentro del Layout", () => {
    render(
      <HomeLayout>
        <div>Contenido principal</div>
      </HomeLayout>
    );
    expect(screen.getByText(/Header/i)).toBeInTheDocument(); 
  });

  it("debe renderizar el Footer correctamente", () => {
    render(
      <HomeLayout>
        <div>Hecho por Valentina:</div>
      </HomeLayout>
    );
    expect(screen.getByText(/Portafolio ©2025 Created by Valentina Cortez/i)).toBeInTheDocument();
  });
});
