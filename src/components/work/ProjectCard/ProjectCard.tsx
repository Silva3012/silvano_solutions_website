import React from 'react';
import type { ProjectItem } from '../../../types';
import { Card } from '../../common/Card/Card';
import { Badge } from '../../common/Badge/Badge';
import { Layers, Cpu, Workflow, CheckCircle } from 'lucide-react';
import './ProjectCard.css';

interface ProjectCardProps {
  project: ProjectItem;
  /** Homepage teaser: badge, title and one-line summary only. */
  compact?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, compact = false }) => {
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

  if (compact) {
    return (
      <Card padding="md" className="project-card project-card-compact">
        <div className="project-card-top">
          <Badge variant={project.badgeType} size="md">
            {project.badge}
          </Badge>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.summary}</p>
      </Card>
    );
  }

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
        <h4 className="capabilities-label">Skills shown</h4>
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
          {project.badgeType === 'poc' && 'A working prototype built to prove the approach.'}
          {project.badgeType === 'nlp' && 'Applied language research and data work, in development.'}
          {project.badgeType === 'demo' && 'A demonstration of an operations workflow.'}
        </span>
      </div>
    </Card>
  );
};
