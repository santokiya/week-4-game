
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

//Setters??
//Getters??

//$(".crystal").attr('class', 'red') //setting a value 

// Game with 4 crystals and Random result // Every crystal needs to have a random number between 1 - 12
var resetAndStart = function () {

	$(".crystals").empty();

	var images = [  'http://www.sundropcrystal.com/store/media/p7200047c.jpg', 
				    'http://mysticinvestigations.com/paranormal/wp-content/uploads/2016/08/Stone-Crystal-Strength.jpg',
				    'https://i.pinimg.com/736x/f3/17/3c/f3173ce044ad100e225e50943d6f0c46--natural-crystals-a-natural.jpg',
				    'http://thespiritscience.net/wp-content/uploads/2014/06/lasercrystal.jpg'];

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
			// Not sure what is going on here codewise.. setting background image
			crystal.css({
				"background-image":"url('" + (images[i]) + "')",
				"background-size":"cover"

			})
		$(".crystals").append(crystal);

			//display the number for testing
			//crystal.html(random)
}
// A new random number should be generated every time we win or lose
// added it to the function to eliminate repetition
$("#previous").html("Total score: " + previous);

}

resetAndStart ();
// When clicking any crystal, it should add with the previous

// Event Delegation
$(document).on('click', ".crystal", function () {



	
	
	var num = parseInt($(this).attr('data-random'));//Getters: this is getting the value from this
// parseInt will parse a string argument and return an integer

previous += num;

$("#previous").html("Total score: " + previous);

console.log(previous);
// If it is greater than the Random Result, increment a lost counter
if(previous > random_result){
	
	lost++;

	$("#lost").html("You Lose: " + lost);

	previous = 0;

	resetAndStart ();
// If it is equal, then we increment a win counter
}
else if(previous === random_result){
	
	win++;

	$("#win").html("You Win: " + win);

	previous = 0;

	resetAndStart ();
}




});


// to those 4 crystals

// Until it equals the randomResult



