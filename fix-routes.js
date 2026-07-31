import { writeFileSync } from 'fs';

const routes = {
  version: 1,
  description: 'Custom wildcard routes to stay under Cloudflare _routes.json limit',
  include: ['/*'],
  exclude: [
    '/_app/*',
    '/team/*',
    '/images/*',
    '/hhcc-2025-photos/*',
    '/nice_photos/*',
    '/newsite/*',
    '/favicon.svg',
    '/logo.svg',
    '/logoForEmailNoBg.png'
  ]
};

writeFileSync('.svelte-kit/cloudflare/_routes.json', JSON.stringify(routes, null, 2));
console.log('✓ Rewrote _routes.json with wildcard patterns');
