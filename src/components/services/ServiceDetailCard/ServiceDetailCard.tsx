import React from 'react';
import type { ServiceItem } from '../../../types';
import { Card } from '../../common/Card/Card';
import { Button } from '../../common/Button/Button';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import './ServiceDetailCard.css';

interface ServiceDetailCardProps {
  service: ServiceItem;
}

export const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ service }) => {
  return (
    // The id makes each service linkable, e.g. /services#ai-solutions (used by the footer).
    <Card padding="lg" className="service-detail-card" id={service.id}>
      <div className="service-detail-header">
        <h2 className="service-detail-title">{service.title}</h2>
      </div>

      <div className="service-detail-description">
        <h3 className="detail-subheading">What it is</h3>
        <p className="detail-body-text">{service.detailedDescription}</p>
      </div>

      <div className="service-detail-columns">
        <div className="detail-col">
          <h3 className="detail-col-heading">
            <AlertCircle size={16} className="col-icon col-icon-problem" aria-hidden="true" />
            <span>Typical Business Problems Addressed</span>
          </h3>
          <ul className="detail-list">
            {service.typicalProblems.map((problem, i) => (
              <li key={i} className="detail-list-item">
                <span className="bullet-problem" aria-hidden="true">•</span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-col">
          <h3 className="detail-col-heading">
            <CheckCircle2 size={16} className="col-icon col-icon-deliverable" aria-hidden="true" />
            <span>What We Can Deliver</span>
          </h3>
          <ul className="detail-list">
            {service.whatWeDeliver.map((deliverable, i) => (
              <li key={i} className="detail-list-item">
                <span className="bullet-deliverable" aria-hidden="true">✓</span>
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="service-detail-cta">
        <Button to={`/contact?service=${service.id}`} variant="primary" size="md">
          <span>Discuss {service.title}</span>
          <ArrowRight size={16} />
        </Button>
      </div>
    </Card>
  );
};
