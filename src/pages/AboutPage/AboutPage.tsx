import React, { useEffect } from 'react';
import { SectionHeader } from '../../components/common/SectionHeader/SectionHeader';
import { PhilosophyCard } from '../../components/about/PhilosophyCard/PhilosophyCard';
import { Card } from '../../components/common/Card/Card';
import { FinalCta } from '../../components/home/FinalCta/FinalCta';
import {
  Sparkles,
  Network,
  Users,
  Layers,
} from 'lucide-react';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About — Silvano Solutions';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="section about-hero">
        <div className="container">
          <SectionHeader
            eyebrow="About Silvano Solutions"
            title="Why does Silvano Solutions exist and how does it think?"
            description="We are a South African technology consultancy founded on a simple premise: technology should solve a business problem — not create another one."
            align="center"
          />
        </div>
      </section>

      {/* Main Narrative & Ethos */}
      <section className="section about-narrative-section">
        <div className="container">
          <div className="narrative-grid">
            <div className="narrative-text">
              <span className="narrative-badge">Our Mission</span>
              <h2 className="narrative-heading">
                Practical systems for businesses that value outcomes over hype.
              </h2>
              <p className="narrative-p">
                Silvano Solutions was founded by <strong>Ntsika Silvano</strong> to bridge the gap
                between business operations and modern technology.
              </p>
              <p className="narrative-p">
                Too many businesses find themselves trapped in one of two extremes: either wrestling
                with manual spreadsheets and disconnected SaaS tools that do not talk to each other,
                or being sold overly complex enterprise systems that drain resources without solving the
                core bottleneck.
              </p>
              <p className="narrative-p">
                We believe in a third way: <strong>pragmatic, tailored digital systems</strong> built
                specifically around how a business operates, how its staff works, and where it is headed.
              </p>
            </div>

            <Card padding="lg" className="narrative-quote-card">
              <div className="quote-mark">“</div>
              <blockquote className="quote-text">
                Technology should solve a business problem — not create another one.
              </blockquote>
              <div className="quote-attribution">
                <span className="quote-name">Silvano Solutions Philosophy</span>
                <span className="quote-location">Johannesburg & Across South Africa</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder-Led Experience */}
      <section className="section section-alt about-experience-section">
        <div className="container">
          <div className="experience-intro">
            <span className="experience-badge">Foundational Background</span>
            <h2 className="experience-title">
              Built on multi-disciplinary operational experience.
            </h2>
            <p className="experience-copy">
              Our engineering decisions are not formed in an academic bubble. They are shaped by
              hands-on, real-world experience across the entire technical and commercial spectrum:
            </p>
          </div>

          <div className="grid-3 experience-pillars">
            <PhilosophyCard
              icon={<Network size={22} />}
              title="IT Support & Infrastructure"
              description="Deep background in physical networking, server configuration, hardware reliability, and frontline troubleshooting. We understand how systems behave when real users touch them."
            />

            <PhilosophyCard
              icon={<Layers size={22} />}
              title="Software Development"
              description="End-to-end full-stack development using modern web technologies, modular architectures, clean APIs, and databases engineered for data integrity and speed."
            />

            <PhilosophyCard
              icon={<Users size={22} />}
              title="Sales & Customer Service"
              description="Commercial and frontline client interaction experience. We know that if a system is confusing or frustrating for staff or customers, it has failed regardless of code quality."
            />
          </div>
        </div>
      </section>

      {/* AI Philosophy */}
      <section className="section about-ai-section">
        <div className="container">
          <div className="ai-philosophy-card">
            <div className="ai-icon-box">
              <Sparkles size={28} />
            </div>
            <div className="ai-content">
              <span className="ai-badge">Our Perspective on AI</span>
              <h2 className="ai-title">An AI-First Approach Grounded in Utility</h2>
              <p className="ai-desc">
                We do not view artificial intelligence as a marketing gimmick. We view it as an
                operational multiplier.
              </p>
              <p className="ai-desc">
                By integrating AI directly into business workflows—such as automated document
                extraction, natural language queries for internal knowledge bases, and language processing
                for multilingual South African environments—we help growing companies achieve operational
                efficiency previously reserved for enterprises with multi-million rand budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section section-alt about-principles-section">
        <div className="container">
          <SectionHeader
            eyebrow="How We Think"
            title="Our Guiding Principles"
            description="The rules that govern every project we accept and every line of code we write."
          />

          <div className="grid-3 principles-grid">
            <Card padding="md" className="principle-card">
              <div className="principle-number">01</div>
              <h3 className="principle-title">Clarity Before Code</h3>
              <p className="principle-desc">
                We diagnose before we prescribe. We will never start building until we have verified
                the actual operational problem that needs to be solved.
              </p>
            </Card>

            <Card padding="md" className="principle-card">
              <div className="principle-number">02</div>
              <h3 className="principle-title">Right-Sized Systems</h3>
              <p className="principle-desc">
                We build what is necessary for your current stage and next milestone. We avoid bloated
                frameworks, complex abstractions, and unnecessary recurring fees.
              </p>
            </Card>

            <Card padding="md" className="principle-card">
              <div className="principle-number">03</div>
              <h3 className="principle-title">Long-Term Maintainability</h3>
              <p className="principle-desc">
                We deliver clean codebases, standard conventions, and transparent documentation so your
                business is never locked into a proprietary black box.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
};
