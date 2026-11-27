import React from 'react';
import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { processData } from '../../../data/processData';
import './HowWeWork.css';

export const HowWeWork: React.FC = () => {
  return (
    <section className="section how-we-work-section" id="process">
      <div className="container">
        <SectionHeader
          title="From business problem to working solution."
          description="A straightforward, disciplined approach focused on understanding what you actually need before writing code."
          align="left"
        />

        {/* A real sequence: an ordered list joined by one rule, not separate boxes. */}
        <ol className="process-steps">
          {processData.map((stage) => (
            <li key={stage.step} className="process-step">
              <span className="process-number" aria-hidden="true">{stage.step}</span>
              <h3 className="process-title">{stage.title}</h3>
              <p className="process-desc">{stage.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
