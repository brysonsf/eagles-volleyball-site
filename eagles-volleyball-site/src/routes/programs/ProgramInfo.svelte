<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
        let adult = document.getElementById('dropin');
        let boys = document.getElementById('boys');
        let apex = document.getElementById('apex');
        let visionaries = document.getElementById('visionaries');
        let eaglets = document.getElementById('eaglets');
        function updateHeader(){
            var programsOffered = document.getElementsByClassName('program');
		
            for (var i = 0; i < programsOffered.length; i++) {
                let temp = programsOffered[i];
                if(temp.style.display==="flex"){
                    temp.style.display="none";
                }else{
                    temp.style.display="flex";
                }
            }
        }
        adult.addEventListener("click",  function() {
            updateHeader();
            goto("/programs/adult");
        });
        boys.addEventListener("click",  function() {
            updateHeader();
            goto("/programs/boys");
        });
        apex.addEventListener("click",  function() {
            updateHeader();
            goto("/programs/apex");
        });
        visionaries.addEventListener("click",  function() {
            updateHeader();
            goto("/programs/visionaries");
        });
        eaglets.addEventListener("click",  function() {
            updateHeader();
            goto("/programs/eaglets");
        });
    });
   
</script>

<div class="container"> 
    <div class="col">
      <div class="card-container" id="boys">
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="card" id="boys">
          <h4>Bedford Blazing Eagles Boys - Youth Competition Team</h4>
          <span class="chev">&rsaquo;</span>
        </div>
      </div>
      <div class="card-container" id="apex">
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="card" id="apex">
          <h4>Bedford Blazing Eagles Team Apex - Girls Youth Competition Team</h4>
          <span class="chev">&rsaquo;</span>
        </div>
      </div>
      <div class="card-container" id="eaglets">
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="card" id="eaglets">
          <h4>Eaglets Beginner 7-Week Training Program</h4>
          <span class="chev">&rsaquo;</span>
        </div>
      </div>
    </div>
    
    <div class="col"> 
      <div class="card-container" id="dropin">
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="card">
          <h4>Bedford Blazing Eagles Adult Drop-in and League play. Co-ed, Advanced, Intermediate, Recreation</h4>
          <span class="chev">&rsaquo;</span>
        </div>
      </div>
      <div class="card-container" id="visionaries">
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="card" id="visionaries">
          <h4>Bedford Blazing Eagles Team Visionaries - Girls Youth Competition team</h4>
          <span class="chev">&rsaquo;</span>
        </div>
      </div>
    </div>
  </div>

  <p>
    <a href="https://www.facebook.com/groups/1530371987469476" target="_blank" rel="noopener">Eagles Co-ed Volleyball Drop-In Facebook Page</a>
</p>
<p>
    <a href="https://www.facebook.com/groups/2018190391899731" target="_blank" rel="noopener">Eaglets Youth Volleyball Training Facebook Page</a>
</p>
<p>
    <a href="https://www.facebook.com/groups/651314643357907" target="_blank" rel="noopener">Bedford Blazing Eagles Facebook Page</a>
</p>

<style>
.missing {
    color: #999;
}

*,
*:before,
*:after{
  box-sizing: border-box;
}

* {
  user-select: none; 
  -webkit-tap-highlight-color: rgba(0,0,0,0); 
  transform-style: preserve-3d; 
  margin: 0;
  padding: 0;
}

*:focus {
  outline: none!important; 
}

body{
  margin: 0;
  padding: 0;
  background: #131313;
  text-align: left;
  overflow-x: hidden;
  overflow-y: hidden;
}

.container{
  width:100vw;
  height: 100%;
  display: flex;
  flex-flow: row;
  perspective: 1000px;
  perspective-origin: center;
}

.col{
  height:  100%;
  transition: transform 600ms cubic-bezier(0.390, 0.575, 0.565, 1.000), opacity 300ms ease;
  transform: translateZ(34px) scale(.98);
  flex: 0 0 33.3333%; 
  position: relative;
}

.col:nth-of-type(1){
  transform: rotateY(5deg) translateZ(34px) scale(.98);
}

.col:nth-of-type(3){
  transform: rotateY(-5deg) translateZ(34px) scale(.98);
}

.col:hover,
.col:focus{
  transform: translateZ(34px);
  transition: transform 300ms cubic-bezier(0.390, 0.575, 0.565, 1.000), opacity 300ms ease;
}

.card-container{
  position: relative;
  width: calc(100% - 25px);
  height:  calc(33.3% - 25px);
  margin: 17px;
  padding: 8px;
  text-align: center;
  opacity: .89;
}

.card-container:hover,
.card-container:focus{
  opacity: 1;
}

.overlay{
  display: block;
  position: absolute;
  cursor: pointer;
  width: 50%;
  height: 50%;
  z-index: 1;
  transform: translateZ(34px);
}

.overlay:nth-of-type(1){
  left: 0;
  top: 0;
}

.overlay:nth-of-type(2){
  right: 0;
  top: 0;
}

.overlay:nth-of-type(3){
  bottom: 0;
  right: 0;
}

.overlay:nth-of-type(4){
  bottom: 0;
  left: 0;
}

.overlay:nth-of-type(1):hover ~ .card,
.overlay:nth-of-type(1):focus ~ .card{
  transform-origin: right top;
  transform: rotateX(3deg) rotateY(-3deg) translateZ(0);
}

.overlay:nth-of-type(2):hover ~ .card,
.overlay:nth-of-type(2):focus ~ .card{
  transform-origin: left top;
  transform: rotateX(3deg) rotateY(3deg) translateZ(0);
}

.overlay:nth-of-type(3):hover ~ .card,
.overlay:nth-of-type(3):focus ~ .card{
  transform-origin: left bottom;
  transform: rotateX(-3deg) rotateY(3deg) translateZ(0);
}

.overlay:nth-of-type(4):hover ~ .card,
.overlay:nth-of-type(4):focus ~ .card{
  transform-origin: right bottom;
  transform: rotateX(-3deg) rotateY(-3deg) translateZ(0);
}

.card{
  border-radius: 5px;
  height: 100%;
  transition: all 300ms ease-out;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  z-index: 0;
  opacity: .89;
  padding: 13px 21px;
}

.card:before,
.card:after{
  content: '';
  position: absolute;
  left:0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: .21;
  transition: transform 300ms ease;
  transform: scale(.98);
}

.card:before{
  background-size: cover;
  background-position: 50% 50%;
}

.card-container:hover .card:before,
.card-container:hover .card:after,
.card-container:focus .card:before,
.card-container:focus .card:after{
  opacity: .34;
  transform: scale(1);
}

.col:nth-of-type(1) .card-container:nth-of-type(1) .card:before{
      background-image: url('https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/pia22474-2000.jpg?itok=cajl1lYH');
}

.col:nth-of-type(2) .card-container:nth-of-type(1) .card:before{
      background-image: url('https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m18-090.jpg?itok=TQ8Fuk4x');
}

.col:nth-of-type(3) .card-container:nth-of-type(1) .card:before{
      background-image: url('https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/40808879360_18c96d62f1_o.jpg?itok=NttmTWPK');
}

.col:nth-of-type(1) .card-container:nth-of-type(2) .card:before{
      background-image: url('https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/jwst-pv-145604copy.jpg?itok=Jq7GN-Rc');
}

.col:nth-of-type(2) .card-container:nth-of-type(2) .card:before{
      background-image: url('https://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/worldview201709201920x1080.png');
}

.col:nth-of-type(3) .card-container:nth-of-type(2) .card:before{
      background-image: url('https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/nasasibexobs.jpg?itok=U2LCp14i');
}

.col:nth-of-type(1) .card-container:nth-of-type(3) .card:before{
      background-image: url('https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/pia19808.jpg?itok=rgxgamMM');
}

.col:nth-of-type(2) .card-container:nth-of-type(3) .card:before{
      background-image: url('https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/e0102_lg.jpg?itok=sd9lOayI');
}

.col:nth-of-type(3) .card-container:nth-of-type(3) .card:before{
      background-image: url('https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/asteroid20180605-home.jpg?itok=KSUffiCR');
}

.card:after{
  background: linear-gradient(to bottom, rgba(0,0,0,0) 50%,rgba(0,0,0,0.89) 100%);
}

h4{
  text-align: left;
  font-size: 18px;
  font-weight:400;
  transform: translateY(5px);
  transition: transform 450ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  max-width: 320px;
  outline: 1px solid transparent;
}

.overlay:hover ~ .card h4,
.overlay:focus ~ .card h4{
  transform: translateZ(144px);
}

.card > span{
  font-size: 34px;
  opacity: 0;
  transform: translateX(-3px);
  transition: all 300ms ease;
}

.card-container:hover > .card > h4,
.card-container:focus > .card > h4{
  transform: translateY(-13px);
}

.card-container:hover > .card > span,
.card-container:focus > .card > span{
 opacity: 1;
    transform: translateX(3px);
  animation: slideRight 300ms ease;
}

@media (max-width: 768px){
  body{
    overflow-y: scroll;
  }
  h4{
    font-size: 17px;
  }
}

@media (max-width: 540px){
  .container{
    flex-flow: column;
    perspective: none;
  }
  
  .col:nth-of-type(1),
  .col:nth-of-type(2),
  .col:nth-of-type(3),
  .col:hover{
      transform: none;
  }
  
  h4{
    padding-bottom: 8px;
    font-size: 18px;
  }
  
.card > span{
      display: none;
  }
}

@media (max-height: 599px){
.card > span{
      display: none;
  }
}

@media (max-width: 860px) and (max-height: 540px){
  h4{
    font-size: 14px;
  }
}

@media (max-width: 620px) and (max-height: 540px){
  h4{
    font-size: 13px;
  }
}
</style>
