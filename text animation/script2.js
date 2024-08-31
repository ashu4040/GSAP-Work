function breakTheText() {
  var h1 = document.querySelector("h1");

  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");

  halfText = splittedText.length / 2;

  var clutter = "";

  splittedText.forEach(function (e, idx) {
    if (idx < halfText) {
      clutter += `<span class="a">${e}</span>`;
    } else {
      clutter += `<span class="b">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
  console.log("jjjj");
}
breakTheText();

gsap.from("h1 .a", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.15,
});

gsap.from("h1 .b", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: -0.5,
  stagger: 0.15,
});
