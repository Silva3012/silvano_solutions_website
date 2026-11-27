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
    <Card padding="md" className="philosophy-card">
      {/* Icon beside the title, in flow, as on the homepage cards. */}
      <div className="philosophy-card-head">
        <span className="philosophy-icon" aria-hidden="true">{icon}</span>
        <h3 className="philosophy-card-title">{title}</h3>
      </div>
      <p className="philosophy-card-desc">{description}</p>
    </Card>
  );
};
