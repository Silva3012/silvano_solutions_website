import React from 'react';
import { Button } from '../../common/Button/Button';
import { ArrowRight, MessageSquare, Mail } from 'lucide-react';
import './FinalCta.css';

export const FinalCta: React.FC = () => {
  return (
    <section className="section final-cta-section">
      <div className="container">
        <div className="final-cta-card">
          <div className="final-cta-content">
            <span className="final-cta-tag">Direct Collaboration</span>
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
              <a href="mailto:info@silvanosolutions.co.za" className="direct-email-link">
                <Mail size={16} />
                <span>Or email directly</span>
              </a>
            </div>
          </div>
          <div className="final-cta-side-note">
            <div className="side-note-item">
              <MessageSquare size={18} className="side-note-icon" />
              <div>
                <strong>No obligations</strong>
                <p>An honest discussion about technical feasibility and roadmap.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
