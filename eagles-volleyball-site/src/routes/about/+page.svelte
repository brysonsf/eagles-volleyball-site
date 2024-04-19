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
</div>
<h1>Eagles Coaching Staff</h1>
<div class="row">
	<div class="col">
		<CoachCard>
			<span slot="name"> Emmylou Umali </span>
			<span slot="button">
				<button on:click={() => changePicture(Emmy)}>Show/Hide Image</button>
			</span>
			<span slot="role"><strong>Founder</strong></span>
			<!--<span slot="details"></span>
			<span slot="hometown"></span>
			<span slot="email"></span>-->
			<span slot="picture"><img id={Emmy} src={Emmy} alt="Emmy Pic" style="display:none;"></span>
		</CoachCard>
	</div>
	<div class="col">
		<CoachCard>
			<span slot="name"> Jasmine Chiasson </span>
			<span slot="button">
				<button on:click={() => changePicture(Jasmine)}>Show/Hide Image</button>
			</span>
			<span slot="role"><strong>Technical Director</strong></span>
			<!--<span slot="details"></span>
			<span slot="hometown"></span>
			<span slot="email"></span>-->
			<span slot="picture"><img id={Jasmine} src={Jasmine} alt="Jasmine Pic" style="display:none;"></span>
		</CoachCard>
	</div>
</div>
<br>
<div class="row">
	<div class="col">
		<CoachCard>
			<span slot="name"> Bryson Sullivan-Farrell </span>
			<span slot="button">
				<button on:click={() => changePicture(Bryson)}>Show/Hide Image</button>
			</span>
			<span slot="role"><strong>Eaglets Head Coach</strong></span>
			<span slot="details">
				<ul>
					<li>10-years playing experience. Trained as a middle. </li>
					<li>Former HS Volleyball Coach</li>
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
			<span slot="name"> Curtis Robarts </span>
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
			<span slot="name"> Sophie Surette </span>
			<span slot="role"><strong>Girls Head Coach - Team Apex</strong></span>
			<!--<span slot="details"></span>
			<span slot="hometown"></span>
			<span slot="email"></span>
			<span slot="picture"><img src={Sophie} alt="Sophie Pic"></span>-->
		</CoachCard>
	</div>
	<div class="col">
		<CoachCard>
			<span slot="name"> Sarah van den Heuvel </span>
			<span slot="role"> Girls Head Coach - Team Visionaries</span>
			<!--<span slot="details"></span>
			<span slot="hometown"></span>
			<span slot="email"></span>
			<span slot="picture"><img src={Sarah} alt="Sarah Pic"></span>-->
		</CoachCard>
	</div>
</div>
<style>
	.row{
		display: flex;
	}
	.col{
		flex: 50%;
	}
	img{
		width: 90%;
		height: 90%;
	}
	button{
        float: right;
        margin: 1vw 0 0 0;
    }
	.anchorEmail{
		text-decoration-line: underline;
  		text-decoration-color: blue;
	}
</style>