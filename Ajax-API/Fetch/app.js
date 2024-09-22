// XML HTTP Request version
// const req = new XMLHttpRequest();

// req.onload = function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// };

// req.onerror = function () {
//   console.log("Error", this);
// };

// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();

// Fetch version

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that resource");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log("json", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

// const loadPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log("Error", err);
//   }
// };

// loadPeople();

// axios
//   .get("https://swapi.dev/api/peoplesdfds/1")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     alert(err.message);
//   });

const loadPeople = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
    console.log(err.response.status);
    console.log(err.response.data);
  }
};
