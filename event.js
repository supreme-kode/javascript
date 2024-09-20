const button = document.querySelector("#clickme");

button.onclick = () => console.log("You click me");

button.onmouseover = () => console.log("Dont touch me");

const eventBtn = document.querySelector("#eventbtn");

eventBtn.addEventListener("click", stepSatu);
eventBtn.addEventListener("click", stepDua);

function stepSatu() {
  console.log("Step satu");
}

function stepDua() {
  console.log("Step dua");
}
