// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseImgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 500; i++) {
  const pokeBall = document.createElement("div");
  pokeBall.classList.add("pokemon");

  container.appendChild(pokeBall);

  const pokeImg = document.createElement("img");

  pokeImg.src = `${baseImgUrl}${i}.png`;
  pokeBall.appendChild(pokeImg);

  const label = document.createElement("span");
  label.innerText = `#${i}`;

  pokeBall.append(label);
}
