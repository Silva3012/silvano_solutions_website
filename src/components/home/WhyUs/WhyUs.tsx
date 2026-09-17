import React from 'react';
import { Card } from '../../common/Card/Card';
import { Network, Code, Users, Lightbulb } from 'lucide-react';
import './WhyUs.css';

export const WhyUs: React.FC = () => {
  return (
    <section className="section section-alt why-us-section" id="why-us">
      <div className="container">
        <div className="why-us-intro">
          <span className="why-us-eyebrow">The Silvano Solutions Approach</span>
          <h2 className="why-us-title">
            Technology should fit the business — not the other way around.
          </h2>
          <div className="why-us-copy-wrap">
            <p className="why-us-lead">
              Silvano Solutions combines software engineering, IT infrastructure, business understanding
              and practical problem solving to build technology that works in the real world.
            </p>
            <p className="why-us-sub">
              Our approach is shaped by experience across IT support, networking, software development,
              customer service and sales — giving us a broader understanding of how technology affects the
              people and processes behind a business.
            </p>
          </div>
        </div>

        <div className="grid-4 why-us-grid">
          <Card padding="md" className="why-card">
            <div className="why-icon-wrap">
              <Network size={22} />
            </div>
            <h3 className="why-card-title">Infrastructure & IT Depth</h3>
            <p className="why-card-desc">
              Ground-level experience in systems, networks, and IT support means solutions are built with operational realities in mind.
            </p>
          </Card>

          <Card padding="md" className="why-card">
            <div className="why-icon-wrap">
              <Code size={22} />
            </div>
            <h3 className="why-card-title">Software Engineering</h3>
            <p className="why-card-desc">
              Modern full-stack codebases, clean APIs, and maintainable architectures that do not create future technical debt.
            </p>
          </Card>

          <Card padding="md" className="why-card">
            <div className="why-icon-wrap">
              <Users size={22} />
            </div>
            <h3 className="why-card-title">Sales & Customer Empathy</h3>
            <p className="why-card-desc">
              Experience in client service and sales ensures we build tools that employees and customers actually want to use.
            </p>
          </Card>

          <Card padding="md" className="why-card">
            <div className="why-icon-wrap">
              <Lightbulb size={22} />
            </div>
            <h3 className="why-card-title">Practical AI Adoption</h3>
            <p className="why-card-desc">
              Applying AI where it provides tangible leverage and automation, rather than adding buzzwords to a sales pitch.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
