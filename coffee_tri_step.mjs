function makeCoffee(callback) {
  const estimationTime = 10_000;

  const inSeconds = Math.ceil(estimationTime / 1000);
  console.log(
    `Mohon menunggu. Pramusaji sedang membuat kopi dalam ${inSeconds} detik`
  );

  setTimeout(() => {
    console.log("Pramusaji selesai membuat kopi.");
    callback();
  }, estimationTime);
}

function sendCoffee(callback) {
  const estimationTime = 5_000;
  console.log("Pramusaji sedang mengantarkan kopi pesanan.");

  setTimeout(() => {
    console.log("Pramusaji sudah sampai ke meja");
    callback();
  }, estimationTime);
}

function minumCoffee(callback) {
  const estimationTime = 15_000;
  console.log("Saya sedang menikmati seteguk demi seteguk Coffee Expresso.");
  setTimeout(() => {
    console.log("Saya sudah habis minum kopi.");
    callback();
  }, estimationTime);
}
export { makeCoffee, sendCoffee, minumCoffee };
