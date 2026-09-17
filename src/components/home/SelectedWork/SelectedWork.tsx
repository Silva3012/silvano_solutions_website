import React from 'react';
import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { ProjectCard } from '../../work/ProjectCard/ProjectCard';
import { Button } from '../../common/Button/Button';
import { projectsData } from '../../../data/projectsData';
import { ArrowRight } from 'lucide-react';
import './SelectedWork.css';

export const SelectedWork: React.FC = () => {
  return (
    <section className="section selected-work-section" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected work"
          description="Proof of concept prototypes and functional demonstrations showing how we design architectures, automate workflows, and apply modern technology."
        />

        <div className="grid-3 selected-work-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="selected-work-cta">
          <Button to="/work" variant="outline" size="md">
            <span>Explore all projects & technical details</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};
