// Hämta skämt från API
const jokeHtml = document.getElementById("joke");
const jokeBtnHtml = document.getElementById("jokeBtn");

getJoke();

// async-function
async function getJoke() {
  try {
    jokeHtml.innerHTML = "Laddar skämt";
    console.log("Laddar skämt");
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const response = await fetch(
      //"https://api.chucknorris.io/jokes/random",
      "api.chucknorris.io/jokes/tjosan",
      config
    );
    if (!response.ok)
      throw new Error("Nu blev det allt fel hörrö:", response.status);

    // Behandla datan
    const data = await response.json();
    jokeHtml.innerHTML = data.value;
  } catch (error) {
    jokeHtml.innerHTML = "Fel";
    console.log("Fel fel fel fel", error);
  }
}

// Knapp som hämtar och visar nytt skämt
jokeBtnHtml.addEventListener("click", getJoke);
