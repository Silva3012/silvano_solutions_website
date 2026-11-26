import React from 'react';
import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { Card } from '../../common/Card/Card';
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
  'application-development': <Layers size={24} />,
  'ai-solutions': <Cpu size={24} />,
  'automation-integrations': <Workflow size={24} />,
  'software-engineering': <Code2 size={24} />,
  'technology-consulting': <Compass size={24} />,
};

export const ServicesOverview: React.FC = () => {
  return (
    <section className="section section-alt services-overview-section" id="services">
      <div className="container">
        <SectionHeader
          title="What we do"
          description="From custom software and AI implementations to integrating the tools you rely on every day."
        />

        <div className="services-grid">
          {servicesData.map((service) => (
            <Card key={service.id} padding="md" className="service-overview-card">
              <div className="service-icon-box" aria-hidden="true">
                {serviceIcons[service.id]}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.shortDescription}</p>
            </Card>
          ))}
        </div>

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
