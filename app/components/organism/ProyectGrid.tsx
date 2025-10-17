import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import Card from '../molecules/Card/Card'; 

const { Title } = Typography;

const PROJECTS_DATA = [
  {
    title: "Organización de eventos",
    description: "Coordinación de eventos y atención al cliente como garzona en distintos eventos.",
    technologies: [""],
    imageUrl: "",
    repoUrl: "",
    liveUrl: "espacioriesco.cl"
  },
  {
    title: "Ventas en Mall / Retail",
    description: "Experiencia en atención al cliente, ventas y manejo de stock en tienda retail.",
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

const ProjectGrid: React.FC = () => {
  return (
    <div style={{ padding: '40px 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
        Proyectos Destacados
      </Title>
      <Divider />
      <Row gutter={[32, 32]} justify="center">
        {PROJECTS_DATA.map((project, index) => (
          <Col 
            key={index} 
            xs={24}   
            sm={12} 
            lg={8} 
          >
            <Card {...project} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectGrid;