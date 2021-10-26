const loginForm = document.querySelector(".login-form");
const loginButton = loginForm.querySelector("button");

loginForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (
    e.currentTarget.email.value === "" ||
    e.currentTarget.password.value === ""
  ) {
    alert("Error!!! Empty fields!");
    return;
  }

  const data = {};
  [...e.currentTarget.elements].forEach((elem) => {
    if (elem.nodeName === "INPUT") {
      data[elem.attributes.name.value] = elem.value;
    }
  });

  console.log(data);
  e.currentTarget.reset();
}
