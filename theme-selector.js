let button = document.querySelector("button");
let light = document.getElementById("light-theme");
let dark = document.getElementById("dark-theme");
button.onclick = function() {
	light.toggleAttribute("disabled");
	dark.toggleAttribute("disabled");
};