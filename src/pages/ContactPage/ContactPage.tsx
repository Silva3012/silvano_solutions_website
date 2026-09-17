import React, { useEffect } from 'react';
import { SectionHeader } from '../../components/common/SectionHeader/SectionHeader';
import { Card } from '../../components/common/Card/Card';
import { ContactForm } from '../../components/contact/ContactForm/ContactForm';
import { ContactInfo } from '../../components/contact/ContactInfo/ContactInfo';
import './ContactPage.css';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact — Silvano Solutions';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <section className="section contact-hero">
        <div className="container">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Let's discuss what you are trying to build or automate."
            description="Whether you have an immediate operational bottleneck, need a proof of concept developed, or want to audit your existing tools, we are ready to listen."
            align="center"
          />
        </div>
      </section>

      <section className="section contact-content-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Lead Generation Form */}
            <Card padding="lg" className="contact-form-card">
              <div className="form-header">
                <h3 className="form-main-title">Send an Inquiry</h3>
                <p className="form-sub-title">
                  Fill in your details and we will follow up with practical insights on how to approach your project.
                </p>
              </div>
              <ContactForm />
            </Card>

            {/* Direct Contact & Expectations */}
            <div className="contact-side-col">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
