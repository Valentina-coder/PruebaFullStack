import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const Footer: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#161b22",
        color: "#ccc",
        textAlign: "center",
        padding: "1.5rem 0",
        marginTop: "2rem",
        borderTop: "1px solid #30363d",
      }}
    >
      <Text style={{ color: "#7aa2f7" }}>
        © {new Date().getFullYear()} Valentina Cortez — Portafolio Personal 💻
      </Text>
    </div>
  );
};

export default Footer;
