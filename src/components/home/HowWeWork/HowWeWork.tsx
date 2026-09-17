import React from 'react';
import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { Card } from '../../common/Card/Card';
import { processData } from '../../../data/processData';
import './HowWeWork.css';

export const HowWeWork: React.FC = () => {
  return (
    <section className="section section-alt how-we-work-section" id="process">
      <div className="container">
        <SectionHeader
          eyebrow="Our Process"
          title="From business problem to working solution."
          description="A straightforward, disciplined approach focused on understanding what you actually need before writing code."
        />

        <div className="process-grid">
          {processData.map((stage) => (
            <Card key={stage.step} padding="md" className="process-card">
              <div className="process-step-indicator">
                <span className="process-number">{stage.step}</span>
              </div>
              <h3 className="process-title">{stage.title}</h3>
              <p className="process-desc">{stage.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
