import React, { useEffect } from 'react';
import { Hero } from '../../components/home/Hero/Hero';
import { ServicesOverview } from '../../components/home/ServicesOverview/ServicesOverview';
import { WhoWeHelp } from '../../components/home/WhoWeHelp/WhoWeHelp';
import { HowWeWork } from '../../components/home/HowWeWork/HowWeWork';
import { SelectedWork } from '../../components/home/SelectedWork/SelectedWork';
import { WhyUs } from '../../components/home/WhyUs/WhyUs';
import { FinalCta } from '../../components/home/FinalCta/FinalCta';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Silvano Solutions — Practical Technology for Businesses Ready to Grow';
  }, []);

  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhoWeHelp />
      <HowWeWork />
      <SelectedWork />
      <WhyUs />
      <FinalCta />
    </>
  );
};
