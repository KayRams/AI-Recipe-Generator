function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "453b0ed2c15539f029750o67ad974bt3";
  let context =
    "You are a world renowned chef. Your mission is to generate a well curated recipe in basic HTML. Make sure the recipe is short and easy. Do NOT mention HTML in the recipe. Make sure to follow the users intructions.";
  let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳Generating a ${instructionsInput.value} recipe for you...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
