// app/components/organism/MainBanner/MainBanner.tsx

import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Button, Space, Image } from "antd";
import { MailOutlined, DownloadOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";

const { Title, Text } = Typography;

const MainBanner: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const handleContactClick = () => {
    setShowMessage(true);
    window.location.href = "mailto:va.cortezz@duocuc.cl";
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#0d1117" }}>
      <Row
        align="middle"
        justify="center"
        className="text-center text-md-start"
        gutter={[32, 32]}
      >
        {/* Columna de texto */}
        <Col xs={24} md={12} className="px-4">
          <Text style={{ fontSize: "18px", color: "#8b949e" }}>
            ¡Hola! Mi nombre es
          </Text>

          <Title
            level={1}
            className="fw-bold"
            style={{ color: "#fff", fontSize: "3.5em" }}
          >
            Valentina Cortez Zuñiga
          </Title>

          <Title level={3} style={{ color: "#58a6ff" }}>
            Estudiante de Ingeniería en Informática
          </Title>

          <p
            style={{
              maxWidth: "480px",
              color: "#ccc",
              fontSize: "16px",
              marginTop: 20,
            }}
          >
            Combino mis habilidades para construir aplicaciones funcionales.  
            Además, mi experiencia en Retail Paris como vendedora y atención al cliente los fines de semana me ha enseñado el valor de la comunicación efectiva y la resolución de problemas.
          </p>

          {/* Botones */}
          <Space
            direction="horizontal"
            size="large"
            className="mt-3 d-flex flex-wrap justify-content-center justify-content-md-start"
          >
            <Button
              type="primary"
              size="large"
              icon={<MailOutlined />}
              onClick={handleContactClick}
            >
              Contáctame
            </Button>

            <a href="/cv/cv_vale.pdf" download>
              <Button icon={<DownloadOutlined />}>Descargar CV</Button>
            </a>
          </Space>

          {/* Mensaje visible */}
          {showMessage && (
            <p
              className="mt-3 text-success fw-bold"
              style={{
                fontSize: "16px",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              💙 ¡Gracias por contactarme! Revisa tu correo.
            </p>
          )}
        </Col>

        {/* Columna de imagen */}
        <Col xs={24} md={10} className="text-center mt-4 mt-md-0">
          <Image
            width={300}
            src="assets/foto_perfil.jpg"
            alt="Foto de perfil"
            preview={false}
            className="img-fluid rounded-circle shadow-lg"
            style={{
              objectFit: "cover",
              border: "3px solid #58a6ff",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default MainBanner;
