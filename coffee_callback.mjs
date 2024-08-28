export function makeCoffee(callback) {
  const estimationTime = 5_000;

  const inSeconds = Math.ceil(estimationTime / 1000);
  console.log(
    `Mohon menunggu. Pramusaji sedang membuat kopi dalam ${inSeconds} detik`
  );

  setTimeout(() => {
    console.log("Pramusaji selesai membuat kopi.");
    callback();
  }, estimationTime);
}
