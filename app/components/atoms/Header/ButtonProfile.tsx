// app/components/atoms/Header/ButtonProfile.tsx
import React from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// No necesitas useNavigate si la navegación se pasa por props

interface ButtonProfileProps {
  onClick: () => void; // Usa la prop que ya definiste
  text?: string;
}

const ButtonProfile: React.FC<ButtonProfileProps> = ({ onClick, text = "Perfil" }) => { 
  return (
    <Button onClick={onClick}> 
      {/* ...aquí puedes poner el icono o estilos de Antd */}
      {text}
    </Button>
  );
};

export default ButtonProfile;

// NOTA: La lógica de `Maps("/contact")` debe ir ahora en el componente padre (el que usa ButtonProfile), pasándola como prop.