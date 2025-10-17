import React from 'react';
import { Typography } from 'antd';
import type { CSSProperties } from 'react'; 

const { Title } = Typography;

interface TitleTextProps {
  level?: 1 | 2 | 3 | 4 | 5; 
  children: React.ReactNode; 

  style?: CSSProperties; 
}

const TitleText: React.FC<TitleTextProps> = ({ level = 2, children, style }) => {
  return (
    <Title level={level} style={style}>
      {children}
    </Title>
  );
};

export default TitleText;