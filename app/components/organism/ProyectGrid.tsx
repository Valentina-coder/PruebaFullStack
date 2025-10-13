// app/components/organism/ProjectGrid/ProjectGrid.tsx

import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import Card from '../molecules/Card/Card'; 

const { Title } = Typography;

// --- 💡 SIMULACIÓN DE DATOS DE PROYECTOS ---
// En una aplicación real, esto vendría de un endpoint o un JSON
const PROJECTS_DATA = [
  {
    title: "E-commerce con microservicios",
    description: "Plataforma completa de venta en línea, utilizando Node.js/Express para el backend y Redux para la gestión de estado en React.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Ant Design"],
    imageUrl: "https://via.placeholder.com/600x400?text=E-commerce+Image",
    repoUrl: "https://github.com/usuario/ecommerce-repo",
    liveUrl: "https://demo.ecommerce.com"
  },
  {
    title: "Dashboard de analíticas",
    description: "Panel de control interactivo para visualizar datos de usuarios en tiempo real, optimizado para rendimiento con TSX.",
    technologies: ["React", "TypeScript", "Ant Design", "Chart.js"],
    imageUrl: "https://via.placeholder.com/600x400?text=Dashboard+Image",
    repoUrl: "https://github.com/usuario/dashboard-repo",
  },
  {
    title: "Blog personal con CMS",
    description: "Sistema de gestión de contenido (CMS) personalizado con una API REST para publicar artículos y gestionar comentarios.",
    technologies: ["Next.js", "Strapi", "Tailwind CSS", "Node.js"],
    imageUrl: "https://via.placeholder.com/600x400?text=Blog+Image",
    repoUrl: "https://github.com/usuario/blog-repo",
  },
];
// ------------------------------------------

const ProjectGrid: React.FC = () => {
  return (
    <div style={{ padding: '40px 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
        Proyectos Destacados
      </Title>
      <Divider />
      
      {/* Usamos Row y Col para crear una cuadrícula responsiva */}
      <Row gutter={[32, 32]} justify="center">
        {PROJECTS_DATA.map((project, index) => (
          // Col define el ancho: 24 en móvil, 12 en tablet, 8 en desktop
          <Col 
            key={index} 
            xs={24}   // Ocupa todo el ancho en extra-small
            sm={12}   // Ocupa la mitad en small/medium
            lg={8}    // Ocupa un tercio en large (3 tarjetas por fila)
          >
            {/* 💡 Pasamos todos los datos del proyecto a la Molécula ProjectCard */}
            <Card {...project} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectGrid;