// Cria o HTML de um card de projeto
function projectCard(p) {
  const partner = p.partner
    ? `<p class="card-partner"><strong>Cliente / Parceiro:</strong> ${p.partner}</p>`
    : "";

  return `
    <div class="col-12 col-lg-6">
      <div class="card h-100">
        <div class="card-body">
          <h5>${p.title}</h5>
          ${partner}
          <p>${p.description}</p>
          <a class="btn btn-primary" href="project.html?id=${p.id}">
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  `;
}

// Desenha as estrelas de cada habilidade a partir do data-nivel (1 a 5)
function renderStars() {
  document.querySelectorAll(".stars").forEach(el => {
    const nivel = parseInt(el.dataset.nivel, 10) || 0;
    el.textContent = "★".repeat(nivel) + "☆".repeat(5 - nivel);
    el.setAttribute("aria-label", `Nível ${nivel} de 5`);
  });
}

// O DOMContentLoaded avisa que o HTML já foi montado.
document.addEventListener("DOMContentLoaded", () => {

  renderStars();

  if (typeof projects === "undefined") {
    console.log("projects não carregou");
    return;
  }

  // cada categoria do projects.js aponta para um container do index.html
  const categorias = ["academico", "disciplina", "profissional", "pessoal"];

  categorias.forEach(categoria => {
    const container = document.querySelector(`#projects-${categoria}`);
    if (!container) return;

    const lista = projects.filter(p => p.category === categoria);

    container.innerHTML = lista.length
      ? lista.map(projectCard).join("")
      : `<p class="projetos-vazio">Em breve.</p>`;
  });

});