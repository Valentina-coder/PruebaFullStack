import React from "react";
import { Typography, Button, Row, Col, Space, Card, Avatar, message } from "antd";
import { MailOutlined, DownloadOutlined } from "@ant-design/icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const { Title, Paragraph, Text } = Typography;

const Home: React.FC = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:va.cortezz@duocuc.cl";
    message.success("Abriendo tu cliente de correo 📩");
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0d1117",
      color: "#fff",
      padding: "3rem",
    }}>
      <Row justify="center" gutter={[32, 32]}>
        
        <Col xs={24} md={12}>
          <Title level={1} style={{ color: "#fff" }}>
            Valentina Cortez Zuñiga
          </Title>
          <Text style={{ color: "#7aa2f7" }}>
            Estudiante Ing. en Informática
          </Text>

          <Paragraph style={{ color: "#ccc", marginTop: "1rem" }}>
            Combino mis habilidades en <b>TSX</b> y <b>Ant Design</b> para construir páginas funcionales y atractivas.  
            Además, mi experiencia en Retail Paris como vendedora me ha enseñado la importancia de la comunicación efectiva y la resolución de problemas.
          </Paragraph>

          <Space size="middle">
            <Button
              type="primary"
              size="large"
              icon={<MailOutlined />}
              onClick={handleContactClick}
            >
              Contáctame
            </Button>

              <a href="cv/cv_vale.pdf" download>
                <Button icon={<DownloadOutlined />}>Descargar CV</Button>
               </a>
          </Space>
        </Col>

        <Col xs={24} md={8} style={{ textAlign: "center" }}>
          <Avatar
            size={200}
            src="assets/foto_perfil.JPG"
            alt="Foto de perfil"
          />
          <Paragraph style={{ color: "#aaa", marginTop: "1rem" }}>
            Foto de Perfil
          </Paragraph>
        </Col>
      </Row>
      <div style={{ marginTop: "4rem" }}>
        <Title level={2} style={{ color: "#fff", textAlign: "center" }}>
          Proyectos Destacados
        </Title>
        <Row gutter={[16, 16]} justify="center">
          {[
            { title: "Organización de eventos", desc: "Coordinación de eventos y atención al cliente como garzona en distintos eventos." },
            { title: "Ventas en Mall / Retail", desc: "Experiencia en atención al cliente, ventas y manejo de stock en tienda retail." },
            { title: "Formateo y optimización de PC", desc:  "Formateé y configuré mi computadora, instalando programas y optimizando el sistema." },
          ].map((p, i) => (
            <Col key={i} xs={24} sm={12} md={8}>
              <Card
                title={p.title}
                bordered={false}
                hoverable
                style={{
                  borderRadius: "12px",
                  textAlign: "center",
                  backgroundColor: "#161b22",
                  color: "#fff",
                }}
              >
                <p>{p.desc}</p>
                <Button
                  type="primary"
                  href="https://www.espacioriesco.cl"
                  target="_blank"
                >
                  Ver Sitio
                </Button>
                <p>{p.desc}</p>
                <Button
                  type="primary"
                  href="paris.cl"
                  target="_blank"
                >
                  Ver Sitio
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
