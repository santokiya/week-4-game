
var random_result;
var lost = 0;
var win = 0;
var previous = 0;
//Setters
//Getters

//$(".crystal").attr('class', 'red') //setting a value 

// Game with 4 crystals and Random result // Every crystal needs to have a random number between 1 - 12
var resetAndStart = function () {

		$(".crystals").empty();

		random_result = Math.floor(Math.random() * 69) + 30; //hoisting

	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1; //shouldn't start from 0 should start from 1
		//console.log(random);

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
		$(".crystals").append(crystal);

	}
	$("#previous").html(previous);
}


resetAndStart ();
// When clicking any crystal, it should add with the previous

// Event Delegation
$(document).on('click', ".crystal", function () {

resetAndStart();
	var result;
	
	var num = parseInt($(this).attr('data-random'));//Getters: this is getting the value from this
// parseInt will parse a string argument and return an integer
var reset = function () {

}
	$("#previous").html(previous);
	previous += num;
	console.log(previous);
	if(previous > random_result){
		lost--;

		$("#lost").html(lost);

		previous = 0;
		$("#previous").html(previous);

		resetAndStart ();

	}
	else if(previous === random_result){
		win++;

		$("#win").html(win);

		previous = 0;
		$("#previous").html(previous);

		resetAndStart ();
	}
	

	

});

// A new random number should be generated every time we win or lose
// to those 4 crystals

// Until it equals the randomResult
// If it is greater than the Random Result, we decrement a lost counter
// If it is equal, then we increment a win counter

