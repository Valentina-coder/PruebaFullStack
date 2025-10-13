// app/routes/Home.tsx (Asegúrate de importar ProjectGrid)

import React from 'react';
import MainBanner from '../components/organism/MainBanner'; 
import ProjectGrid from '../components/organism/ProyectGrid'; 

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <MainBanner /> 
      <ProjectGrid /> {/* ⬅️ Aquí se mostrará tu cuadrícula de proyectos */}
    </div>
  );
}

export default Home;