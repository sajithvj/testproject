/**
 * 
 */
function validateComments(input){
	if(input.value.length<20){
		input.setCustomValidity("You need to comment in more detail.");
	}
	else{
		//clear any error message
		input.setCustomValidity("");
	}
}