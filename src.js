var clicks = 0
var btn = document.getElementById("btn")
var cps = document.getElementById("cps")
cps.style.display = "none"
cps.innerHTML = "Restart here"

function count () {
   
   cps.style.display = "none"
   

   clicks++

btn.innerHTML = clicks

var clickFunction = setInterval(() => {
   btn.removeAttribute('onclick')
  
   
}, 5000);

setTimeout(() => {
   
   btn.innerHTML= "Your cps is " + clicks/5

   cps.style.display = "inline"
}, 1000*5);
}


function reload (){
   location.reload()
}











