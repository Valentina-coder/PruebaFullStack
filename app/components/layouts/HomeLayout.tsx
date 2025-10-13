import React from 'react';
import { Layout } from 'antd'; 
import Header from '../organism/Header'; 

const { Content } = Layout;

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header /> {/* ⬅️ Agregamos el Header aquí */}
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        {children} 
      </Content>
      {/* Podemos añadir el Footer aquí más adelante */}
    </Layout>
  );
}

export default HomeLayout;