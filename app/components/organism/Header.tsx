// app/components/organism/Header/Header.tsx

import React from 'react';
import { Layout, Menu, Space } from 'antd';
import TitleText from '../atoms/Header/TittleText'
import ButtonProfile from '../atoms/Header/ButtonProfile'; 

const { Header: AntHeader } = Layout;
const Header: React.FC = () => {
  const handleProfileClick = () => {
    console.log("Navegando a la sección de perfil...");
    alert("Navegando a Perfil!");
  };

  return (
    // Componente Header de Ant Design (fixed para que se mantenga arriba)
    <AntHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div style={{ float: 'left' }}>
        {/* Usamos el átomo TitleText para el logo/nombre del portafolio */}
        <TitleText level={3} style={{ color: 'white', lineHeight: '32px', margin: 0 }}>
          Mi Portafolio
        </TitleText>
      </div>
      
      {/* Menú de Navegación principal */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{ float: 'right', lineHeight: '64px' }}
      >
        <Menu.Item key="home">Inicio</Menu.Item>
        <Menu.Item key="projects">Proyectos</Menu.Item>
        <Menu.Item key="skills">Habilidades</Menu.Item>
        <Menu.Item key="contact">Contacto</Menu.Item>
      </Menu>

      {/* Botón de Perfil */}
      <div style={{ float: 'right', marginLeft: '20px', lineHeight: '64px' }}>
        <ButtonProfile onClick={handleProfileClick} />
      </div>

    </AntHeader>
  );
};

export default Header;
