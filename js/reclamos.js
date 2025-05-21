document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("libroReclamaciones");

  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert("Reclamo enviado correctamente. ¡Gracias por comunicarte con nosotros!");
      form.reset();
    }
    form.classList.add("was-validated");
  });
});
