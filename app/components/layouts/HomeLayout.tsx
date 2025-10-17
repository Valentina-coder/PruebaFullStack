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
      <Header /> 
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        {children} 
      </Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        Portafolio ©2025 Created by Valentina Cortez
      </Layout.Footer>
    </Layout>
  );
}

export default HomeLayout;