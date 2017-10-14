
var random_result;
var lost;
var win;


random_result = Math.floor(Math.random() * 99) + 30; //hoisting

console.log(random_result)

$("#result").html('Random Result: ');
for(var i = 0; i < 4; i++){

	var random = Math.floor(Math.random() * 12);
	console.log(random);
	var crystal = $("<div>");
		crystal.attr({
			"class": 'crystal',
			"data-random": random
		});
	$(".crystals").append(crystal);

}


// Game with 4 crystals and Random result
// Every crystal needs to have a random number between 1 - 12
// A new random number should be generated every time we win or lose
// to those 4 crystals
// When clicking any crystal, it should add with the previous
// Until it equals the randomResult
// If it is greater than the Random Result, we decrement a lost counter
// If it is equal, then we increment a win counter

