import React, { useEffect } from 'react';
import { SectionHeader } from '../../components/common/SectionHeader/SectionHeader';
import { ProjectCard } from '../../components/work/ProjectCard/ProjectCard';
import { FinalCta } from '../../components/home/FinalCta/FinalCta';
import { projectsData } from '../../data/projectsData';
import { Info } from 'lucide-react';
import './WorkPage.css';

export const WorkPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Selected Work & POCs — Silvano Solutions';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="work-page">
      <section className="section work-hero">
        <div className="container">
          <SectionHeader
            eyebrow="Our Portfolio"
            title="Selected work and functional proofs of concept."
            description="We build working prototypes, internal demonstrations, and language systems to validate technical architectures before full rollout."
            align="center"
          />

          <div className="work-integrity-notice">
            <Info size={20} className="notice-icon" />
            <div className="notice-content">
              <strong>Transparent Portfolio Policy</strong>
              <p>
                Silvano Solutions is an establishing technology firm. We explicitly distinguish
                between commercial projects, proofs of concept (POC), and technical demonstrations.
                We do not invent client statistics or claim deployments that do not exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-grid-section">
        <div className="container">
          <div className="grid-3 work-page-grid">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
};
