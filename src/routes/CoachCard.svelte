<script>
</script>
<article class="contact-card">
	<h2>
		<slot name="name">
			<span class="missing">Unknown name</span>
		</slot>
        <div class="role">
            <slot name="role">
                <span class="missing">Coach</span>
            </slot>
        </div>
        <div class="button">
            <slot name="button">
                <span class="missing">Missing Photo</span>
            </slot>
        </div>
	</h2>
    <div class="details">
		<slot name="details">
			<span class="missing">Missing Coach Details</span>
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
        </slot>
    </div>
</article>

<style>
	.contact-card {
		width: 600px;
        border: 1px solid #aaa;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
        padding: 1em;
        overflow: hidden; /* Clearfix to contain floated elements */
	}

	.details {
        float: left;
        width: 65%; /* Adjust as needed */
    }

    .picture {
        float: right;
        width: 40%; /* Adjust as needed */
    }

    h2 {
        padding: 0 0 0.2em 0;
        margin: 0 0 1em 0;
        border-bottom: 1px solid #ff3e00;
    }

    .role{
        float: right;
    }
    .hometown,
    .email,
    .details {
        padding: 0 0 0 1.5em;
        margin: 0 0 0.5em 0;
        line-height: 1.2;
    }

    .missing {
        color: #999;
    }

    .picture slot {
        display: block;
    }

    /* Clearfix to contain floated elements */
    .contact-card::after {
        content: "";
        display: table;
        clear: both;
    }
     /* mobile breakpoints */
	@media (max-width: 600px) {
        .contact-card {
            width: 300px;
        }
    }
</style>
