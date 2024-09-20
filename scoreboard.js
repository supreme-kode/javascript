const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const reset = document.querySelector("#reset");
const winPoint = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let selectValue = 3;
let isGameOver = false;

winPoint.addEventListener("change", () => {
  selectValue = parseInt(winPoint.value);
});

p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === selectValue) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === selectValue) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

reset.addEventListener("click", (e) => {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  isGameOver = false;
});
