<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 100rem;
		margin: 0 auto;
		box-sizing: border-box;
	} 
	/* mobile breakpoints */
	@media (max-width: 600px) {
		main {
			width: 400px;
		}
		.app {
			width: 400px;
		}
    }
</style>
