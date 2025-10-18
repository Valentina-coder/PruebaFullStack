import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import Home from "../routes/home";
import { message } from "antd";

const locationHrefMock = vi.fn();
const originalLocation = window.location;

const messageSuccessMock = vi.spyOn(message, "success").mockImplementation(() => {
  return {} as any;
});

beforeAll(() => {
  Object.defineProperty(window, "location", {
    writable: true,
    value: {
      ...originalLocation,
      set href(val: string) {
        locationHrefMock(val);
      },
      get href() {
        return locationHrefMock.mock.calls.at(-1)?.[0] || originalLocation.href;
      },
      assign: locationHrefMock,
    },
  });
});

afterAll(() => {
  Object.defineProperty(window, "location", {
    writable: true,
    value: originalLocation,
  });
  messageSuccessMock.mockRestore();
  vi.restoreAllMocks();
});

const PROFILE_NAME = "Valentina Cortez Zuñiga";
const CARD_TITLES = [
  "Organización de eventos",
  "Ventas en Mall / Retail",
  "Formateo y optimización de PC",
];

describe("Home Component (Layout Completo)", () => {
  it("debe renderizar el nombre, título y descripción del perfil", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: PROFILE_NAME })).toBeInTheDocument();
    expect(screen.getByText("Estudiante Ing. en Informática")).toBeInTheDocument();
    expect(
      screen.getByText(/Combino mis habilidades en TSX y Ant Design para construir/i)
    ).toBeInTheDocument();
  });

  it("debe renderizar el Avatar con alt y src correctos", () => {
    render(<Home />);
    const avatarElement = screen.getByAltText("Foto de perfil") as HTMLImageElement;
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement.src).toContain("assets/foto_perfil.jpg");
  });

  it("debe abrir el mail y mostrar mensaje al hacer click en 'Contáctame'", () => {
    render(<Home />);
    const contactButton = screen.getByRole("button", { name: /Contáctame/i });
    fireEvent.click(contactButton);

    expect(locationHrefMock).toHaveBeenCalledWith("mailto:va.cortezz@duocuc.cl");
    expect(messageSuccessMock).toHaveBeenCalledTimes(1);
    expect(messageSuccessMock).toHaveBeenCalledWith("Abriendo tu cliente de correo 📩");
  });

  it("debe tener enlace de descarga para el CV", () => {
    render(<Home />);
    const downloadLink = screen.getByRole("button", { name: /Descargar CV/i }).closest("a");

    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute("href", "cv/cv_vale.pdf");
    expect(downloadLink).toHaveAttribute("download");
  });

  it("debe renderizar el título de la sección de proyectos", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Proyectos Destacados/i })
    ).toBeInTheDocument();
  });

  it("debe renderizar las tres tarjetas de proyectos con sus títulos", () => {
    render(<Home />);
    CARD_TITLES.forEach((title) => {
      expect(screen.getByRole("heading", { level: 4, name: title })).toBeInTheDocument();
    });

    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(CARD_TITLES.length);
  });
});
