import React, { useEffect } from 'react';
import { SectionHeader } from '../../components/common/SectionHeader/SectionHeader';
import { ServiceDetailCard } from '../../components/services/ServiceDetailCard/ServiceDetailCard';
import { FinalCta } from '../../components/home/FinalCta/FinalCta';
import { servicesData } from '../../data/servicesData';
import './ServicesPage.css';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Services — Silvano Solutions';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <section className="section services-hero">
        <div className="container">
          <SectionHeader
            eyebrow="Our Services"
            title="Practical capabilities engineered for business problems."
            description="We partner with businesses to build custom software, implement pragmatic AI, integrate systems, and establish technical direction that supports growth."
            align="center"
          />
        </div>
      </section>

      <section className="section services-list-section">
        <div className="container">
          <div className="services-detail-list">
            {servicesData.map((service, index) => (
              <ServiceDetailCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
};
