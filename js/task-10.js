function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");

controlsRef.addEventListener("click", onButtonClick);

function onButtonClick({ target: { attributes, parentElement } }) {
  // function onButtonClick(e) {
  // const actions = Array.from(e.target.attributes, ({ name }) => name);
  const actions = Array.from(attributes, ({ name }) => name);
  if (actions.includes("data-create")) {
    // const inputCount = getInput(e.target.parentElement);
    const inputCount = getInput(parentElement);
    if (inputCount) {
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
    //чтобы писать декларативный код используйте шаблоные
    // строки вместо createElement
    // const div = document.createElement("div");

    // div.style.width = `${len}px`;
    // div.style.height = `${len}px`;
    // div.style.backgroundColor = `${colorValue}`;
    const colorValue = getRandomHexColor();

    const div = `<div style="width: ${len}px; height: ${len}px; background-color: ${colorValue}"></div>`;
    divs.push(div);
    len += 10;
  }
  boxesRef.innerHTML = divs;
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function getInput(parent) {
  return parent.querySelector("input");
}
