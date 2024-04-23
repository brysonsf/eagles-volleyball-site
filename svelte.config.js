import adapter from 'svelte-adapter-github';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
		  // default options are shown. On some platforms
		  // these options are set automatically — see below
		  pages: 'docs',
		  assets: 'docs',
		  fallback: null,
		  precompress: false,
		  jekyll: false,
		  paths: {
            base: process.env.NODE_ENV === 'production' ? '/eagles-volleyball-site' : '',
		},
		}),
		
	}
		
};
export default config;