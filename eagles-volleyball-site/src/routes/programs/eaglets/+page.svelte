<script>
	import groupshot from '$lib/images/groupshot.jpg';
	import poster from '$lib/images/poster.jpg';
	import legs from '$lib/images/legs.jpg';
	import hop from '$lib/images/hop.jpg';
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
	<picture>
		<source srcset={groupshot} type="image/webp" />
		<img src={groupshot} alt="Eaglets First Camp" />
		<caption>Eaglets season 1 Feb-Mar 2024</caption>
	</picture>
	<picture>
		<source srcset={poster} type="image/webp" />
		<img src={poster} alt="Eaglets Camp 2" />
		<caption>Eaglets season 2 Jun-July 2024</caption>
	</picture>
	<picture>
		<source srcset={hop} type="image/webp" />
		<img src={hop} alt="Eaglets Camp 1 jumper" />
		<caption>Eaglets season 1 - izuumi jumps!</caption>
	</picture>
	<picture>
		<source srcset={legs} type="image/webp" />
		<img src={legs} alt="Eaglets Camp 1 legs up!" />
		<caption>Eaglets season 1 everyone Legs up!</caption>
	</picture>
</div>
<style>
	img{
		width: 100%;
	}
	caption{
		width: 250px;
	}
</style>