import React from 'react';
import { Button } from '../../common/Button/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-brand-tag">Silvano Solutions</span>
            <span className="hero-eyebrow-divider">•</span>
            <span className="hero-sub-tag">South African Technology Partner</span>
          </div>

          <h1 className="hero-headline">
            Practical technology for businesses ready to grow.
          </h1>

          <p className="hero-copy">
            We design and build software, AI solutions and digital systems that help businesses
            automate operations, solve real problems and scale with confidence.
          </p>

          <div className="hero-actions">
            <Button to="/contact" variant="primary" size="lg" className="hero-primary-btn">
              <span>Let's discuss your business</span>
              <ArrowRight size={18} />
            </Button>
            <Button to="/work" variant="secondary" size="lg">
              See our work
            </Button>
          </div>

          <div className="hero-commitments">
            <div className="commitment-item">
              <CheckCircle2 size={16} className="commitment-icon" />
              <span>Business-first problem solving</span>
            </div>
            <div className="commitment-item">
              <CheckCircle2 size={16} className="commitment-icon" />
              <span>Pragmatic architectures</span>
            </div>
            <div className="commitment-item">
              <CheckCircle2 size={16} className="commitment-icon" />
              <span>Direct founder communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
