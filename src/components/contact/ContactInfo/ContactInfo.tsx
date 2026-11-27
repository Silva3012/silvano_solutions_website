import React from 'react';
import { Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';
import { company, companyCredentials } from '../../../data/companyData';
import './ContactInfo.css';

export const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info-panel">
      <div className="contact-info-block">
        <h2 className="contact-info-heading">Direct contact</h2>
        <p className="contact-info-sub">
          Reach out directly to start a conversation regarding your project or business technology needs.
        </p>

        <div className="contact-channel-list">
          <div className="contact-channel-item">
            <div className="channel-icon-wrap" aria-hidden="true">
              <Mail size={18} />
            </div>
            <div>
              <span className="channel-label">Email</span>
              <a href={`mailto:${company.email}`} className="channel-value">
                {company.email}
              </a>
            </div>
          </div>

          <div className="contact-channel-item">
            <div className="channel-icon-wrap" aria-hidden="true">
              <MapPin size={18} />
            </div>
            <div>
              <span className="channel-label">Base</span>
              <span className="channel-value-static">
                {company.city}, {company.country} · Serving clients locally and abroad
              </span>
            </div>
          </div>

          <div className="contact-channel-item">
            <div className="channel-icon-wrap" aria-hidden="true">
              <Building2 size={18} />
            </div>
            <div>
              <span className="channel-label">Company</span>
              <span className="channel-value-static">{company.legalName}</span>
              <span className="channel-value-static channel-value-block">
                Reg. {company.registrationNumber}
              </span>
              {companyCredentials().map((item) => (
                <span key={item} className="channel-value-static channel-value-block">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="contact-channel-item">
            <div className="channel-icon-wrap" aria-hidden="true">
              <Clock size={18} />
            </div>
            <div>
              <span className="channel-label">Response Time</span>
              <span className="channel-value-static">
                Typically within 24 business hours
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-expectations-box">
        <div className="expectations-header">
          <ShieldCheck size={20} className="expectations-icon" />
          <h3 className="expectations-title">What happens next?</h3>
        </div>
        <ul className="expectations-list">
          <li>
            <CheckCircle2 size={16} className="expectation-check" />
            <span>We review your requirements and business workflow.</span>
          </li>
          <li>
            <CheckCircle2 size={16} className="expectation-check" />
            <span>We schedule a free 30-minute discovery call.</span>
          </li>
          <li>
            <CheckCircle2 size={16} className="expectation-check" />
            <span>You receive clear recommendations on feasibility and next steps.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
