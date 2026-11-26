import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { ProjectCard } from '../../work/ProjectCard/ProjectCard';
import { Button } from '../../common/Button/Button';
import { projectsData } from '../../../data/projectsData';
import { ArrowRight } from 'lucide-react';
import './SelectedWork.css';

export const SelectedWork: React.FC = () => {
  return (
    <section className="section section-alt selected-work-section" id="work">
      <div className="container">
        <div className="selected-work-head">
          <SectionHeader
            title="Selected work"
            description="Working prototypes and demonstrations, labelled honestly for what they are."
            align="left"
            className="selected-work-header"
          />
          <Link to="/work" className="selected-work-all">
            <span>See all projects</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="selected-work-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>

        {/* Mid-page call to action, so visitors don't have to reach the end of the page. */}
        <div className="selected-work-cta">
          <p className="selected-work-cta-text">Have a similar problem in your organisation?</p>
          <Button to="/contact" variant="primary" size="md" className="selected-work-cta-btn">
            <span>Start a conversation</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};
