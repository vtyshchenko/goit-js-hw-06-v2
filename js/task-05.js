const nameRef = document.querySelector("#name-output");
const inputRef = document.querySelector("#name-input");

inputRef.addEventListener("input", onInput);

function onInput(event) {
  nameRef.innerHTML =
    event.target.value === "" ? "Anonymous" : event.target.value;
}
