import React from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';


interface ButtonProfileProps {
  onClick: () => void; 
  text?: string;
}

const ButtonProfile: React.FC<ButtonProfileProps> = ({ onClick, text = "Perfil" }) => { 
  return (
    <Button onClick={onClick}> 
    <UserOutlined style={{ marginRight: 8 }} />
      {text}
    </Button>
  );
};

export default ButtonProfile;
