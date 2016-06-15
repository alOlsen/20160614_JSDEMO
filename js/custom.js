$(document).ready(function(){
	//alert("HELLO WORLD!");

	//var userName = prompt("What's you Name?");
	//alert( userName );
	//console.log( userName );

	var weekdays = ["m", "t", "w", "th", "f"];
	var weekend = [ "sat", "sun" ];
	var week = [ weekdays, weekend ];

	console.log( week[0][2] );
	//output array
	console.log( weekdays )
	//output size of array
	console.log( weekdays.length )
	//output element of array at index 1
	console.log( weekdays[1] );

	console.log( "*******" )

	function runLoop(){
		for( i = 0; i < weekdays.length; i++ ){
			console.log("i is " +  i )
			console.log( weekdays[i] );

			if(i == 4){
				console.log("This is the last element")
				//document.getElementById("btn").style.backgroundColor = "red"
			}
		}
	}

	var isLightOn = false;

	$("#lightSwitch").click( function(){
		console.log( "CLICK WORKS");
		console.log( isLightOn)

		if(isLightOn){
			$("#room").css("background", "black")
			isLightOn = false;
		}else{
			$("#room").css("background", "yellow")
			isLightOn = true;
		}
	});


});