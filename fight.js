var yourHealth = 100;
var opponentHealth = 10;
var opponent = 1;

function displayHealth() {
	$("p#healths").html(" &nbsp;&nbsp;&nbsp;&nbsp;<b>Health: "+yourHealth+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Health: "+opponentHealth+"</b>");
}

function heal() {
	var plus = Math.floor((Math.random() * 10) + 1);
	yourHealth += plus;
	if(yourHealth>200){
		alert("Your health cannot go any higher!");
		yourHealth = 200;
	}
	displayHealth();
}

function attack() {
	var atc = Math.floor((Math.random() * 10) + 1);
	opponentHealth -= atc;
	if(opponentHealth<=0){
		opponentHealth = 0;
		alert("You've won this time...");
		next();
	}
	displayHealth();
}

function next() {
	
}