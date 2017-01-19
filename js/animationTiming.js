var olderNewer = false;

function checkAnim(){
	// var scroll = $(window).scrollTop();

	if($(window).scrollTop() + $(window).height() == $(document).height()){
		if(olderNewer == false){
			olderNewer = true;
			if(document.getElementById("older") != null){
				document.getElementById("older").classList.add('bounce');
			}

			if(document.getElementById("newer") != null){
				document.getElementById("newer").classList.add('bounce');
			}
		}
	}
}

checkAnim();
$(window).scroll(function (event) {
	checkAnim();
});