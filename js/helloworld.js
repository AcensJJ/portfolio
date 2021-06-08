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

