const loginButton = document.querySelector(".login-button");
const hide = document.querySelector(".close");

function displayLoginForm() {
  const popoup = document.querySelector(".popup");
  popoup.style.display = "flex";
}

function hideLoginForm() {
  const popoup = document.querySelector(".popup");
  popoup.style.display = "none";
}

loginButton.addEventListener("click", displayLoginForm);
hide.addEventListener("click", hideLoginForm);
