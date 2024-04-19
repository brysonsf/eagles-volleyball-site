<div class="container">
    <h1>Volunteer Signup</h1>
    <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="group">Group Preference</label>
      </div>
      <div class="col-75">
        <select id="group" name="group">
          <option value="eaglets">Eaglets Youth</option>
          <option value="boys">Boys Team</option>
          <option value="visionaries">Girls Team Visionaries </option>
          <option value="apex">Girls Team Apex </option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Details + Questions</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Any questions or comments.." style="height:200px"></textarea>
      </div>
    </div>
    <br>
    <div class="row">
      <button type="submit" value="Submit">Submit</button>
    </div>
    </form>
  </div>

<style>

* {
  box-sizing: border-box;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

.container {
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