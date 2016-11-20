var yourHealth = 200;
var opponentHealth = 40;
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
	plus += 4;
	yourHealth += plus;
	if(yourHealth>350){
		alert("Your health cannot go any higher!");
		yourHealth = 350;
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
		if (opponentHealth>1200){
			opponentHealth = 1200;
		}
	}
	displayHealth();
}

function attack() {
	var atc = Math.floor((Math.random() * 10) + 1);
	atc += 5;
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
		if (opponentHealth>1200){
			opponentHealth = 1200;
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
		document.getElementById("enemy").setAttribute("src", "http://www.halopedia.org/images/thumb/4/47/H4-M97LanceMissileBattery-ScanRender.png/300px-H4-M97LanceMissileBattery-ScanRender.png");
		opponentHealth = 150;
		displayHealth();
		console.log(opponent);
	} else if(opponent == 3){
		document.getElementById("enemy").setAttribute("src", "http://www.pngall.com/wp-content/uploads/2016/07/God.png");
		opponentHealth = 900;
		displayHealth();
	}
	$("div#something").html("<button class='button1' onclick='attack();''>Attack (a)</button><button class='button1' onclick='heal();''>Heal (h)</button>");
	yes = "no";
}
