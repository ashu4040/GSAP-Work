var menu = document.querySelector("#nav i");
var cross = document.querySelector("#fullnav i");

var tl = gsap.timeline();

tl.to("#fullnav", {
  right: 0,
  duration: 0.8,
});

tl.from("#fullnav h1", {
  x: 100,
  duration: 0.5,
  stagger: 0.3,
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

cross.addEventListener("click", function () {
  tl.reverse();
});
