<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import hop from '$lib/images/hop.jpg';
	/**
     * @type {string}
     */
	let email;
	
    function doPost(){
        console.log("mailto: " + email);
    }
</script>

<svelte:head>
	<title>Eagles Volleyball Halifax - Competitive Youth Teams and Adult Drop-ins</title> <!-- Home Page default SEO -->
	<meta name="description" content="Eagles Volleyball Organization - For All Ages Halifax. Variety of program offerings.">
	<meta name="keywords" content="Eagles, Volleyball, Halifax, Volley, Ball, Adult, Co-ed, Drop-In, Competitive, Advanced, Intermediate, Recreation, Children, Youth, Teen, Camp, Training, Program, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18">
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
				
			</picture>
			
		</span>
		<span>future Eagles!</span>
	</h1>
	<div>
		<h2>For new players with no idea where to start, check out our programs <a href="/programs">you can find our programs here!</a></h2> 
	</div>
	<h1>Sign up for our newsletter!</h1>
	<div class="container">
		<form>
			<div class="row">
				<div class="col-75">
					<input type="text" id="email" name="email" placeholder="Enter your email.." bind:value={email}>
				</div>
				<div class="col-25">
					<button class="butt" type="submit" value="Submit" on:click={doPost}>Subscribe</button>
				</div>
			</div>
		</form>
	</div>
</section>


<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
		
	input[type=text] {
		width: 75%;
		padding: 12px;
		border: 1px solid #ccc;
		border-radius: 4px;
		resize: vertical;
		margin: 10px;
	}

	label {
		padding: 12px 12px 12px 0;
		display: inline-block;
	}

	.container {
		min-width: 600px;
		border-radius: 5px;
		background-color: var(--color-bg-2);
		background-image: linear-gradient(to bottom left, #ebb48f, #9dc7ee, #ebb48f);
		padding: 20px;
	}

	.col-25 {
		float: left;
		width: 25%;
		margin-top: 6px;
	}

	.col-75 {
		float: left;
		width: 75%;
		margin-top: 6px;
	}

	/* Clear floats after the columns */
	.row::after {
		content: "";
		display: table;
		clear: both;
	}

	/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
	@media screen and (max-width: 600px) {
		.col-25, .col-75, input[type=submit] {
			width: 100%;
			margin-top: 0;
		}
	}
</style>