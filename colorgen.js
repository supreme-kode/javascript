const button = document.querySelector("button");
const h1 = document.querySelector("h1");

const generateRandomColor = () => {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

button.addEventListener("click", () => {
  const newColor = generateRandomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});
