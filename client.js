//Arhivo cliente , para que sepa que se esta conectando con el servidor

let socket = io("http://localhost:3000");

const formularioMensaje = document.querySelector(".formMessages");
const mensajeTextarea = document.querySelector("#messageTextField", "si");
const messages = document.querySelector("#messages");

let userName = "";
const userNameField = document.querySelector("#userNameField");
const userNameButton = document.querySelector("#userNameButton");
userNameButton.addEventListener("click", () => {
  userName = userNameField.value;
  userNameField.disabled = true;
  userNameButton.disabled = true;
});

formularioMensaje.addEventListener("submit", (e) => {
  e.preventDefault();
  let message = mensajeTextarea.value;

  socket.emit("userMessage", `<strong> ${userName}</strong> ${message}`);
  mensajeTextarea.value = "";
});

socket.on("message", (message) => {
  messages.insertAdjacentHTML("beforeend", `<p>  ${message}</p>`);
});
