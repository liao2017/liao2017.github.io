var width = document.documentElement.clientWidth;
resizeBody(width);

function resizeBody(width){

	var pic = document.getElementById("profile");

	if(width < 768){
		pic.src = "images/ppGreen.jpg";
	}else if(width > 1024){
		pic.src = "images/ppRedSmall.jpg";
	}else if(width > 768){
		pic.src = "images/ppRed.jpg";
	}
}

$(window).resize(function(){
	var width = document.documentElement.clientWidth;
	resizeBody(width);
});