// animating the humberger menu
const hum = document.getElementById("hum");

console.log(hum)

// listening for mouse click event
hum.addEventListener('click', ()=>{
	console.log("mouse clicked")
})
// listening for mouse enter event
hum.onmouseenter = event => {
	console.log("mouse enter")
}

// listening for mouse out event
hum.onmouseleave = () => {
	console.log("mouse out")
}