import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import MainBanner from "./MainBanner";
import ButtonLinkedin from "../atoms/Header/ButtonLinkedin";


const assignMock = vi.fn();

beforeAll(() => {
  Object.defineProperty(window, "location", {
    writable: true,
    value: { ...window.location, assign: assignMock },
  });
});

afterAll(() => {
  vi.restoreAllMocks();
});


vi.useFakeTimers();

describe("MainBanner Component", () => {
  it("debe renderizar el nombre, título y descripción principal", () => {
    render(<MainBanner />);
    expect(screen.getByText("Valentina Cortez Zuñiga")).toBeInTheDocument();
    expect(screen.getByText("Estudiante de Ingeniería en Informática")).toBeInTheDocument();
    expect(screen.getByText(/Combino mis habilidades para construir aplicaciones funcionales/i)).toBeInTheDocument();
  });

  it("debe renderizar la imagen de perfil con src y alt correctos", () => {
    render(<MainBanner />);
    const profileImage = screen.getByAltText("Foto de perfil") as HTMLImageElement;
    expect(profileImage).toBeInTheDocument();
    expect(profileImage.src).toContain("assets/foto_perfil.jpg");
  });

  it("debe tener un enlace de descarga para el CV", () => {
    render(<MainBanner />);
    const downloadButton = screen.getByRole("button", { name: /Descargar CV/i }).closest("a");
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveAttribute("href", "/cv/cv_vale.pdf");
    expect(downloadButton).toHaveAttribute("download");
  });

  it("debe iniciar 'mailto:' y mostrar el mensaje al hacer click en 'Contáctame'", () => {
    render(<MainBanner />);
    const contactButton = screen.getByRole("button", { name: /Contáctame/i });
    fireEvent.click(contactButton);
    expect(window.location.href).toBe("mailto:va.cortezz@duocuc.cl");
    const successMessage = screen.getByText("💙 ¡Gracias por contactarme! Revisa tu correo.");
    expect(successMessage).toBeInTheDocument();
  });

  it("debe ocultar el mensaje de contacto después de 4000ms", async () => {
    render(<MainBanner />);
    const contactButton = screen.getByRole("button", { name: /Contáctame/i });
    fireEvent.click(contactButton);

    const successMessage = screen.getByText("💙 ¡Gracias por contactarme! Revisa tu correo.");
    expect(successMessage).toBeInTheDocument();

    vi.advanceTimersByTime(4000);

    await waitFor(() => {
      expect(successMessage).not.toBeInTheDocument();
    });
  });

  it("debe renderizar el botón de LinkedIn correctamente", () => {
    render(<MainBanner />);
    const linkedinButton = screen.getByRole("button", { name: /LinkedIn/i });
    expect(linkedinButton).toBeInTheDocument();
   
    expect(linkedinButton).toHaveStyle({ backgroundColor: "#0077B5" });
  });

  it("el botón de LinkedIn debe abrir la URL en nueva pestaña", () => {
    render(<MainBanner />);
    const linkedinButton = screen.getByRole("button", { name: /LinkedIn/i }).closest("a");
    expect(linkedinButton).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/valentina-cortez-zuniga-51553038b/"
    );
    expect(linkedinButton).toHaveAttribute("target", "_blank");
    expect(linkedinButton).toHaveAttribute("rel", "noopener noreferrer");
  });
});
