const valueRef = document.querySelector("#value");
const counterRef = document.querySelector("#counter");

let counterValue = 0;

counterRef.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.tagName === "BUTTON") {
    if (event.target.attributes["data-action"].value === "increment") {
      counterValue += 1;
    } else {
      counterValue -= 1;
    }
    valueRef.innerHTML = counterValue;
  }
}
