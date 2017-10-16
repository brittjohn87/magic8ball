$("#picture").click(function(){
	prompt("Ask Me Anything?");
	$("#picture").effect( "shake" );
	$("#response").fadeIn("slow");

var number = Math.random();

	if (number <= 0.33){
		$('#response').html("Yes!");
	}

	else if (0.34 >= number <= 0.66){
		$('#response').html("No!")
	}

	else if (0.67 >= number <= 0.87){
		$('#respone').html("It seems so!")
	}

	else if (0.88 >= number <= 1){
		$('#response').html("Maybe!")
	}

});


// $("img").click(function() {
  
// });



// function game(question){

// 	var question 







// }