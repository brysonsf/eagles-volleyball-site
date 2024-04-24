<script>
	import CoachCard from "../CoachCard.svelte";
	import Jasmine from "$lib/images/jasmine.png";
	import Emmy from "$lib/images/emmy.png";
	import Bryson from "$lib/images/bryson.png";
	import Curtis from "$lib/images/curtis.png";
	function changePicture(input){
		if(document.getElementById(input)?.style["display"]==="none"){
			document.getElementById(input).style["display"] = "flex";
		}else{
			document.getElementById(input).style["display"] = "none";
		}
		return null;
	}
</script>
<svelte:head>
	<title>All about the Eagles Org. It's mission, values, vision, and the coaches. </title>
	<meta name="description" content="Eagles Volleyball Halifax - Core beliefs and about the coaches">
	<meta name="keywords" content="Coaching, Eagles, Volleyball, Halifax, Volley, Ball, Adult, Co-ed, Drop-In, Competitive, Children, Youth, Teen, Camp, Training, Program, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18">
</svelte:head>
<div class="row">
	<div class="col">
		<h1>Our Mission</h1>
		<p class="mission">
			is to <strong>share quality volleyball experiences; especially with the Halifax youth. </strong>We strive to support any and all children who are inspired by volleyball and share our love for the game.
		</p>

	</div>
	<div class="col">
		<h1>Our Vision</h1>
		<p class="vision">
			<strong>is a world where volleyball is played by all</strong>, and where everybody knows they are welcome on the court.
		</p>
	</div>
	
	<div class="col">
		<h1>Our Values</h1>
		<p>
			The Eagles Core Values are <strong>inclusiveness, unity, respect and leadership.</strong>
		</p>
		<ul>
			<li><strong>Cherish</strong> any chance to play the game you love.</li>
			<li><strong>Support</strong> your teammates; faster alone farther together.</li>
			<li><strong>Growth oriented</strong> mindsets and life skills.</li>
		</ul>
	</div>
</div>
<h1>Eagles Coaching Staff</h1>
<div class="row">
	<div class="col">
		<CoachCard>
			<span slot="name"> <strong>Emmylou Umali</strong></span>
			<span slot="button">
				<button class="button-51" on:click={() => changePicture(Emmy)}>Show/Hide Image</button>
			</span>
			<span slot="role"><strong>Founder</strong></span>
			<!--<span slot="details"></span>-->
			<span slot="hometown">Phillipines</span>
			<span slot="email"> <a class="anchorEmail" href="mailto:emmylou.umali@gmail.com" target="_blank" rel="noopener noreferrer">Contact Emmylou</a></span>
			<span slot="picture"><img id={Emmy} src={Emmy} alt="Emmy Pic" style="display:none;"></span>
		</CoachCard>
	</div>
	<div class="col">
		<CoachCard>
			<span slot="name"><strong>Jasmine Chiasson</strong></span>
			<span slot="button">
				<button on:click={() => changePicture(Jasmine)}>Show/Hide Image</button>
			</span>
			<span slot="role"><strong>Technical Director</strong></span>
			<span slot="details">
				<ul>
					<li>6 years of playing experience</li>
					<li> 1 year with UMCS (home university team)</li>
					<li>Former PLM high school volleyball coach</li>
				</ul>
			</span>
			<span slot="hometown"> Caraquet, New Brunswick, Canada</span>
			<!--<span slot="email"></span>-->
			<span slot="picture"><img id={Jasmine} src={Jasmine} alt="Jasmine Pic" style="display:none;"></span>
		</CoachCard>
	</div>
</div>
<br>
<div class="row">
	<div class="col">
		<CoachCard>
			<span slot="name"><strong>Bryson Sullivan-Farrell</strong></span>
			<span slot="button">
				<button on:click={() => changePicture(Bryson)}>Show/Hide Image</button>
			</span>
			<span slot="role"><strong>Eaglets Head Coach</strong></span>
			<span slot="details">
				<ul>
					<li>10-years playing experience. Trained as a middle. </li>
					<li>Former Riverdale HS Volleyball Coach in Toronto</li>
					<li>Safe Sport Certified </li>
				</ul>
			</span>
			<span slot="hometown"> Toronto, Ontario, Canada </span>
			<span slot="email"> <a class="anchorEmail" href="mailto:brysonsf@gmail.com" target="_blank" rel="noopener noreferrer">Contact Bryson</a></span>
			<span slot="picture"><img class='resize' id={Bryson} src={Bryson} alt="Bryson Pic" style="width:250px; height: 650px; display:none;"></span>
		</CoachCard>
	</div>
	<div class="col">
		<CoachCard>
			<span slot="name"><strong>Curtis Robarts</strong></span>
			<span slot="button">
				<button on:click={() => changePicture(Curtis)}>Show/Hide Image</button>
			</span>
			<span slot="role"><strong>Boys Head Coach</strong></span>
			<!--<span slot="details"> Safe Sport Certified. 10-yr volleyball athelete. Experience coaching HS volleyball. </span>
			<span slot="hometown"> Toronto, Ontario, Canada </span>
			<span slot="email"> brysonsf@gmail.com </span> -->
			<span slot="picture"><img id={Curtis} src={Curtis} alt="Curtis Pic" style="display: none;"></span>
		</CoachCard>
	</div>
</div>
<br>
<div class="row">
	<div class="col">
		<CoachCard>
			<span slot="name"><strong>Sophie Surette</strong></span>
			<span slot="role"><strong>Girls Head Coach - Team Apex</strong></span>
			<!--<span slot="details"></span>
			<span slot="hometown"></span>
			<span slot="email"></span>
			<span slot="picture"><img src={Sophie} alt="Sophie Pic"></span>-->
		</CoachCard>
	</div>
	<div class="col">
		<CoachCard>
			<span slot="name"><strong>Sarah van den Heuvel</strong></span>
			<span slot="role"><strong>Girls Head Coach - Team Visionaries</strong></span>
			<!--<span slot="details"></span>
			<span slot="hometown"></span>
			<span slot="email"></span>
			<span slot="picture"><img src={Sarah} alt="Sarah Pic"></span>-->
		</CoachCard>
	</div>
</div>
<style>
	.row {
		display: flex;
	}

	.col {
		flex: 50%;
		padding: 0 10px; /* Add spacing between columns */
		box-sizing: border-box; /* Include padding in column width */
		margin-bottom: 20px; /* Add some space between rows */
	}

	img {
		width: 100%; /* Make images fill their container */
		height: auto; /* Maintain aspect ratio */
	}

	button {
		float: right;
		margin: 1vw 1vw 0 0;
	}

	.anchorEmail {
		text-decoration-line: underline;
		text-decoration-color: blue;
	}
	/* mobile breakpoints */
	@media (max-width: 600px) {
		.col {
			flex: 100%; /* Full width on small screens */
		}
		.row{
			width: 500px;
			flex-wrap: wrap; /* Allow columns to wrap to the next line */
		}
	}
</style>