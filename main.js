//alert("Hola este es mi Javascript");
// let name = "Alejandro";

let iconMenu = document.querySelector(".checkbtn");
// console.log("hello");
const list = document.querySelector(".list");

iconMenu.addEventListener("click", function () {
  console.log(list.classList.toggle("show_menu"));
  console.log(iconMenu.classList.toggle("active"));
});

const form = document.getElementById("form");
const nombre = document.getElementById("name");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "El mensaje fue enviado exitosamente";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
