import React from 'react';
import { Button } from '../../common/Button/Button';
import { ArrowRight } from 'lucide-react';
import { company } from '../../../data/companyData';
import { PrincipalLink } from '../../common/PrincipalLink/PrincipalLink';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-headline">
            Practical technology for businesses ready to grow.
          </h1>

          <p className="hero-copy">
            We design and build software, AI solutions and digital systems that help businesses
            automate operations, solve real problems and scale with confidence.
          </p>

          <div className="hero-actions">
            <Button to="/contact" variant="primary" size="lg" className="hero-primary-btn">
              <span>Start a conversation</span>
              <ArrowRight size={18} />
            </Button>
            <Button to="/work" variant="secondary" size="lg">
              See our work
            </Button>
          </div>

          {/* Credibility line: confirmed company facts only (see src/data/companyData.ts). */}
          <ul className="hero-credentials" aria-label="Company details">
            <li>{company.legalName}</li>
            <li>{company.city}</li>
            <li>
              Led by <PrincipalLink />, {company.principal.role}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
