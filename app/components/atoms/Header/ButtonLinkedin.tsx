import React from 'react';
import { Button } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons';

interface ButtonLinkedinProps {
  linkedinUrl: string; 
  text?: string;     
}

const ButtonLinkedin: React.FC<ButtonLinkedinProps> = ({ linkedinUrl, text = "Mi Perfil de LinkedIn" }) => {
  const handleLinkClick = () => {
    window.open(linkedinUrl, 'https://www.linkedin.com/in/valentina-cortez-zuniga-51553038b/');
  };

  return (
    <Button 
      type="primary"
      icon={<LinkedinOutlined />} 
      onClick={handleLinkClick}
      style={{ backgroundColor: '#0077B5', borderColor: '#0077B5' }} 
    >
      {text}
    </Button>
  );
};

export default ButtonLinkedin;