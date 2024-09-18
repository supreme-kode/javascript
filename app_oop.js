// const hex = (r, g, b) => {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// const rgb = (r, g, b) => {
//   return `rgb(${r},${g},${b})`;
// };

// function convertColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;

//   color.rgb = function () {
//     return `rgb(${r},${g},${b})`;
//   };

//   color.hex = function () {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }
// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };
// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//     this.calcHSL();
//   }
//   innerRGB() {
//     const { r, g, b } = this;
//     return `${r}, ${g}, ${b}`;
//   }
//   colorName() {
//     console.log(`The color name is ${this.name}`);
//   }
//   rgb() {
//     return `rgb(${this.innerRGB()})`;
//   }
//   hex() {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
//   rgba(a = 1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`;
//   }
//   calcHSL() {
//     let { r, g, b } = this;
//     // Make r, g, and b fractions of 1
//     r /= 255;
//     g /= 255;
//     b /= 255;

//     // Find greatest and smallest channel values
//     let cmin = Math.min(r, g, b),
//       cmax = Math.max(r, g, b),
//       delta = cmax - cmin,
//       h = 0,
//       s = 0,
//       l = 0;
//     if (delta == 0) h = 0;
//     else if (cmax == r)
//       // Red is max
//       h = ((g - b) / delta) % 6;
//     else if (cmax == g)
//       // Green is max
//       h = (b - r) / delta + 2;
//     // Blue is max
//     else h = (r - g) / delta + 4;

//     h = Math.round(h * 60);

//     // Make negative hues positive behind 360°
//     if (h < 0) h += 360;
//     // Calculate lightness
//     l = (cmax + cmin) / 2;

//     // Calculate saturation
//     s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//     // Multiply l and s by 100
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);
//     this.h = h;
//     this.s = s;
//     this.l = l;
//   }
//   hsl() {
//     const { h, s, l } = this;
//     return `hsl(${h}, ${s}%, ${l}%)`;
//   }
//   fullySaturated() {
//     const { h, l } = this;
//     return `hsl(${h}, 100%, ${l}%)`;
//   }
//   opposite() {
//     const { h, s, l } = this;
//     const newHue = (h + 180) % 360;
//     return `hsl(${newHue}, ${s}%, ${l}%)`;
//   }
// }

// const skyColor = new Color(185, 243, 252, "Sky");

// class Peliharaan {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   makan() {
//     return `${this.name} lagi makan`;
//   }
// }

// class Kucing extends Peliharaan {
//   meong() {
//     return "Meoong!!";
//   }
// }

// class Anjing extends Peliharaan {
//   gongong() {
//     return "Guk...guk!!";
//   }
// }

// console.log("Bakan muncul pertama");

// setTimeout(() => {
//   console.log(
//     "Ini sudah masuk memory proses tapi dijalankan setelah 3 detik kedepan"
//   );
// }, 3_000);

// console.log("Bakal muncul kedua");

// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "yellow";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "green";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "blue";
//       }, 1_000);
//     }, 1_000);
//   }, 1_000);
// }, 1_000);

// Callback version
// const requestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4_000) {
//       failure("Error: Connection Timeout");
//     } else {
//       success(`Success: ${url} (${delay}ms) `);
//     }
//   }, delay);
// };

// requestCallback(
//   "google.com",
//   (a) => console.log(a),
//   (b) => console.log(b)
// );

// Promise Version
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Error: Connection Timeout");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

// requestPromise("google.com")
//   .then(() => {
//     console.log("Page 1");
//     requestPromise("google.com");
//   })
//   .then(() => {
//     console.log("Page 2");
//     requestPromise("google.com");
//   })
//   .then(() => {
//     console.log("Page 3");
//     requestPromise("google.com");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const delayColorChange = (color, delay) => {
//   return new Promise((berhasil, gagal) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       berhasil();
//     }, delay);
//   });
// };

// delayColorChange("red", 1000)
//   .then(() => delayColorChange("yellow", 1000))
//   .then(() => delayColorChange("green", 1000))
//   .then(() => delayColorChange("blue", 1000))
//   .then(() => delayColorChange("purple", 1000));

// async function colorChange() {
//   await delayColorChange("red", 1000);
//   await delayColorChange("yellow", 1000);
//   await delayColorChange("green", 1000);
//   await delayColorChange("blue", 1000);
//   await delayColorChange("purple", 1000);
//   return "All Done";
// }

// colorChange().then((respone) => {
//   alert(respone);
//   console.log(respone);
// });

// async function printRainbow() {
//   await colorChange();
//   console.log("All Done!");
// }

async function requestHandler() {
  try {
    let result = await requestPromise("google.com");
    console.log("Hello");
  } catch (error) {
    console.log("Pesan", error);
  }
}
