<script>
	import groupshot from '$lib/images/groupshot.jpg';
	import poster from '$lib/images/poster.jpg';
	import legs from '$lib/images/legs.jpg';
	import hop from '$lib/images/hop.jpg';
	import Carousel from "svelte-carousel";

	const images = [
		{
			url: poster,
			description: "camp 2 poster",
		},
		{
			url: groupshot,
			description: "camp 1 week 1 group shot",
		},
		{
			url: legs,
			description: "legs up everyone!",
		},
		{
			url: hop,
			description: "izuumi hops!",
		},
	];
	let carousel; // for calling methods of the carousel instance
	const handleNextClick = () => {
		carousel.goToNext();
	};
</script>
<svelte:head>
	<title>Eaglets Halifax - Youth Beginner Volleyball Training Program</title>
	<meta name="description" content="Eagles Volleyball Youth training 7-week program. Gives children fundamental skills and knowledge in volleyball.">
	<meta name="keywords" content="Eagles, Volleyball, Halifax, Volley, Ball, Adult, Co-ed, Drop-In, Competitive, Children, Youth, Teen, Camp, Training, Program, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18">
</svelte:head>

<div class="text-column">
	<h1>Eaglets Beginner Youth Volleyball Program</h1>
	<p>
		<a href="https://www.facebook.com/groups/2018190391899731" target="_blank" rel="noopener">Eaglets Youth Volleyball Training Facebook Page</a>
	</p>
	
	<p>
		<br>Eaglets 9-13 youth Training info
	</p>
	<Carousel
		bind:this={carousel}
		let:loaded
		autoplay
		autoplayDuration={3000}
		autoplayProgressVisible
	>
		{#each images as src, imageIndex (src)}
		<div class="img-container">
			{#if loaded.includes(imageIndex)}
			<img src={src.url} alt={src.description} width={1000} height={600} />
			{/if}
		</div>
		{/each}
</Carousel>
</div>
<style>
	img{
		width: 100%;
	}
</style>