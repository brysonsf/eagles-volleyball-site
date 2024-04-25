import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

export default {
	
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			},
		platformProxy: {
			persist: './eagles-volleyball-site'
		}
		})
	}
};