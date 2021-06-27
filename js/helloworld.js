const EARTH = document.querySelector(".earth");
const TEXT = document.querySelector(".hello__world");

function bounceEffect() {
TEXT.style.fontSize = "0";
gsap.to(TEXT, 2, { fontSize: 50, ease: "bounce.out" });
}

EARTH.addEventListener("click", () => {
bounceEffect();
});

window.addEventListener("load", () => {
setTimeout(function(){ bounceEffect();}, 500);
});

document.addEventListener("mousemove", parallax);
function parallax(e){
	document.querySelectorAll(".object").forEach(function(move){

	var moving_value = move.getAttribute("data-value");
	var x = (e.clientX * moving_value) / 250;
	var y = (e.clientY * moving_value) / 250;

	move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
	});
}
