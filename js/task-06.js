const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

inputRef.addEventListener("blur", onBlur);

function onBlur(event) {
  if (event.target.value !== "") {
    if (
      event.target.value.length ===
      Number(event.target.attributes["data-length"].value)
    ) {
      event.target.classList.add("valid");
      event.target.classList.remove("invalid");
    } else {
      event.target.classList.remove("valid");
      event.target.classList.add("invalid");
    }
  } else {
    event.target.classList.remove("valid");
    event.target.classList.remove("invalid");
  }
}
