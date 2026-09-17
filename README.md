# Silvano Solutions

Marketing website for Silvano Solutions, built with React, TypeScript, and Vite.

## Features

- Home, services, work, about, and contact pages
- Responsive layout for desktop and mobile
- Contact form delivered through FormSubmit
- Direct email links to `silvanosolutions@gmail.com`
- Client-side routing with React Router

## Requirements

- Node.js 20 or newer
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print the local URL, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Contact Form Setup

The contact form submits directly from the browser to FormSubmit at:

```text
https://formsubmit.co/ajax/silvanosolutions@gmail.com
```

No backend, environment variables, or additional packages are required.

After the first deployment:

1. Open the deployed website and submit a test inquiry from `/contact`.
2. Check `silvanosolutions@gmail.com` for FormSubmit's activation email.
3. Click the activation link in that email.
4. Submit another test inquiry and confirm that it arrives in the inbox.

Until the FormSubmit activation link is confirmed, delivery may not work. Check the spam folder if the activation email does not appear.

## Production Build

Build the site before deploying:

```bash
npm run build
```

Deploy the generated `dist/` directory to a static hosting provider such as Netlify, Vercel, GitHub Pages, or Cloudflare Pages.

Because the site uses client-side routes, configure the hosting provider to serve `index.html` as a fallback for routes such as `/services`, `/work`, `/about`, and `/contact`.

## Project Structure

```text
src/
  components/   Reusable page and UI components
  data/         Service, audience, process, problem, and project content
  pages/        Route-level page components
  styles/       Global styles and design variables
  types/        Shared TypeScript types
```

## Deployment Checklist

- Run `npm run build` successfully.
- Deploy the contents of `dist/`.
- Configure SPA fallback routing to `index.html`.
- Submit a real test inquiry after deployment.
- Activate FormSubmit from the email sent to `silvanosolutions@gmail.com`.
- Submit a second test inquiry and verify delivery.
