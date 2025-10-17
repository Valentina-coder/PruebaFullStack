import React from "react";
import { Button } from "antd";

interface ContainerButtonProps {
  text: string;
  onClick?: () => void;
  type?: "primary" | "default" | "dashed" | "link" | "text";
}

const ContainerButton: React.FC<ContainerButtonProps> = ({ text, onClick, type = "primary" }) => {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

export default ContainerButton;
