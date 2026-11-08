"use strict";

const formContato = document.getElementById("form-contato");
const alertaSucesso = document.getElementById("alerta-sucesso");
const menuPrincipal = document.getElementById("menu-principal");

if (formContato && alertaSucesso) {
  formContato.addEventListener("submit", (evento) => {
    evento.preventDefault();
    evento.stopPropagation();

    if (!formContato.checkValidity()) {
      formContato.classList.add("was-validated");
      return;
    }

    formContato.reset();
    formContato.classList.remove("was-validated");
    alertaSucesso.classList.remove("d-none");
    alertaSucesso.focus();
  });
}

if (menuPrincipal && window.bootstrap) {
  const colapso = window.bootstrap.Collapse.getOrCreateInstance(menuPrincipal, { toggle: false });

  menuPrincipal.querySelectorAll("a.nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (menuPrincipal.classList.contains("show")) {
        colapso.hide();
      }
    });
  });
}
