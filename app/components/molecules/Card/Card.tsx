import React from 'react';
import { Card, Button, Typography, Tag, Space } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;


interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[]; 
  imageUrl: string;
  repoUrl: string; 
  liveUrl?: string; 
}


const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  repoUrl, 
  liveUrl 
}) => {
  return (

    <Card
      hoverable 
      style={{ width: 350, minHeight: 450 }}
      cover={<img alt={title} src={imageUrl} style={{ height: 200, objectFit: 'cover' }} />}
    
      actions={[
        <Button type="text" icon={<GithubOutlined />} href={repoUrl} target="_blank">
          GitHub
        </Button>,
        liveUrl && ( 
          <Button type="link" icon={<LinkOutlined />} href={liveUrl} target="_blank">
            Ver Demo
          </Button>
        ),
      ]}
    >
      <Title level={4}>{title}</Title>
      <Paragraph ellipsis={{ rows: 3 }}>{description}</Paragraph>
      <Space wrap size={[0, 8]} style={{ marginBottom: 10 }}>
        {technologies.map((tech) => (
          <Tag key={tech} color="blue">
            {tech}
          </Tag>
        ))}
      </Space>
    </Card>
  );
};

export default ProjectCard;