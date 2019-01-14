// PopUp forms
// Getting the modals from the Dom
const container = document.getElementsByClassName('cart--session--popup');

// Loooping over all the modal
for(let i = 0; i <= container.length-1; i++){
	var modal = document.getElementById(container[i].id); //getting the id of each modal

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(e) {
	    if (e.target == modal) { 
	        modal.classList.add('is-not-visible'); // Hiding the modal from the DOM
	    }
	}
}

// Hero Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("cart--slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); 
}