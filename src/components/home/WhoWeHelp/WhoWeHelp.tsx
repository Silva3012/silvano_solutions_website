import React from 'react';
import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { Card } from '../../common/Card/Card';
import { audienceData } from '../../../data/audienceData';
import { User, Building2, TrendingUp } from 'lucide-react';
import './WhoWeHelp.css';

const audienceIcons: Record<string, React.ReactNode> = {
  'solopreneurs': <User size={24} />,
  'smbs': <Building2 size={24} />,
  'growing-orgs': <TrendingUp size={24} />,
};

export const WhoWeHelp: React.FC = () => {
  return (
    <section className="section audience-section" id="audience">
      <div className="container">
        <SectionHeader
          eyebrow="Target Audience"
          title="Built for businesses that are growing"
          description="Technology should scale appropriately to where your company is right now, solving today's bottlenecks without unnecessary overhead."
        />

        <div className="grid-3 audience-grid">
          {audienceData.map((item) => (
            <Card key={item.id} padding="lg" hoverable className="audience-card">
              <div className="audience-icon-box">
                {audienceIcons[item.id]}
              </div>
              <h3 className="audience-title">{item.title}</h3>
              <p className="audience-desc">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
