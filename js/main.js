// animating the humberger menu
const hum = document.getElementById("hum");
const srcBtn =document.getElementById('search-btn');
const menuDrop =  document.getElementById('nav--slide');

// listening for mouse click event
hum.addEventListener('click', event =>{
	const elem = event.target;
	if (elem.matches('.pushed') && menuDrop.matches('.pushed')) {
		elem.classList.remove('pushed');
		menuDrop.classList.remove('pushed');
	}else{
		elem.classList.add('pushed');
		menuDrop.classList.add('pushed');
	}
});


// listening for the search button click event
srcBtn.addEventListener('click', ()=>{
	const input = document.getElementById('inp');
	const inp = input.children[0];

	inp.classList.add('pushed');
})

// navigation menu