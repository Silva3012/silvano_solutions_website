import React from 'react';
import { Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './ContactInfo.css';

export const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info-panel">
      <div className="contact-info-block">
        <h3 className="contact-info-heading">Direct Contact</h3>
        <p className="contact-info-sub">
          Reach out directly to start a conversation regarding your project or business technology needs.
        </p>

        <div className="contact-channel-list">
          <div className="contact-channel-item">
            <div className="channel-icon-wrap">
              <Mail size={18} />
            </div>
            <div>
              <span className="channel-label">Email</span>
              <a href="mailto:silvanosolutions@gmail.com" className="channel-value">
                silvanosolutions@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-channel-item">
            <div className="channel-icon-wrap">
              <MapPin size={18} />
            </div>
            <div>
              <span className="channel-label">Base</span>
              <span className="channel-value-static">
                South Africa • Serving clients locally and abroad
              </span>
            </div>
          </div>

          <div className="contact-channel-item">
            <div className="channel-icon-wrap">
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
          <h4 className="expectations-title">What happens next?</h4>
        </div>
        <ul className="expectations-list">
          <li>
            <CheckCircle2 size={16} className="expectation-check" />
            <span>We review your requirements and business workflow.</span>
          </li>
          <li>
            <CheckCircle2 size={16} className="expectation-check" />
            <span>We schedule a direct, 30-minute discovery conversation.</span>
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
