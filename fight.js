var yourHealth = 150;
var opponentHealth = 10;
var opponent = 1;
var money = 0;
var yes = "no";

function displayunicode(e){
	var unicode=e.keyCode? e.keyCode : e.charCode;
	if (unicode == 65|| unicode == 97){
		if (yes=="no"){
			attack();
		}
	}
	if (unicode == 72|| unicode == 107){
		if(yes=="no"){
			heal();
		}
	}
}

function displayHealth() {
	$("p#healths").html(" &nbsp;&nbsp;&nbsp;&nbsp;<b>Health: "+yourHealth+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Health: "+opponentHealth+"</b>");
}

function heal() {
	var plus = Math.floor((Math.random() * 10) + 1);
	yourHealth += plus;
	if(yourHealth>300){
		alert("Your health cannot go any higher!");
		yourHealth = 300;
	}
	var attack = Math.floor((Math.random() * 2) + 1);
	if (attack==1){
		var foo = Math.floor((Math.random() * 10) + 1);
		yourHealth -= foo;
		if (yourHealth<=0){
			alert("You lose! Play again?");
			location.reload();
		}
	} else {
		var bar = Math.floor((Math.random() * 10) + 1);
		opponentHealth += bar;
		if (opponentHealth>350){
			opponentHealth = 350;
		}
	}
	displayHealth();
}

function attack() {
	var atc = Math.floor((Math.random() * 10) + 1);
	opponentHealth -= atc;
	if(opponentHealth<=0){
		opponentHealth = 0;
		displayHealth();
		alert("You've won this time...");
		next();
	}
	var attack = Math.floor((Math.random() * 2) + 1);
	if (attack==1){
		var foo = Math.floor((Math.random() * 10) + 1);
		yourHealth -= foo;
		if (yourHealth<=0){
			alert("You lose! Play again?");
			location.reload();
		}
	} else {
		var bar = Math.floor((Math.random() * 10) + 1);
		opponentHealth += bar;
		if (opponentHealth>350){
			opponentHealth = 350;
		}
	}
	displayHealth();
}

function next() {
	yes = "yes";
	money += 100*opponent;
	alert("You got "+100*opponent+" coins!");
	if (opponent == 3){
		alert("You win!");
		window.location.href = 'levels.html';
	} else {
		$("#something").html("<button class='button1' onclick='fight();'>Next Battle</button>");
		opponent ++;
		console.log(opponent);
	}
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
	$("div#something").html("<button class='button1' onclick='attack();''>Attack (a)</button><button class='button1' onclick='heal();''>Heal (h)</button>");
	yes = "no";
}
