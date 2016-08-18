$(document).ready(function(){

	var input = 100
	var counter = 0
	// prevent side-effects by equalling variable to function
	var randomNumber = generateRandomNumber()

	/*--- Display information modal box ---*/
  	
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	/*--- New game button ---*/

  	$(".new").click(function clearAll(event){
  		event.preventDefault();
  		document.getElementById("feedback").innerHTML = "Make your Guess!"
  		$("#guessList").empty()
  		counter = 0
	    document.getElementById("count").innerHTML = counter
	    // generates new random number, dont use var infront because this re-declares variable
	    randomNumber = generateRandomNumber()
	 
	});
	
	/*---  to get the user's input ---*/

	// to get the user's entered input
	$("#userGuess").keyup(function () {
	    input = document.getElementById("userGuess").value
	});
	
	// to display an alert message if input was below 0, above 100 or it was a string 
	$("#guessForm").submit(function (){
		var userInput = Number(input)
		if(userInput < 0 || userInput > 100 || isNaN(userInput)){
  			alert('Please enter a number between zero and 100');
  			return true;
  		}
    });
	// generates a random number
	function generateRandomNumber(){
		 var n = Math.ceil(Math.random() * 100);
		 return n
	}
	
		
    /*---  to submit a guess and give feedback to the user ---*/

    $("#guessForm").submit(function (event){
    	event.preventDefault();
    	// counter counts the number of times a user submited an inpu
    	counter++
    	// to make input a number
    	var userInput = Number(input)
    	
    	// conditions to give feedback to user

    	// this first if statement will empty input box if user entered a string, a number below 0, number above 100
    	if(userInput < 0 || userInput > 100 || isNaN(userInput)){
    		document.getElementById("userGuess").value = ""
  			return true;
  		}
    	var inputVsRandom = randomNumber - userInput;
    	
		if (randomNumber === userInput){
			document.getElementById("feedback").innerHTML = "You win! Click on New Game to play again"
		}
		else if (Math.abs(inputVsRandom) < 10){
			document.getElementById("feedback").innerHTML = "Hot"
		} 
		else if (Math.abs(inputVsRandom) > 10 && Math.abs(inputVsRandom) < 20){
			document.getElementById("feedback").innerHTML = "Warm"
		}
		else if (Math.abs(inputVsRandom) > 20 && Math.abs(inputVsRandom) < 30){
			document.getElementById("feedback").innerHTML = "Cold"
		}
		else {
			document.getElementById("feedback").innerHTML = "Ice cold"
		}

		// appends input to guess list for user to keep record of guesses
		
		$("#guessList").append("<li>" + userInput + "</li>");
		
		// tells user the number of guesses
		
		document.getElementById("count").innerHTML = counter
		
		// empties input box after the user submits an input
    	
    	document.getElementById("userGuess").value = ""
   
  	});
	
	

});