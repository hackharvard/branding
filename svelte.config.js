// import adapter from '@sveltejs/adapter-static'
// import { vitePreprocess } from '@sveltejs/kit/vite'

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
//     // If your environment is not supported or you settled on a specific environment, switch out the adapter.
//     // See https://kit.svelte.dev/docs/adapters for more information about adapters.
//     adapter: adapter({
//       pages: 'build',
//       assets: 'build',
//       fallback: undefined,
//       precompress: false,
//       strict: true
//     })
//   },
//   preprocess: vitePreprocess()
// }

// export default config

// import adapter from '@sveltejs/adapter-vercel'
// import { vitePreprocess } from '@sveltejs/kit/vite'

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   // Consult https://kit.svelte.dev/docs/integrations#preprocessors
//   // for more information about preprocessors
//   preprocess: vitePreprocess(),
//   kit: {
//     // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
//     // If your environment is not supported or you settled on a specific environment, switch out the adapter.
//     // See https://kit.svelte.dev/docs/adapters for more information about adapters.
//     adapter: adapter(),
//   },
// }

// export default config

import adapter from '@sveltejs/adapter-cloudflare';

export default {
  kit: {
    adapter: adapter(),
  }
};

