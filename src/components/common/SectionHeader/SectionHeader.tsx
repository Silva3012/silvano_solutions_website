import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  inverted?: boolean;
  className?: string;
  /** Use 'h1' when this header is the page's main title. */
  as?: 'h1' | 'h2';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
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
      <Heading className="section-title">{title}</Heading>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};
