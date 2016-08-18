$(document).ready(function(){

	var input = 100
	var counter = 0
	var randomNumber = generateRandomNumber()

	/*--- Display information modal box ---*/
  	
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function clearAll(event){
  		event.preventDefault();
  		document.getElementById("feedback").innerHTML = "Make your Guess!"
  		$("#guessList").empty()
  		counter = 0
	    document.getElementById("count").innerHTML = counter
	    randomNumber = generateRandomNumber()
	 
	});
	
	/*---  to get the user's input ---*/

	$("#userGuess").keyup(function () {
	    input = document.getElementById("userGuess").value
	});
	

	$("#guessForm").submit(function (){
		var userInput = Number(input)
		if(userInput < 0 || userInput > 100){
  			alert('Please enter a number between zero and 100');
  			return true;
  		}
    });

	function generateRandomNumber(){
		 var n = Math.ceil(Math.random() * 100);
		 return n
	}

		
    /*---  to submit a guess ---*/

    $("#guessForm").submit(function (event){
    	event.preventDefault();
    	counter++
    	var userInput = Number(input)
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

		$("#guessList").append("<li>" + userInput + "</li>");
		document.getElementById("count").innerHTML = counter
    	document.getElementById("userGuess").value = ""
   
  	});
	
	

});