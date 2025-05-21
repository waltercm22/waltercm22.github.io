document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formularioContacto");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre && correo && mensaje) {
      alert(`Gracias por contactarte con nosotros, ${nombre}. Te responderemos pronto a ${correo}.`);
      formulario.reset();
    } else {
      alert("Por favor, complete todos los campos.");
    }
  });
});
