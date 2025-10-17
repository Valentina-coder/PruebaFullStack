// El archivo debe ser .ts o .tsx si estás usando Vitest/Jest
import { describe, it, expect, beforeEach, vi } from 'vitest';
import routes from '../routes/routes'; 

vi.mock('@react-router/dev/routes', () => ({
  index: (file: string) => ({
    id: `index-mock-${file}`,
    path: undefined, 
    file,
  }),
  route: (path: string, file: string) => ({
    id: `route-mock-${path}`, 
    path, 
    file,
  }),
}));

// --- SUITE DE PRUEBAS ---
describe('Configuración de Rutas Estáticas', () => {

  it('debe exportar un array de configuración de rutas', () => {
    expect(Array.isArray(routes)).toBe(true);
  });


  it('debe contener exactamente 3 entradas de rutas', () => {
    expect(routes).toHaveLength(3);
  });


  it('debe tener una ruta raíz (index) correcta en la posición 0', () => {
    const rootRoute = routes[0];
    

    expect(rootRoute).toHaveProperty('id', 'index-mock-routes/home.tsx');
    expect(rootRoute).toHaveProperty('path', undefined); 
    expect(rootRoute).toHaveProperty('file', 'routes/home.tsx');
  });


  it('debe tener una ruta estándar para /welcome en la posición 1', () => {
    const welcomeRoute = routes[1];
    expect(welcomeRoute).toHaveProperty('id', 'route-mock-/welcome');
    expect(welcomeRoute).toHaveProperty('path', '/welcome');
    expect(welcomeRoute).toHaveProperty('file', 'routes/welcome.tsx');
  });

  it('debe tener una ruta estándar para /contact en la posición 2', () => {
    const contactRoute = routes[2];

    expect(contactRoute).toHaveProperty('id', 'route-mock-/contact');
    expect(contactRoute).toHaveProperty('path', '/contact');
    expect(contactRoute).toHaveProperty('file', 'routes/contact.tsx');
  });
});