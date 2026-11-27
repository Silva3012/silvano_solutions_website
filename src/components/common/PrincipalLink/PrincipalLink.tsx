import React from 'react';
import { company } from '../../../data/companyData';
import './PrincipalLink.css';

/**
 * The principal's name, linked to their personal site (new tab).
 * Use where the site introduces who runs the business, not inside
 * calls to action or legal text, where a link would distract.
 */
export const PrincipalLink: React.FC = () => (
  <a
    className="principal-link"
    href={company.principal.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {company.principal.name}
    <span className="sr-only"> (personal site, opens in a new tab)</span>
  </a>
);
