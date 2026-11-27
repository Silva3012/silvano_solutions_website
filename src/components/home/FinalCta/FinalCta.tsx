import React from 'react';
import { Button } from '../../common/Button/Button';
import { ArrowRight, Mail, Check } from 'lucide-react';
import { company } from '../../../data/companyData';
import './FinalCta.css';

export const FinalCta: React.FC = () => {
  return (
    <section className="section final-cta-section">
      <div className="container">
        <div className="final-cta-card">
          <div className="final-cta-content">
            <h2 className="final-cta-title">
              Have a business problem that technology could solve?
            </h2>
            <p className="final-cta-copy">
              Tell us what you're trying to improve, automate or build. We'll help you work out
              what the right solution could look like.
            </p>
            <div className="final-cta-actions">
              <Button to="/contact" variant="primary" size="lg" className="final-cta-btn">
                <span>Start a conversation</span>
                <ArrowRight size={18} />
              </Button>
              <a href={`mailto:${company.email}`} className="direct-email-link">
                <Mail size={16} aria-hidden="true" />
                <span>
                  or email <span className="nowrap">{company.email}</span>
                </span>
              </a>
            </div>
          </div>

          {/* What happens next: only promises already made on the Contact page. */}
          <div className="final-cta-side-note">
            <h3 className="side-note-title">What happens next</h3>
            <ul className="side-note-list">
              <li>
                <Check size={16} className="side-note-icon" aria-hidden="true" />
                <span>
                  {company.principal.name} reviews your enquiry and replies, typically within 24
                  business hours.
                </span>
              </li>
              <li>
                <Check size={16} className="side-note-icon" aria-hidden="true" />
                <span>Your first 30-minute call is free, with no obligation.</span>
              </li>
              <li>
                <Check size={16} className="side-note-icon" aria-hidden="true" />
                <span>You get clear recommendations on feasibility and next steps.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
