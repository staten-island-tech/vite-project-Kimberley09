import { animals } from "./animals.js";

const DOMSelectors = {
  container: document.querySelector(".animals-container"),
  originFilterButton: document.querySelector(".originFilter"),
  allAnimals: document.querySelector(".allAnimals"),
  longLifespanAnimals: document.querySelector(".longLifespanAnimals"),
};

function createCard(arr) {
  DOMSelectors.container.innerHTML = "";
  arr.forEach((a) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img class="img" src="${a.img}">
      <h1 class="name">${a.name}</h1>
      <p class="origin">Origin: ${a.origin}</p>
      <p class="lifespan">Lifespan: ${a.lifespan} years</p>
    `;
    DOMSelectors.container.appendChild(card);
  });
}

createCard(animals);

DOMSelectors.originFilterButton.addEventListener("click", function () {
  let filteredAnimals = animals.filter((animal) => animal.origin.includes("Africa"));
  createCard(filteredAnimals);
});

DOMSelectors.allAnimals.addEventListener("click", function () {
  createCard(animals);
});

DOMSelectors.longLifespanAnimals.addEventListener("click", function () {
  let filteredAnimals = animals.filter((animal) => animal.lifespan > 70);
  createCard(filteredAnimals);
});

const colorSwapButton = document.querySelector(".colorSwap");
colorSwapButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

