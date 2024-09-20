document.querySelector("button").addEventListener("click", (e) => {
  console.log(e);
});

const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("Tombol arah atas");
      break;
    case "ArrowDown":
      console.log("Tombol arah bawah");
      break;
    case "ArrowLeft":
      console.log("Tombol arah kiri");
      break;
    case "ArrowRight":
      console.log("Tombol arah kanan");
      break;
    default:
      console.log("Diabaikan");
  }
});
