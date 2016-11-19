var yourHealth = 100;
var opponentHealth = 10;
var opponent = 1;
var money = 0;

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
	document.getElementById("you").style.left = "150px";
	setTimeout(function(){
		var atc = Math.floor((Math.random() * 10) + 1);
		opponentHealth -= atc;
		if(opponentHealth<=0){
			opponentHealth = 0;
			displayHealth();
			alert("You've won this time...");
			next();
		}
		displayHealth();
	})
}

function next() {
	money += 100*opponent;
	alert("You got "+100*opponent+" coins!");
	$("#something").html("<button class='button1' onclick='fight();'>Next Battle</button>");
	opponent ++;
	console.log(opponent);
}

function fight() {
	if (opponent == 2) {
		document.getElementById("enemy").setAttribute("src", "http://www.clipartkid.com/images/646/free-blue-fighter-plane-clip-art-CccbiQ-clipart.png");
		opponentHealth = 100;
		displayHealth();
		console.log(opponent);
	} else if(opponent == 3){
		document.getElementById("enemy").setAttribute("src", "https://vignette1.wikia.nocookie.net/commando2/images/7/7b/Tank_Commando_2_Shape_3307.png/revision/latest?cb=20130320065142");
		opponentHealth = 300;
		displayHealth();
	}
	$("div#something").html("<button class='button1' onclick='attack();''>Attack</button><button class='button1' onclick='heal();''>Heal</button>");
}