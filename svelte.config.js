/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/vercel-adapter'
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: vercel()
  }
};

export default config;
