var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");

main.addEventListener("mousemove", function (d) {
  gsap.to(cursor, {
    x: d.x,
    y: d.y,
    duration: 1,
  });
});

image.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 4,
  });
});

image.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 1,
  });
});
