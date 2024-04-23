import adapter from '@sveltejs/adapter-cloudflare';

export default {
	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			},
			paths: {
				base: process.env.NODE_ENV === 'production' ? '/eagles-volleyball-site' : '',
			},
		platformProxy: {
			persist: './your-custom-path'
		}
		})
	}
};