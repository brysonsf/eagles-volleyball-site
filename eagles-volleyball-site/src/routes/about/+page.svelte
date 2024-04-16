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
			<span slot="role"> Eaglets Head Coach</span>
			<span slot="details"> Safe Sport Certified. 10-yr volleyball athelete. Experience coaching HS volleyball. </span>
			<span slot="hometown"> Toronto, Ontario, Canada </span>
			<span slot="email"> brysonsf@gmail.com </span>
			<!--<span slot="picture"><img src={Bryson} alt="Bryson Pic"></span>-->
		</CoachCard>
		<CoachCard>
			<span slot="name"> Jasmine Chiasson </span>
			<span slot="role"> Technical Director</span>
			<!--<span slot="details"></span>
			<span slot="hometown"></span>
			<span slot="email"></span>-->
			<span slot="picture"><img src={Jasmine} alt="Jasmine Pic"></span>
		</CoachCard>
		<br>
		<CoachCard>
			<span slot="name"> Curtis Robarts </span>
			<span slot="role"> Boys Head Coach</span>
			<!--<span slot="details"> Safe Sport Certified. 10-yr volleyball athelete. Experience coaching HS volleyball. </span>
			<span slot="hometown"> Toronto, Ontario, Canada </span>
			<span slot="email"> brysonsf@gmail.com </span>
			<span slot="picture"><img src={Curtis} alt="Curtis Pic"></span>-->
		</CoachCard>
		<CoachCard>
			<span slot="name"> Sophie Surette </span>
			<span slot="role"> Girls Head Coach - Team Apex</span>
			<!--<span slot="details"></span>
			<span slot="hometown"></span>
			<span slot="email"></span>
			<span slot="picture"><img src={Sophie} alt="Sophie Pic"></span>-->
		</CoachCard>
		<br>
		<CoachCard>
			<span slot="name"> Sarah van den Heuvel </span>
			<span slot="role"> Girls Head Coach - Team Visionaries</span>
			<!--<span slot="details"></span>
			<span slot="hometown"></span>
			<span slot="email"></span>
			<span slot="picture"><img src={Sarah} alt="Sarah Pic"></span>-->
		</CoachCard>
	<!-- card display -->

</div>