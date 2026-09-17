import React from 'react';
import { Card } from '../../common/Card/Card';
import './PhilosophyCard.css';

interface PhilosophyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const PhilosophyCard: React.FC<PhilosophyCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card padding="md" hoverable className="philosophy-card">
      <div className="philosophy-icon-wrap">{icon}</div>
      <h3 className="philosophy-card-title">{title}</h3>
      <p className="philosophy-card-desc">{description}</p>
    </Card>
  );
};
