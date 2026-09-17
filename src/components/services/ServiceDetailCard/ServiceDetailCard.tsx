import React from 'react';
import type { ServiceItem } from '../../../types';
import { Card } from '../../common/Card/Card';
import { Button } from '../../common/Button/Button';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import './ServiceDetailCard.css';

interface ServiceDetailCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ service, index }) => {
  return (
    <Card padding="lg" className="service-detail-card">
      <div className="service-detail-header">
        <span className="service-detail-index">0{index + 1}</span>
        <h3 className="service-detail-title">{service.title}</h3>
      </div>

      <div className="service-detail-description">
        <h4 className="detail-subheading">What it is</h4>
        <p className="detail-body-text">{service.detailedDescription}</p>
      </div>

      <div className="service-detail-columns">
        <div className="detail-col">
          <h4 className="detail-col-heading">
            <AlertCircle size={16} className="col-icon col-icon-problem" />
            <span>Typical Business Problems Addressed</span>
          </h4>
          <ul className="detail-list">
            {service.typicalProblems.map((problem, i) => (
              <li key={i} className="detail-list-item">
                <span className="bullet-problem">•</span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-col">
          <h4 className="detail-col-heading">
            <CheckCircle2 size={16} className="col-icon col-icon-deliverable" />
            <span>What We Can Deliver</span>
          </h4>
          <ul className="detail-list">
            {service.whatWeDeliver.map((deliverable, i) => (
              <li key={i} className="detail-list-item">
                <span className="bullet-deliverable">✓</span>
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
