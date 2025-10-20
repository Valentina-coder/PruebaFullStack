import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer"; 

describe("MainFooter Component", () => {

  const expectedText = "Portafolio ©2025 Created by Valentina Cortez";

  it("debe renderizar el texto de copyright y el creador correctamente", () => {

    render(<Footer />);
    const footerText = screen.getByText(expectedText);
    expect(footerText).toBeInTheDocument();import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer Component", () => {
  const currentYear = new Date().getFullYear();
  const expectedText = `© ${currentYear} Valentina Cortez — Portafolio Personal 💻`;

  it("debe renderizar el texto de copyright dinámico correctamente", () => {
    render(<Footer />);
    const footerText = screen.getByText(expectedText);
    expect(footerText).toBeInTheDocument();
  });

  it("debe tener el rol semántico de 'contentinfo' (footer HTML)", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent("Valentina Cortez");
  });

  it("debe tener estilos de fondo oscuro y borde superior", () => {
    const { container } = render(<Footer />);
    const footerDiv = container.querySelector("div");
    expect(footerDiv).toHaveStyle({
      backgroundColor: "#161b22",
      borderTop: "1px solid #30363d",
    });
  });
});

  });

  it("debe renderizar con el rol semántico de 'contentinfo' para el Footer", () => {

    render(< Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent(expectedText);
  });
  
  it("debe renderizar la clase CSS principal de Footer de Ant Design", () => {
    const { container } = render(<Footer />);
    const antdFooter = container.querySelector(".ant-layout-footer")
    expect(antdFooter).toBeInTheDocument();
  });
});