import React from 'react';
import { Network, Code, Users, Lightbulb } from 'lucide-react';
import { company } from '../../../data/companyData';
import { PrincipalLink } from '../../common/PrincipalLink/PrincipalLink';
import './WhyUs.css';

const strengths = [
  {
    icon: <Network size={20} />,
    title: 'Infrastructure & IT Depth',
    description:
      'Ground-level experience in systems, networks, and IT support means solutions are built with operational realities in mind.',
  },
  {
    icon: <Code size={20} />,
    title: 'Software Engineering',
    description:
      'Modern full-stack codebases, clean APIs, and maintainable architectures that do not create future technical debt.',
  },
  {
    icon: <Users size={20} />,
    title: 'Sales & Customer Empathy',
    description:
      'Experience in client service and sales ensures we build tools that employees and customers actually want to use.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Practical AI Adoption',
    description:
      'Applying AI where it provides tangible leverage and automation, rather than adding buzzwords to a sales pitch.',
  },
];

export const WhyUs: React.FC = () => {
  return (
    <section className="section section-alt why-us-section" id="why-us">
      <div className="container why-us-layout">
        <div className="why-us-intro">
          <h2 className="why-us-title">Who you'll work with</h2>
          <p className="why-us-lead">
            {company.tradingName} is led by <PrincipalLink />, {company.principal.role}, and
            combines software engineering, IT infrastructure, business understanding and practical
            problem solving to build technology that works in the real world.
          </p>
          <p className="why-us-sub">
            Our approach is shaped by experience across IT support, networking, software development,
            customer service and sales — giving us a broader understanding of how technology affects the
            people and processes behind a business.
          </p>
        </div>

        <ul className="why-us-points">
          {strengths.map((item) => (
            <li key={item.title} className="why-point">
              <div className="why-point-head">
                <span className="why-point-icon" aria-hidden="true">{item.icon}</span>
                <h3 className="why-card-title">{item.title}</h3>
              </div>
              <p className="why-card-desc">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
