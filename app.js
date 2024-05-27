let pass = document.querySelector("#password");
let passTwo = document.querySelector("#password_two");
let error = document.querySelector(".error");
let input = document.querySelectorAll("input");

function checkPassword() {
  if (pass.value !== passTwo.value) {
    button.type = "button";
    passTwo.style.backgroundColor = "red";
    error.style = "display: block";
    passTwo.value = ``;
  }
  if (pass.value === passTwo.value && pass.value != ``) {
    console.log("FORM fill bisi");
    error.style = "display: block";
    error.textContent = `Same password`;
    passTwo.style.backgroundColor = "green";
    button.type = "submit";
  }
}

let button = document.querySelector("button");

button.addEventListener("click", checkPassword);
