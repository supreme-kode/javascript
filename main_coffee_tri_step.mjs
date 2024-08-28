import { makeCoffee, minumCoffee, sendCoffee } from "./coffee_tri_step.mjs";

console.log("Saya memesan kopi di kafe.");

makeCoffee(() => {
  sendCoffee(() => {
    minumCoffee(() => {
      // console.log("Pramusaji memberikan kopi pesanan.");
      // console.log("Saya mendapatkan kopi dan menghabiskannya.");
    });
  });
});
