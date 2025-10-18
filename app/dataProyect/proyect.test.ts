import { describe, it, expect } from 'vitest';
import { proyectosDestacados } from './proyect';

describe('proyectosDestacados', () => {
  it('debe existir y tener la cantidad correcta de proyectos', () => {
    expect(proyectosDestacados).toBeDefined();
    expect(proyectosDestacados.length).toBe(3);
  });

  it('cada proyecto debe tener title y desc definidos', () => {
    proyectosDestacados.forEach((proyecto) => {
      expect(proyecto.title).toBeDefined();
      expect(typeof proyecto.title).toBe('string');

      expect(proyecto.desc).toBeDefined();
      expect(typeof proyecto.desc).toBe('string');
    });
  });

  it('el link es opcional pero, si existe, debe ser string', () => {
    proyectosDestacados.forEach((proyecto) => {
      if (proyecto.link) {
        expect(typeof proyecto.link).toBe('string');
      }
    });
  });

  it('los proyectos deben tener los valores correctos', () => {
    expect(proyectosDestacados[0]).toEqual({
      title: "Organización de eventos",
      desc: "Coordinación de eventos y atención al cliente como garzona en distintos eventos.",
      link: "https://www.espacioriesco.cl"
    });

    expect(proyectosDestacados[1]).toEqual({
      title: "Ventas en Mall / Retail",
      desc: "Experiencia en atención al cliente, ventas y manejo de stock en tienda retail."
    });

    expect(proyectosDestacados[2]).toEqual({
      title: "Formateo y optimización de PC",
      desc: "Formateé y configuré mi computadora, instalando programas y optimizando el sistema."
    });
  });
});
