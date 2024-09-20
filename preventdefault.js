const form = document.querySelector("#form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const noteValue = input.value.trim();

  // Cek jika input tidak kosong dan tidak sudah ada
  if (
    noteValue &&
    !Array.from(list.children).some((li) => li.innerText === noteValue)
  ) {
    const newList = document.createElement("li");
    newList.innerText = noteValue;
    list.append(newList);
    input.value = "";
  }

  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const noteValue = input.value.trim();

    // Cek jika input tidak kosong dan tidak sudah ada
    if (
      noteValue &&
      !Array.from(list.children).some((li) => li.innerText === noteValue)
    ) {
      const newList = document.createElement("li");
      newList.innerText = noteValue;
      list.append(newList);
      input.value = "";
    }
  }
});

list.addEventListener("click", (e) => {
  // console.log(e);
  e.target.nodeName === "LI" && e.target.remove();
});
