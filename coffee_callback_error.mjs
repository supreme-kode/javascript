function makeCoffee(name, apaAja) {
  const estimationTime = 5_000;
  let isSuccess = false;

  const inSeconds = Math.ceil(estimationTime / 1000);
  console.log(
    `Mohon menunggu. Pramusaji sedang membuat kopi ${name} dalam ${inSeconds} detik`
  );

  setTimeout(() => {
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      apaAja(new Error("Gagal membuat kopi."), null);
      return;
    }

    console.log("Pramusaji selesai membuat kopi.");
    apaAja(null, name);
  }, estimationTime);
}

function sendCoffee(name, apaAja) {
  const estimationTime = 2_000;
  let isSuccess = false;

  console.log("Pramusaji sedang mengantarkan kopi pesanan.");
  setTimeout(() => {
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }
    if (!isSuccess) {
      apaAja(new Error("Gagal mengantarkan kopi."), null);
      return;
    }

    console.log("Pramusaji sudah sampai ke meja");
    apaAja(null, name);
  }, estimationTime);
}

export { makeCoffee, sendCoffee };
