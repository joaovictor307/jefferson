const form = document.getElementById("agendamento");

form.addEventListener("submit", e => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const tipo = document.getElementById("hora").value;

  const msg = `Olá! Gostaria de agendar uma consulta.

Nome: ${nome}
Telefone: ${telefone}
Tipo de consulta: ${tipo}`;

  window.open(
    `https://wa.me/5544997097602?text=${encodeURIComponent(msg)}`,
    "_blank"
  );

  form.reset();
});
