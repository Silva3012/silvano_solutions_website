import React from 'react';
import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { Card } from '../../common/Card/Card';
import { audienceData } from '../../../data/audienceData';
import { User, Building2, TrendingUp, Landmark } from 'lucide-react';
import './WhoWeHelp.css';

const audienceIcons: Record<string, React.ReactNode> = {
  'solopreneurs': <User size={22} />,
  'smbs': <Building2 size={22} />,
  'growing-orgs': <TrendingUp size={22} />,
  'public-sector': <Landmark size={22} />,
};

export const WhoWeHelp: React.FC = () => {
  return (
    <section className="section audience-section" id="audience">
      <div className="container">
        <SectionHeader
          title="Built for organisations that are growing"
          description="Technology should scale appropriately to where your company is right now, solving today's bottlenecks without unnecessary overhead."
          align="left"
        />

        <div className="audience-grid">
          {audienceData.map((item) => (
            <Card key={item.id} padding="md" className="audience-card">
              <div className="audience-card-head">
                <span className="audience-icon" aria-hidden="true">
                  {audienceIcons[item.id]}
                </span>
                <h3 className="audience-title">{item.title}</h3>
              </div>
              <p className="audience-desc">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
