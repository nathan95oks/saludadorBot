import saludar from "./saludador";

// Selecciona los elementos del DOM
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const nombreInput = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero");

// Añade un manejador de eventos para el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtiene el nombre y género ingresados
  const nombre = nombreInput.value;
  const genero = generoSelect.value;

  // Llama a la función de saludo con el nombre y género
  const saludo = saludar(nombre, genero);

  // Muestra el saludo en el div
  div.innerHTML = `<p>${saludo}</p>`;
});
  