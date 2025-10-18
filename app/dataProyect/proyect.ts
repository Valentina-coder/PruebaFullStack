export interface Proyecto {
  title: string;
  desc: string;
  link?: string; 
}

export const proyectosDestacados: Proyecto[] = [
  { 
    title: "Organización de eventos", 
    desc: "Coordinación de eventos y atención al cliente como garzona en distintos eventos.",
    link: "https://www.espacioriesco.cl"
  },
  { 
    title: "Ventas en Mall / Retail", 
    desc: "Experiencia en atención al cliente, ventas y manejo de stock en tienda retail."
  },
  { 
    title: "Formateo y optimización de PC", 
    desc: "Formateé y configuré mi computadora, instalando programas y optimizando el sistema."
  },
];
