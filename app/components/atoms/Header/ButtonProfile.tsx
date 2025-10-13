// app/components/atoms/Header/ButtonProfile.tsx

import React from 'react';
import { Button } from 'antd'; 
import { UserOutlined } from '@ant-design/icons'; 

interface ButtonProfileProps {
  onClick: () => void;
  text?: string;
}

const ButtonProfile: React.FC<ButtonProfileProps> = ({ onClick, text = "Ver Perfil" }) => {
  return (
    
    <Button 
      type="default" 
      icon={<UserOutlined />} 
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default ButtonProfile;