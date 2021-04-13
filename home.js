//initialises the slideshow
function plusSlides(n){
	clearInterval(myTimer);
	if (n < 0){
	  showSlides(slideIndex -= 1);
	} else {
	 showSlides(slideIndex += 1); 
	}
	if (n === -1){
	  myTimer = setInterval(function(){plusSlides(n + 2)}, 8000);
	} else {
	  myTimer = setInterval(function(){plusSlides(n + 1)}, 8000);
	}
   }
   function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
   }
   
   //timer set to 8 seconds
   window.addEventListener("load",function() {
	showSlides(slideIndex);
	myTimer = setInterval(function(){plusSlides(1)}, 8000);
 });

 //allows you to select a dot to go straight to that slide
 function currentSlide(n){
	clearInterval(myTimer);
	myTimer = setInterval(function(){plusSlides(n + 1)}, 8000);
	showSlides(slideIndex = n);
   }

//allows slideshow to pause while hovering over slide
   var slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
	slideshowContainer.addEventListener('mouseenter', pause);
	slideshowContainer.addEventListener('mouseleave', resume);
	pause = () => {
		clearInterval(myTimer);
	};
	resume = () => {
		clearInterval(myTimer);
		myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
	  };
