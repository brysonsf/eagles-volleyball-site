<script lang="ts">
	import { page } from '$app/stores';
	import eagle from '$lib/images/eaglesvball.jpg';
	import { onMount } from 'svelte';
	
	onMount(() => {
		let programAnchor = document.getElementById('program');
		var programsOffered = document.getElementsByClassName('program') as HTMLCollectionOf<HTMLElement>;
		programAnchor?.addEventListener("click",  function() {
			for (var i = 0; i < programsOffered.length; i++) {
				let temp = programsOffered[i];
				if(temp.style.display==="flex"){
					temp.style.display="none";
				}else{
					temp.style.display="flex";
				}
			}
		});
	});
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={eagle} alt="Eagles Logo" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/programs' ? 'page' : undefined}>
				<a id='program' href="/programs">Programs</a>
			</li>
			<li aria-current={$page.url.pathname === '/programs/eaglets' ? 'page' : undefined} class="program">
				<a href="/programs/eaglets" class="program">Eaglets</a>
			</li>
			<li aria-current={$page.url.pathname === '/programs/boys' ? 'page' : undefined} class="program">
				<a href="/programs/boys" class="program">Boys Competitive</a>
			</li>
			<li aria-current={$page.url.pathname === '/programs/visionaries' ? 'page' : undefined} class="program">
				<a href="/programs/visionaries" class="program">Girls Visionaries</a>
			</li>
			<li aria-current={$page.url.pathname === '/programs/apex' ? 'page' : undefined} class="program">
				<a href="/programs/apex" class="program">Girls Apex</a>
			</li>
			<li aria-current={$page.url.pathname === '/programs/adult' ? 'page' : undefined} class="program">
				<a href="/programs/adult" class="program">Adult</a>
			</li>
			<li aria-current={$page.url.pathname === '/volunteer' ? 'page' : undefined}>
				<a href="/volunteer">Volunteer</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<!-- can put another logo / link here -->
	</div>
</header>

<style>
	.program{
		display: none;
		background-color: var(--color-bg-2);
	}
	#program:hover{
		color:white;
	}
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 8em;
		height: 8em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 8em;
		height: 8em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 182, 133, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
	/* mobile breakpoints */
	@media (max-width: 600px) {
		header {
			flex-direction: column;
			align-items: center;
			width: 400px;
		}

		.corner {
			width: 4em;
			height: 4em;
		}

		.corner img {
			width: 4em;
			height: 4em;
		}

		nav {
			width: 100%;
		}

		ul {
			flex-direction: column;
			height: auto;
			background: none;
		}

		li {
			height: auto;
		}

		li[aria-current='page']::before {
			display: none;
		}

		nav a {
			padding: 0.5rem;
		}

		.program {
			display: none;
		}

		#program {
			color: var(--color-text);
		}
	}
	
</style>