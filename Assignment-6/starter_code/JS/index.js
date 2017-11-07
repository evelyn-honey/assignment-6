//Make an array to create the value for the different selections
$(document).ready(function () {

	var cityOption = ["NYC", "SF", "LA", "ATX", "SYD"];
	var cityList = [];

	function changeBackground(){
		cityOption.forEach(function(city){
		  	$("#city-type").append('<option value='+ city +'>'+ city +'</option>');

		})
	};
	changeBackground();  
	
	//when the user selects the option it changes the background
		//the id for the dropdown is city-type
	//use switch to change the background
	//get the value using $.val
	
   $('form').on('change', '#city-type',function(){
	    var city = $('#city-type').val();
	    switch(city) {
	    //switch NYC
	      case "NYC":
	        $('body').attr('class','nyc');
	        break;
	      //switch SF
	      case "SF":
	        $('body').attr('class','sf');
	        break;
	      //switch LA
	      case "LA":
	        $('body').attr('class','la');
	        break;
	      //switch ATX
	      case "ATX":
	        $('body').attr('class','austin');
	        break;
	      //switch SYD
	      case "SYD":
	        $('body').attr('class','sydney');
	        break;
	      default:
	    	$('body').removeClass();
	    }
	});
});

//use $.change to get the user's actions
