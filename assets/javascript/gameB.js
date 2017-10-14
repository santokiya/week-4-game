
var random_result;
var lost = 0;
var win = 0;
var previous = 0;
//Setters
//Getters

//$(".crystal").attr('class', 'red') //setting a value 


// Game with 4 crystals and Random result
// Every crystal needs to have a random number between 1 - 12
random_result = Math.floor(Math.random() * 69) + 30; //hoisting

console.log(random_result)

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
// When clicking any crystal, it should add with the previous
$(".crystal").on('click', function () {

	var result;
	
	var num = parseInt($(this).attr('data-random'));//Getters: this is getting the value from this
// parseInt will parse a string argument and return an integer

	previous += num;
	console.log(previous);
	if(previous > random_result){
		lost--;

		$("#lost").html(lost);

	}
	else if(previous === random_result){
		win++;

		$("#win").html(win);
	}
	

	

});

// A new random number should be generated every time we win or lose
// to those 4 crystals

// Until it equals the randomResult
// If it is greater than the Random Result, we decrement a lost counter
// If it is equal, then we increment a win counter

