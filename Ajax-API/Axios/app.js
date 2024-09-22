const getJokes = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    return response.data.joke;
  } catch (err) {
    return "Gagal mendapatkan Lelucon";
  }
};

const tombol = document.querySelector("button");

async function buatJoke() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = await getJokes();
  ul.appendChild(li);
}

tombol.addEventListener("click", buatJoke);
