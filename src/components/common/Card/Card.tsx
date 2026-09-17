import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  padding = 'md',
  bordered = true,
}) => {
  return (
    <div
      className={`card card-pad-${padding} ${bordered ? 'card-bordered' : ''} ${
        hoverable ? 'card-hoverable' : ''
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
};
