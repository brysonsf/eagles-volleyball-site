<script>
    function displayImage(){
        
        return null;
    }
</script>
<article class="contact-card">
	<h2>
		<slot name="name">
			<span class="missing">Unknown name</span>
		</slot>
	</h2>
    <div class="role">
		<slot name="role">
			<span class="missing">Coach</span>
		</slot>
	</div>
    <div class="details">
		<slot name="details">
			<span class="missing">Nova Scotia</span>
		</slot>
	</div>
	
    <div class="hometown"><b>Hometown:</b>
        <slot name="hometown">
			<span class="missing">Nova Scotia </span>
		</slot>
	</div>

	<div class="email">
		<slot name="email">
			<span class="missing">Unknown email</span>
		</slot>
	</div>
    <div class="picture">
        <slot name="picture">
            <span class="missing">Missing Photo</span>
        </slot>
    </div>
    <button on:click={displayImage()}>Show Picture</button>
</article>

<style>
    .picture{
        display: none;
    }
	.contact-card {
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
	}

	h2 {
		padding: 0 0 0.2em 0;
		margin: 0 0 1em 0;
		border-bottom: 1px solid #ff3e00;
	}

	.hometown, .role,
	.email, .details {
		padding: 0 0 0 1.5em;
		background: 0 0 no-repeat;
		background-size: 20px 20px;
		margin: 0 0 0.5em 0;
		line-height: 1.2;
	}

	.address {
		background-image: url(/tutorial/icons/map-marker.svg);
	}
	.email {
		background-image: url(/tutorial/icons/email.svg);
	}
	.missing {
		color: #999;
	}
</style>
