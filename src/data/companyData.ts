/**
 * Single source of truth for company and credential details shown on the site.
 *
 * Only put confirmed facts here. Optional credentials render automatically
 * wherever the site shows company details once they are filled in, and render
 * nothing while they are null/false — so never fill one in "in advance".
 */
export interface CompanyDetails {
  tradingName: string;
  legalName: string;
  registrationNumber: string;
  city: string;
  country: string;
  principal: { name: string; role: string };
  email: string;
  /** Set only once the EME sworn affidavit is signed and commissioned. */
  bbbee: { level: string; recognition: string } | null;
  /** Set to true only once the Information Officer is registered with the Information Regulator. */
  informationOfficerRegistered: boolean;
}

export const company: CompanyDetails = {
  tradingName: 'Silvano Solutions',
  legalName: 'Ntsika Silvano Holdings (Pty) Ltd',
  registrationNumber: '2024/493452/07',
  city: 'Cape Town',
  country: 'South Africa',
  principal: { name: 'Ntsika Silvano', role: 'Principal' },
  email: 'info@silvanosolutions.co.za',
  bbbee: null, // e.g. { level: 'Level 1 (EME)', recognition: '135%' } once the affidavit is signed
  informationOfficerRegistered: false,
};

/** Optional credential statements, in display order. Empty until each is confirmed. */
export const companyCredentials = (): string[] => {
  const items: string[] = [];
  if (company.bbbee) {
    items.push(`B-BBEE ${company.bbbee.level} · ${company.bbbee.recognition} procurement recognition`);
  }
  if (company.informationOfficerRegistered) {
    items.push('Information Officer registered with the Information Regulator (POPIA)');
  }
  return items;
};
