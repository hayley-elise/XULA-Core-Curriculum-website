function plusSlides(n){
	clearInterval(myTimer);
	if (n < 0){
	  showSlides(slideIndex -= 1);
	} else {
	 showSlides(slideIndex += 1); 
	}
	if (n === -1){
	  myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
	} else {
	  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
	}
   }