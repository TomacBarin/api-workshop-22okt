// Hämta skämt från API
const jokeHtml = document.getElementById("joke");
const jokeBtnHtml = document.getElementById("jokeBtn");

getJoke();

// async-function
async function getJoke() {
  jokeHtml.innerHTML = "Laddar skämt";
  console.log("Laddar skämt");
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const response = await fetch(
    "https://api.chucknorris.io/jokes/random",
    config
  );
  // Behandla datan
  const data = await response.json();
  // Placera på sidan
  jokeHtml.innerHTML = data.value;
}

// Knapp som hämtar och visar nytt skämt
jokeBtnHtml.addEventListener("click", getJoke);
