const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const nameInput = document.getElementById("name-input");
const sortBtn = document.getElementById("sort-btn");
const retryBtn = document.getElementById("retry-btn");
const messageEl = document.getElementById("message");
const resultEl = document.getElementById("result");

const state = {
  lastHouse: "",
};

function pickHouse(avoidLastHouse) {
  const choices = [];

  for (let i = 0; i < houses.length; i++) {
    if (!avoidLastHouse || houses[i] !== state.lastHouse) {
      choices.push(houses[i]);
    }
  }

  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function assignHouse(isRetry) {
  const name = nameInput.value.trim();

  if (name === "") {
    messageEl.textContent = "Please enter your name first.";
    resultEl.textContent = "";
    retryBtn.hidden = true;
    return;
  }

  messageEl.textContent = "";
  const chosenHouse = pickHouse(isRetry);
  state.lastHouse = chosenHouse;

  resultEl.textContent = `${name} belongs in ${chosenHouse}!`;
  retryBtn.hidden = false;
}

sortBtn.addEventListener("click", function () {
  assignHouse(false);
});

retryBtn.addEventListener("click", function () {
  assignHouse(true);
});
