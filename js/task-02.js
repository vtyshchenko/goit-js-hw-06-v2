const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulRef = document.querySelector("#ingredients");

let elements = ingredients.map((item) => {
  const elemLi = document.createElement("li");
  elemLi.textContent = item;
  elemLi.classList.add("item");
  return elemLi;
});

ulRef.append(...elements);
