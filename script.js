// Número de WhatsApp de Justin (con código de país, sin + ni espacios)
const NUMERO_WHATSAPP = "50495455861";

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const resumen = document.getElementById("resumen");
const aviso = document.getElementById("aviso");

// Arma un texto con todas las preguntas y respuestas
function armarResumen() {
  const labels = formulario.querySelectorAll("label");
  const respuestas = formulario.querySelectorAll("textarea");
  let texto = "Cuestionario para la página web\n\n";

  for (let i = 0; i < labels.length; i++) {
    const respuesta = respuestas[i].value.trim() || "(sin respuesta)";
    texto += labels[i].textContent + "\n" + respuesta + "\n\n";
  }
  return texto;
}

// Al presionar "Terminar"
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const texto = armarResumen();
  resumen.textContent = texto;
  document.getElementById("whatsapp").href =
    "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texto);
  formulario.style.display = "none";
  resultado.style.display = "block";
  window.scrollTo(0, 0);
});

// Botón copiar
document.getElementById("copiar").addEventListener("click", function () {
  navigator.clipboard.writeText(resumen.textContent)
    .then(function () { aviso.textContent = "Respuestas copiadas."; })
    .catch(function () { aviso.textContent = "No se pudo copiar. Seleccione el texto y cópielo manualmente."; });
});

// Botón volver a editar
document.getElementById("editar").addEventListener("click", function () {
  resultado.style.display = "none";
  formulario.style.display = "block";
  aviso.textContent = "";
});
