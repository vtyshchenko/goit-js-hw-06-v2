const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

inputRef.addEventListener("blur", onBlur);

function onBlur(event) {
  if (event.target.value !== "") {
    const className =
      event.target.value.length ===
      Number(event.target.attributes["data-length"].value)
        ? "valid"
        : "invalid";
    event.target.classList.remove("valid");
    event.target.classList.remove("invalid");
    event.target.classList.add(className);
  } else {
    event.target.classList.remove("valid");
    event.target.classList.remove("invalid");
  }
}
