import React from 'react';
import type { ProjectItem } from '../../../types';
import { Card } from '../../common/Card/Card';
import { Badge } from '../../common/Badge/Badge';
import { Layers, Cpu, Workflow, ShoppingBag, CheckCircle, ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';

interface ProjectCardProps {
  project: ProjectItem;
  /** Homepage teaser: badge, title and one-line summary only. */
  compact?: boolean;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'E-commerce Platform': <ShoppingBag size={18} />,
  'Business Application': <Layers size={18} />,
  'AI / NLP': <Cpu size={18} />,
  'Business Automation': <Workflow size={18} />,
};

const honestNotes: Record<ProjectItem['badgeType'], string> = {
  beta: 'A public beta: payments run in PayFast’s sandbox, so no real money moves.',
  poc: 'A working prototype built to prove the approach.',
  nlp: 'Applied language research and data work, in development.',
  demo: 'A demonstration of an operations workflow.',
};

/** Screenshot that links to the live project. */
const ProjectMedia: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const { image, link } = project;
  if (!image) return null;
  const img = (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
    />
  );
  return link ? (
    <a
      className="project-media"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.label}: ${project.title} (opens in a new tab)`}
    >
      {img}
    </a>
  ) : (
    <div className="project-media">{img}</div>
  );
};

/** Text link to the live project, announced as opening in a new tab. */
const ProjectLink: React.FC<{ project: ProjectItem }> = ({ project }) =>
  project.link ? (
    <a className="project-link" href={project.link.href} target="_blank" rel="noopener noreferrer">
      <span>{project.link.label}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : null;

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, compact = false }) => {
  const classes = [
    'project-card',
    compact ? 'project-card-compact' : '',
    project.featured ? 'project-card-featured' : '',
    project.image ? 'project-card-has-media' : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (compact) {
    return (
      <Card padding="none" className={classes}>
        <ProjectMedia project={project} />
        <div className="project-body">
          <div className="project-card-top">
            <Badge variant={project.badgeType} size="md">
              {project.badge}
            </Badge>
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.summary}</p>
          <ProjectLink project={project} />
        </div>
      </Card>
    );
  }

  return (
    <Card padding="none" className={classes}>
      <ProjectMedia project={project} />
      <div className="project-body">
        <div className="project-card-top">
          <div className="project-category-meta">
            <span className="project-category-icon" aria-hidden="true">
              {categoryIcons[project.category] ?? <Layers size={18} />}
            </span>
            <span className="project-category-name">{project.category}</span>
          </div>
          <Badge variant={project.badgeType} size="md">
            {project.badge}
          </Badge>
        </div>

        {/* On the Work page these cards sit directly under the page h1. */}
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>

        {/* What the project does for a business, not a list of developer skills. */}
        <div className="project-outcomes-section">
          <h3 className="outcomes-label">What it does</h3>
          <ul className="outcomes-list">
            {project.outcomes.map((item) => (
              <li key={item} className="outcome-item">
                <CheckCircle size={14} className="outcome-check" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <ProjectLink project={project} />

        <div className="project-card-honest-note">
          <span className="honest-dot" aria-hidden="true"></span>
          <span className="honest-text">{honestNotes[project.badgeType]}</span>
        </div>
      </div>
    </Card>
  );
};
