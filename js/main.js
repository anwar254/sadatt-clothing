// animating the humberger menu
const hum = document.getElementById("hum");

// listening for mouse click event
hum.addEventListener('click', event => {
	// hum.classList.add('animate');
	const elem = event.target;

	if (elem.matches('.pushed')) {
		elem.classList.remove('pushed')
	}else{
		elem.classList.add('pushed')
	}
})