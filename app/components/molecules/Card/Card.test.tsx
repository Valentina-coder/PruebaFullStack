import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProjectCard from "./Card";

describe("ProjectCard Component", () => {

  const mockProps = {
    title: "Proyecto Test",
    description: "Descripción del proyecto de prueba",
    technologies: ["React", "TypeScript", "Ant Design"],
    imageUrl: "/test-image.jpg",
    repoUrl: "https://github.com/test/repo",
    liveUrl: "https://test-demo.com",
  };

  // Test 1: Renderizado básico
  it("debe renderizar el componente correctamente", () => {
    render(<ProjectCard {...mockProps} />);

    expect(screen.getByText("Proyecto Test")).toBeInTheDocument();
    expect(screen.getByText("Descripción del proyecto de prueba")).toBeInTheDocument();
  });

  // Test 2: Verificar imagen
  it("debe mostrar la imagen con src y alt correctos", () => {
    render(<ProjectCard {...mockProps} />);

    const image = screen.getByAltText("Proyecto Test") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("/test-image.jpg");
  });

  // Test 3: Verificar botones de acciones
  it("debe renderizar el botón de GitHub y Ver Demo con los enlaces correctos", () => {
    render(<ProjectCard {...mockProps} />);

    const githubButton = screen.getByRole("button", { name: /GitHub/i });
    expect(githubButton).toBeInTheDocument();
    expect(githubButton).toHaveAttribute("href", mockProps.repoUrl);

    const demoButton = screen.getByRole("button", { name: /Ver Demo/i });
    expect(demoButton).toBeInTheDocument();
    expect(demoButton).toHaveAttribute("href", mockProps.liveUrl);
  });

  // Test 4: Verificar renderizado de tecnologías
  it("debe renderizar todas las tecnologías como Tags", () => {
    render(<ProjectCard {...mockProps} />);

    mockProps.technologies.forEach((tech) => {
      const tag = screen.getByText(tech);
      expect(tag).toBeInTheDocument();
    });
  });

  // Test 5: Verificar que el Card tenga la propiedad hoverable
  it("debe renderizar el Card con la clase hoverable de Ant Design", () => {
    const { container } = render(<ProjectCard {...mockProps} />);
    const card = container.querySelector(".ant-card-hoverable");
    expect(card).toBeInTheDocument();
  });
});
