import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowRight } from 'lucide-react';
import { company, companyCredentials } from '../../../data/companyData';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link" aria-label="Silvano Solutions">
              <img
                src="/brand/Silvano_Solutions_Primary_Horizontal_Logo.svg"
                alt="Silvano Solutions"
                className="footer-logo"
              />
            </Link>
            <p className="footer-tagline">
              Technology should solve a business problem — not create another one.
            </p>
            <div className="footer-meta">
              <div className="footer-meta-item">
                <MapPin size={16} className="footer-meta-icon" />
                <span>
                  {company.city}, {company.country}
                </span>
              </div>
              <div className="footer-meta-item">
                <Mail size={16} className="footer-meta-icon" />
                  <a href="mailto:info@silvanosolutions.co.za" className="footer-meta-link">
                  info@silvanosolutions.co.za
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Focus Areas</h4>
            <ul className="footer-nav-list">
              <li>Application Development</li>
              <li>AI Solutions</li>
              <li>Automation & Integrations</li>
              <li>Software Engineering</li>
              <li>Technology Consulting</li>
            </ul>
          </div>

          {/* Contact Direct Callout */}
          <div className="footer-cta-col">
            <h4 className="footer-heading">Free first call</h4>
            <p className="footer-cta-text">
              A free 30-minute call to talk through your problem. We typically reply within 24
              business hours.
            </p>
            <Link to="/contact" className="footer-cta-btn">
              <span>Start a conversation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p className="copyright">
              © {currentYear} {company.legalName} ·{' '}
              <span className="nowrap">Reg. {company.registrationNumber}</span>
            </p>
            <p className="copyright">
              {company.tradingName} is a trading name of {company.legalName}.
            </p>
            {companyCredentials().map((item) => (
              <p key={item} className="copyright">
                {item}
              </p>
            ))}
          </div>
          <p className="footer-note">
            Practical technology systems designed for business growth.
          </p>
        </div>
      </div>
    </footer>
  );
};
