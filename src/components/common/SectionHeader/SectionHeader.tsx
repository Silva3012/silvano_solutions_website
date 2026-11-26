import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  inverted?: boolean;
  className?: string;
  /** Use 'h1' when this header is the page's main title. */
  as?: 'h1' | 'h2';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  inverted = false,
  className = '',
  as: Heading = 'h2',
}) => {
  return (
    <div
      className={`section-header section-header-${align} ${
        inverted ? 'section-header-inverted' : ''
      } ${className}`.trim()}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <Heading className="section-title">{title}</Heading>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};
