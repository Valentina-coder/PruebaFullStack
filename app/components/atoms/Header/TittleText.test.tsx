import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TitleText from "../Header/TittleText";

describe("TitleText Component", () => {

  it("renderiza correctamente el texto enviado como children", () => {
    render(<TitleText>Texto de Prueba</TitleText>);
    const titleElement = screen.getByText("Texto de Prueba");
    expect(titleElement).toBeInTheDocument();
  });

  it("usa por defecto el nivel 2 si no se especifica el prop level", () => {
    render(<TitleText>Texto Nivel 2</TitleText>);
    const h2Element = screen.getByRole("heading", { level: 2 });
    expect(h2Element).toBeInTheDocument();
  });

  it("permite cambiar el nivel del título usando el prop level", () => {
    render(<TitleText level={3}>Título Nivel 3</TitleText>);
    const h3Element = screen.getByRole("heading", { level: 3 });
    expect(h3Element).toBeInTheDocument();
  });

  it("aplica correctamente los estilos pasados por prop", () => {
    const style = { color: "red", textAlign: "center" } as const;
    render(<TitleText style={style}>Título con Estilo</TitleText>);
    const styleTitle = screen.getByText("Título con Estilo");
    expect(styleTitle).toHaveStyle("color: red");
    expect(styleTitle).toHaveStyle("text-align: center");
  });
});
