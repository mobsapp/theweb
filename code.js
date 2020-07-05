function myFunction(){
document.getElementById('hello').innerHTML='Hi to all';

}
function askname(){
	
	var person = prompt("Please enter your name", "Student");

if (person != null) {
  document.getElementById("demo").innerHTML = person+"'s Profile & Project";
  
  
  document.getElementById("showprofile").style.display = "block";
}
	
	
}
function changesYes(){
	document.getElementById('hello').innerHTML='Hi to all';
	
	document.getElementById("demo").style.fontSize = "35px";

document.getElementById("demo").style.display = "none";

document.getElementById("demo").style.display = "block";
}
