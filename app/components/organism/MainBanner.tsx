// app/components/organism/MainBanner/MainBanner.tsx

import React from 'react';
import { Row, Col, Typography, Button, Space, Image,} from 'antd';
import { MailOutlined, DownloadOutlined , } from '@ant-design/icons';

const { Title, Text } = Typography;

const MainBanner: React.FC = () => {
  return (
    // Row para la estructura de dos columnas. style para darle altura.
    <Row align="middle" style={{ minHeight: '80vh', padding: '40px 0' }}> 
      
      {/* Columna Izquierda: Texto y Botones */}
      <Col xs={24} md={12} style={{ paddingRight: 30 }}>
        <Text style={{ fontSize: '18px', color: '#595959' }}>
          ¡Hola! Mi nombre es
        </Text>
        
        <Title level={1} style={{ margin: '0 0 10px 0', fontSize: '4em' }}>
          [Valentina Cortez Zuñiga]
        </Title>
        
        <Title level={3} style={{ color: '#1890ff' }}>
          Estudiante Ing en Informatica 
        </Title>
        
        <p style={{ maxWidth: '450px', fontSize: '16px', marginTop: 20 }}>
          Combino mis habilidades en **TSX** y **Ant Design** para construir aplicaciones funcionales y atractivas. 
          Además, mi experiencia en Retail Paris como vendedora y atención al cliente los fines de semana me ha enseñado el valor de la comunicación efectiva y la resolución de problemas.
        </p>
        
        <Space size="large" style={{ marginTop: 30 }}>
          {/* Botón de Ant Design para contacto */}
          <Button 
            type="primary" 
            size="large" 
            icon={<MailOutlined />}
            onClick={() => window.location.href = 'va.cortezz@duocuc.cl'}
          >
            Contáctame
          </Button>
          
          {/* Botón secundario para descargar CV */}
          <Button 
            size="large" 
            icon={<DownloadOutlined />}
            href="/cv/tu-cv.pdf" // Asegúrate de colocar tu CV en la carpeta /public
            download
          >
            Descargar CV
          </Button>
        </Space>
      </Col>
      
      {/* Columna Derecha: Imagen/Avatar */}
      <Col xs={24} md={12} style={{ textAlign: 'center' }}>
        <Image 
          width={350}
          src="assets/logo_perfil.png" 
          alt="Foto de Perfil"
          preview={false}
          style={{ borderRadius: '50%', objectFit: 'cover' }} // Para hacerla circular
        />
      </Col>
    </Row>
  );
};

export default MainBanner;