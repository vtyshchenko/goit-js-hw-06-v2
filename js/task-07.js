const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRef.valueAsNumber = textRef.offsetHeight;

fontSizeControlRef.addEventListener("input", onCahgeInput);

function onCahgeInput(event) {
  textRef.style.fontSize = `${fontSizeControlRef.valueAsNumber}px`;
}
