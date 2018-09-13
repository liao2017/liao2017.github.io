// Going to need to us JS for responsive programming like in resume website.
//	-Changing the width percentage of the blogBody
//	-Shrinking the blog post window size
//	-resizing toolbar
//	-special post format for mobile? (current square too small)
//This is another comment on testing (master)!


// This is a testing comment...

function resizeBody(width){

	var body = document.getElementById("blogBody");

	if(width < 450){
		body.style.width = "100%";
	}
	else if(width < 900){
		body.style.width = "95%";
	}
	else if(width < 1200){
		body.style.width = "80%";
	}
	else{
		body.style.width = "70%";
	}
}

$(window).resize(function(){
	var width = document.documentElement.clientWidth;
	resizeBody(width);
});

//Examples:
//var title = document.getElementById("title");
// title.style.fontSize = "4.5em";
// maps.src = "images/mapsSmall.png";