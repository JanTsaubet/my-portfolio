let username = localStorage.getItem("username");
let messageDiv = document.getElementById("welcome-message");

document.addEventListener("DOMContentLoaded", () => {
  if (!username) {
    username = prompt("Please enter a username");
    localStorage.setItem("username", username);
  }

  messageDiv.innerHTML = `Hola! ${username}, Bienvenido a mi Portfolio!`;
});
