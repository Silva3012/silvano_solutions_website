import React from 'react';
import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { Card } from '../../common/Card/Card';
import { problemsData } from '../../../data/problemsData';
import { RefreshCw, Unlink, TrendingUp, Sparkles } from 'lucide-react';
import './Problems.css';

const problemIcons: Record<string, React.ReactNode> = {
  'manual-processes': <RefreshCw size={22} className="problem-icon" />,
  'disconnected-tools': <Unlink size={22} className="problem-icon" />,
  'growing-operations': <TrendingUp size={22} className="problem-icon" />,
  'ai-opportunities': <Sparkles size={22} className="problem-icon" />,
};

export const Problems: React.FC = () => {
  return (
    <section className="section problems-section" id="problems">
      <div className="container">
        <SectionHeader
          eyebrow="Problems We Solve"
          title="Technology should solve a business problem — not create another one."
          description="Most businesses do not need more complex software. They need technology that directly removes friction and makes operations reliable."
        />

        <div className="grid-4 problems-grid">
          {problemsData.map((problem) => (
            <Card key={problem.id} padding="md" hoverable className="problem-card">
              <div className="problem-icon-wrapper">
                {problemIcons[problem.id]}
              </div>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-desc">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
