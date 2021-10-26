function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");

controlsRef.addEventListener("click", onButtonClick);

function onButtonClick(e) {
  const actions = [...Array.from(e.target.attributes, ({ name }) => name)];
  if (actions.includes("data-create")) {
    const inputCount = getInput(e.target.parentElement);
    if (inputCount !== null) {
      createBoxes(Number(inputCount.value));
    }
  } else if (actions.includes("data-destroy")) {
    destroyBoxes();
  }
}

function createBoxes(amount) {
  const divs = [];
  let len = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    const colorValue = getRandomHexColor();

    div.style.width = `${len}px`;
    div.style.height = `${len}px`;
    div.style.backgroundColor = `${colorValue}`;
    divs.push(div);

    len += 10;
  }
  boxesRef.append(...divs);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function getInput(parent) {
  return parent.querySelector("input");
}
