const generateRandomColor = () => {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll("button");
const headings = document.querySelectorAll("h1");

// for (const button of buttons) {
//   button.addEventListener("click", () => {
//     button.style.backgroundColor = generateRandomColor();
//     button.style.color = generateRandomColor();
//   });
// }

function colorize() {
  this.style.backgroundColor = generateRandomColor();
  this.style.color = generateRandomColor();
}

for (const button of buttons) {
  button.addEventListener("click", colorize);
}

for (const heading of headings) {
  heading.addEventListener("click", colorize);
}
