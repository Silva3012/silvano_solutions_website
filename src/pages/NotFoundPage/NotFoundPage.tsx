import React, { useEffect } from 'react';
import { Button } from '../../components/common/Button/Button';
import { ArrowRight } from 'lucide-react';
import './NotFoundPage.css';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page not found — Silvano Solutions';
    // Ask search engines not to index this "soft 404" (the host still returns 200 for SPA routes).
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  return (
    <section className="section not-found">
      <div className="container not-found-inner">
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-copy">
          The page you're looking for doesn't exist or has moved. Check the address, or use one of
          the links below.
        </p>
        <div className="not-found-actions">
          <Button to="/" variant="primary" size="md">
            Go to the homepage
          </Button>
          <Button to="/contact" variant="outline" size="md">
            <span>Start a conversation</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};
