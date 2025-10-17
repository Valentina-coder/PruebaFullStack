import React from "react";
import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

const MainFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center", background: "#f0f2f5", padding: "20px 0" }}>
      <Text>Portafolio ©2025 Created by Valentina Cortez</Text>
    </Footer>
  );
};

export default MainFooter;
