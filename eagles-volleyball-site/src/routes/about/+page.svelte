<script>
	import CoachCard from "../CoachCard.svelte";
	import Jasmine from "$lib/images/jasmine.png";
</script>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Our Mission, Values, And Vision</h1>
	<p>
		Mission
		<br>Values
		<br>Vision
		<br>etc.
	</p>

	<h1>Eagles Coaching Staff</h1>
	<CoachCard>
		<span slot="name"> Bryson Sullivan-Farrell </span>
		<span slot="role"> Eaglets Youth Coach</span>
		<span slot="details">10-yr volleyball athelete both indoor and beach. Experience coaching HS volleyball in Toronto. </span>
		<span slot="hometown"> Toronto, Ontario, Canada </span>
		<span slot="email"> brysonsf@gmail.com </span>
	</CoachCard>
	<br>
	<CoachCard>
		<span slot="name"> Jasmine Chiasson </span>
		<!--<span slot="role"></span>
		<span slot="details"></span>
		<span slot="hometown"></span>
		<span slot="email"></span>-->
		<span slot="picture"><img src={Jasmine} alt="Jasmine Pic"></span>
	</CoachCard>
	<!-- card display -->

</div>