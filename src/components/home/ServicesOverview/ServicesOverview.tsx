import React from 'react';
import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { Button } from '../../common/Button/Button';
import { servicesData } from '../../../data/servicesData';
import {
  Layers,
  Cpu,
  Workflow,
  Code2,
  Compass,
  ArrowRight,
} from 'lucide-react';
import './ServicesOverview.css';

const serviceIcons: Record<string, React.ReactNode> = {
  'application-development': <Layers size={22} />,
  'ai-solutions': <Cpu size={22} />,
  'automation-integrations': <Workflow size={22} />,
  'software-engineering': <Code2 size={22} />,
  'technology-consulting': <Compass size={22} />,
};

export const ServicesOverview: React.FC = () => {
  return (
    <section className="section section-alt services-overview-section" id="services">
      <div className="container services-layout">
        <SectionHeader
          title="What we do"
          description="From custom software and AI implementations to integrating the tools you rely on every day."
          align="left"
          className="services-intro"
        />

        <ul className="services-list">
          {servicesData.map((service) => (
            <li key={service.id} className="services-item">
              <span className="services-item-icon" aria-hidden="true">
                {serviceIcons[service.id]}
              </span>
              <div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDescription}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="services-cta-wrap">
          <Button to="/services" variant="outline" size="md">
            <span>See services and deliverables</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};
