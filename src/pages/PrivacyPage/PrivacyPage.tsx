import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { company } from '../../data/companyData';
import './PrivacyPage.css';

/*
 * POPIA privacy notice, drafted for the owner's review. Before relying on it:
 * - confirm the retention period and the security wording reflect actual practice;
 * - have it checked by a POPIA practitioner;
 * - update LAST_UPDATED whenever the content changes.
 */
const LAST_UPDATED = '26 November 2026';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy notice — Silvano Solutions';
  }, []);

  return (
    <section className="section privacy-page">
      <div className="container privacy-inner">
        <h1 className="privacy-title">Privacy notice</h1>
        <p className="privacy-updated">Last updated {LAST_UPDATED}</p>

        <p>
          This notice explains what personal information {company.tradingName} collects through
          this website, why, and what your rights are under the Protection of Personal
          Information Act (POPIA).
        </p>

        <h2>Who we are</h2>
        <p>
          {company.tradingName} is a trading name of {company.legalName} (registration number{' '}
          {company.registrationNumber}), based in {company.city}, {company.country}. We are the
          responsible party for the personal information described here. Our Information Officer
          is {company.principal.name}, who you can reach at{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>

        <h2>What we collect</h2>
        <p>When you use our contact form or email us, we collect:</p>
        <ul>
          <li>your name and email address;</li>
          <li>your company or business name, if you give it;</li>
          <li>the service you're interested in, if you choose one;</li>
          <li>anything you write in your message.</li>
        </ul>
        <p>
          We don't use analytics, tracking or advertising cookies on this website.
        </p>

        <h2>Why we use it</h2>
        <p>
          We use your information only to respond to your enquiry and, if you decide to work with
          us, to discuss and deliver that work. We don't add you to marketing lists, and we never
          sell or share your information for anyone else's marketing.
        </p>

        <h2>Who processes it for us</h2>
        <p>A small number of service providers handle information on our behalf:</p>
        <ul>
          <li>
            <strong>FormSubmit</strong> (formsubmit.co) relays messages from our contact form to
            our inbox. It may process your information outside South Africa.
          </li>
          <li>
            <strong>Our email hosting provider</strong> stores the messages we send and receive.
          </li>
          <li>
            <strong>Our website hosting provider</strong> serves this website and may keep
            standard technical logs, such as IP addresses.
          </li>
          <li>
            <strong>Google Fonts</strong> supplies this website's typeface, so your browser
            connects to Google's servers, which receive your IP address.
          </li>
        </ul>

        <h2>How long we keep it</h2>
        <p>
          We keep enquiry details for up to 12 months after our last contact with you. If you
          become a client, we keep your information for as long as we need it to deliver the work
          and meet our legal obligations.
        </p>

        <h2>How we protect it</h2>
        <p>
          We take reasonable steps to keep your information secure, including limiting who can
          access it.
        </p>

        <h2>Your rights</h2>
        <p>Under POPIA you can ask us to:</p>
        <ul>
          <li>tell you what personal information we hold about you;</li>
          <li>correct information that is wrong or out of date;</li>
          <li>delete your information;</li>
          <li>stop using your information.</li>
        </ul>
        <p>
          To do any of these, email <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>

        <h2>Complaints</h2>
        <p>
          If you're unhappy with how we've handled your information, please contact us first so we
          can put it right. You also have the right to complain to the Information Regulator of
          South Africa at{' '}
          <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer">
            inforegulator.org.za
          </a>
          .
        </p>

        <p className="privacy-back">
          <Link to="/contact">Back to the contact page</Link>
        </p>
      </div>
    </section>
  );
};
