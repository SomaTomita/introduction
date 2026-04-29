# Personal Portfolio & Blog

A personal blog and portfolio website created to help people get to know more about me, Soma Tomita. Visit the live site at [introduction-flame.vercel.app](https://introduction-flame.vercel.app).

## Key Features

- Blog post functionality
- Portfolio showcase
- Social media integration
- Dynamic content management through microCMS
- Image optimization
- Font Awesome icon integration
- Responsive modern design
- End-to-end TypeScript with runtime schema validation

## Technology Stack

### Frontend

- Next.js (^16.2.4)
- React (^18)
- React DOM (^18)
- TypeScript (^6.0.3)

### Content Management

- microCMS JS SDK (^2.7.0)

### Validation

- zod (^4.3.6) — environment variable + microCMS response validation

### UI/UX

- Font Awesome Icons
  - @fortawesome/fontawesome-svg-core (^6.5.1)
  - @fortawesome/free-brands-svg-icons (^6.5.1)
  - @fortawesome/free-regular-svg-icons (^6.5.1)
  - @fortawesome/free-solid-svg-icons (^6.5.1)
  - @fortawesome/react-fontawesome (^0.2.0)

### Utilities

- date-fns (^3.3.1)
- html-react-parser (^5.1.1)
- html-to-text (^9.0.5)
- sharp (^0.33.2)
- plaiceholder (^3.0.0)

### Development Tools

- ESLint (^9.39.4) with flat config
- eslint-config-next (^16.2.4)
- eslint-config-prettier (10.1.8)
- Prettier (3.8.3)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your microCMS credentials:

```bash
cp .env.example .env.local
```

| Variable         | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `SERVICE_DOMAIN` | The `<domain>` part of your microCMS URL `https://<domain>.microcms.io` |
| `API_KEY`        | API key issued from microCMS admin (`API設定 → APIキー管理`)            |

Both variables are validated at startup via `src/lib/env.ts`. The app fails fast with a descriptive error if either is missing.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the Next.js dev server (Turbopack) |
| `npm run build`        | Production build                         |
| `npm run start`        | Start the production server              |
| `npm run lint`         | Run ESLint over the project              |
| `npm run format`       | Format the codebase with Prettier        |
| `npm run format:check` | Check formatting without writing changes |

## Project Structure

```
src/
├── components/   # React components (.tsx)
│   ├── layout/   # Header, Footer, Container, Layout, TwoColumn
│   └── post/     # Post-specific components
├── lib/          # API client, env validation, zod schemas, logger
├── pages/        # Next.js pages (.tsx)
├── styles/       # CSS Modules
├── types/        # Shared TypeScript types and global declarations
└── images/       # Static images
```

## Code Style

- **Indent**: tabs (width 2)
- **Quotes**: single
- **Semicolons**: none
- **Trailing commas**: all
- **Print width**: 100

These rules are encoded in `.prettierrc.json` and enforced via `npm run format:check`. ESLint is configured to defer all stylistic rules to Prettier through `eslint-config-prettier`.

## Deployment

This project is deployed on [Vercel](https://vercel.com), the platform created by the team behind Next.js. Set `SERVICE_DOMAIN` and `API_KEY` in the Vercel project's environment variables.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
