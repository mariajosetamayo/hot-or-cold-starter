
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function clearAll(){
  		document.getElementById("feedback").innerHTML = "Make your Guess!"
  		// $("counter").val('');
  		$("#guessList").empty()
	    // document.getElementById("userGuess").value = ""
	    // document.getElementById("feedback").value = ""
	    document.getElementById("count").value = ""
	    // document.getElementById("guessList").value = ""
	});
	
	/*---  to get the user's input ---*/
	var input = 100
	var counter = 0
	var randomNumber

	$("#userGuess").keyup(function () {
	    input = document.getElementById("userGuess").value
	    // var userInput = Number(input)
	    console.log(input)
	});
	

	$("#guessForm").submit(function (){
		var userInput = Number(input)
		if(userInput < 0 || userInput > 100){
  			alert('Please enter a number between zero and 100');
  			return true;
  		}
    });

	function generateRandomNumber(){
		 randomNumber = Math.floor(Math.random() * 100) + 1;
		console.log(generateNumber())
	}

	
    // to submit a guess
    $("#guessForm").submit(function (event){
    	// console.log($('#feedback').text())
    	event.preventDefault();
    	counter++
    	var userInput = Number(input)
    	
    	var inputVsRandom = randomNumber - userInput;
    	
		if (randomNumber === userInput){
			document.getElementById("feedback").innerHTML = "You win!"
		}
		else if (Math.abs(inputVsRandom) < 10){
			document.getElementById("feedback").innerHTML = "Hot"
		} 
		else if (Math.abs(inputVsRandom) > 9 && Math.abs(inputVsRandom) < 20){
			document.getElementById("feedback").innerHTML = "Warm"
		}
		else if (Math.abs(inputVsRandom) > 19 && Math.abs(inputVsRandom) < 30){
			document.getElementById("feedback").innerHTML = "Cold"
		}
		// else if (Math.abs(inputVsRandom) > 29 && Math.abs(inputVsRandom) < 50){
		// 	document.getElementById("feedback").innerHTML = "Cold"
		// }
		else {
			document.getElementById("feedback").innerHTML = "Ice cold"
		}

		$("#guessList").append("<li>" + userInput + "</li>");
		document.getElementById("count").innerHTML = counter
    	document.getElementById("userGuess").value = ""
   
  	});
	
	

});


