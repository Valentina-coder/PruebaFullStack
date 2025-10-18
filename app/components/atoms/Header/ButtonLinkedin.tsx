import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons';


export interface ButtonLinkedinProps {
  linkedinUrl: string;
  text?: string;
  size?: "small" | "middle" | "large";
}

const ButtonLinkedin: React.FC<ButtonLinkedinProps> = ({
  linkedinUrl,
  text = "Mi Perfil de LinkedIn",
  size = "large",
}) => {
 
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    message.info("Abriendo LinkedIn...");
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
  };


  useEffect(() => {
    if (clicked) {
      console.log("¡El botón de LinkedIn fue clickeado!");
      
    }
  }, [clicked]);

  return (
    <Button
      type="primary"
      size={size}
      icon={<LinkedinOutlined />}
      style={{ backgroundColor: '#0077B5', borderColor: '#0077B5' }}
      onClick={handleClick}
    >
      {text} {clicked && "✅"} 
    </Button>
  );
};

export default ButtonLinkedin;
