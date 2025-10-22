const btnHtml = document.getElementById("jokeBtn");
const jokeHtml = document.getElementById("joke");

getJoke();

function getJoke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com/", config)
    .then((response) => response.json())
    .then((data) => {
      jokeHtml.innerHTML = data.joke;
    });
}

btnHtml.addEventListener("click", getJoke);
