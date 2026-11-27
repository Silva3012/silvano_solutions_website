import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Only for cards that are themselves clickable; a lift on a static card promises a click that does nothing. */
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
  /** Anchor target, e.g. for /services#ai-solutions. */
  id?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  padding = 'md',
  bordered = true,
  id,
}) => {
  return (
    <div
      id={id}
      className={`card card-pad-${padding} ${bordered ? 'card-bordered' : ''} ${
        hoverable ? 'card-hoverable' : ''
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
};
