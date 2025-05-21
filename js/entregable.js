document.addEventListener("DOMContentLoaded", () => {
  // Estilo de tarjetas al pasar el mouse
  const tarjetas = document.querySelectorAll(".card");
  tarjetas.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("shadow-lg", "border", "border-success");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("shadow-lg", "border", "border-success");
    });
  });

  // Contador de carrito global
  let totalEnCarrito = 0;
  const carritoContador = document.getElementById("contador-carrito");

  // Botones agregar al carrito
  const botonesAgregar = document.querySelectorAll(".agregar-carrito");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const inputCantidad = boton.parentElement.querySelector(".input-cantidad");
      const cantidad = parseInt(inputCantidad?.value || 1);
      if (!isNaN(cantidad) && cantidad > 0) {
        totalEnCarrito += cantidad;
        if (carritoContador) carritoContador.textContent = totalEnCarrito;

        boton.textContent = `✓ ${cantidad} agregado(s)`;
        boton.classList.remove("btn-success");
        boton.classList.add("btn-outline-success");

        setTimeout(() => {
          boton.textContent = "Agregar al carrito";
          boton.classList.remove("btn-outline-success");
          boton.classList.add("btn-success");
        }, 2000);
      } else {
        alert("Ingrese una cantidad válida.");
      }
    });
  });

  // Controles + / - de cantidad
  const botonesCantidad = document.querySelectorAll(".btn-cantidad");
  botonesCantidad.forEach((boton) => {
    boton.addEventListener("click", () => {
      const input = boton.parentElement.querySelector(".input-cantidad");
      let valor = parseInt(input.value);
      if (boton.dataset.tipo === "menos" && valor > 1) {
        input.value = valor - 1;
      } else if (boton.dataset.tipo === "mas") {
        input.value = valor + 1;
      }
    });
  });
});
