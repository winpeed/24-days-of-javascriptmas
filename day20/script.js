const inputs = document.querySelectorAll(".controls input");
const eye = document.querySelectorAll(".eye");
const nose = document.querySelector(".nose");
const button = document.querySelectorAll(".button");

inputs.forEach((input) => {
  input.addEventListener("change", function (event) {
    if (event.target.name === "color") {
      eye.forEach((item) => {
        item.style.backgroundColor = event.target.value;
      });
    } else if (event.target.name === "color3") {
      nose.style.borderColor = `transparent transparent transparent ${event.target.value}`;
    } else if (event.target.name === "color2") {
      button.forEach((but) => {
        but.style.backgroundColor = event.target.value;
      });
    }
  });
});
