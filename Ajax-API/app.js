const data = `{
  "ticker": {
    "base": "BTC",
    "target": "IDR",
    "price": "345001000.00000000",
    "volume": "28.02287745",
    "change": "-430000.00000000"
  },
  "timestamp": 1674472505,
  "success": true,
  "error": ""
}`;

const res = JSON.parse(data);

const person = {
  nama: "Andri Raharjo",
  gender: "Male",
};
console.log(person);
const personJson = JSON.stringify(person);
console.log(personJson);
