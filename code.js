function myFunction(){
document.getElementById('hello').innerHTML='Hi to all';

}
function askname(){
	
	var person = prompt("Please enter your name", "Student");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hi " + person + "! How are you today?";
  
  document.getElementById("setprofile").style.display = "block";
}
	
	
}
function changesYes(){
	document.getElementById('hello').innerHTML='Hi to all';
	
	document.getElementById("demo").style.fontSize = "35px";

document.getElementById("demo").style.display = "none";

document.getElementById("demo").style.display = "block";
}