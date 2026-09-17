import React from 'react';
import type { ProjectItem } from '../../../types';
import { Card } from '../../common/Card/Card';
import { Badge } from '../../common/Badge/Badge';
import { Layers, Cpu, Workflow, CheckCircle } from 'lucide-react';
import './ProjectCard.css';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Business Application':
        return <Layers size={18} />;
      case 'AI / NLP':
        return <Cpu size={18} />;
      case 'Business Automation':
        return <Workflow size={18} />;
      default:
        return <Layers size={18} />;
    }
  };

  return (
    <Card padding="lg" hoverable className="project-card">
      <div className="project-card-top">
        <div className="project-category-meta">
          <span className="project-category-icon">
            {getCategoryIcon(project.category)}
          </span>
          <span className="project-category-name">{project.category}</span>
        </div>
        <Badge variant={project.badgeType} size="md">
          {project.badge}
        </Badge>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-capabilities-section">
        <h4 className="capabilities-label">Demonstrates:</h4>
        <ul className="capabilities-list">
          {project.demonstrates.map((item, idx) => (
            <li key={idx} className="capability-item">
              <CheckCircle size={14} className="capability-check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-card-honest-note">
        <span className="honest-dot"></span>
        <span className="honest-text">
          {project.badgeType === 'poc' && 'Proof of concept architecture & functional prototype.'}
          {project.badgeType === 'nlp' && 'Applied linguistic research & data engineering initiative.'}
          {project.badgeType === 'demo' && 'Functional demonstration workflow for operations.'}
        </span>
      </div>
    </Card>
  );
};
