import React from 'react';

import { Layout } from 'antd';

const { Content } = Layout;

// El prop 'children' es donde se colocará el contenido específico de cada página (ruta)
interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        {children} {/* ⬅️ Aquí se renderiza la página (Home.tsx) */}
      </Content>
      <Footer />
    </Layout>
  );
}

export default HomeLayout;