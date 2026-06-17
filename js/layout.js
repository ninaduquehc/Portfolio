document.addEventListener("DOMContentLoaded", () => {

  const navbar = `
  <header>
    <nav class="navbar navbar-expand-lg fixed-top py-3">
      <div class="container">
        <a class="navbar-brand" href="index.html">Portfólio de Marina Duque</a>

        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a href="index.html#sobre" class="nav-link">Sobre</a></li>
            <li class="nav-item"><a href="index.html#curriculo" class="nav-link">Currículo</a></li>
            <li class="nav-item"><a href="index.html#projetos" class="nav-link">Projetos</a></li>
            <li class="nav-item"><a href="index.html#habilidades" class="nav-link">Habilidades</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  `;

  const footer = `
  <footer class="text-center p-3 mt-5">
    <section id="contato" class="container section">

      <ul class="contato-lista">

        <li>
          <i class="bi bi-github"></i>
          <a href="https://github.com/ninaduquehc" target="_blank">ninaduquehc</a>
        </li>

        <li>
          <i class="bi bi-envelope-fill"></i>
          <a href="mailto:marinaduque2006@email.com">marinaduque2006@gmail.com</a>
        </li>

        <li>
          <i class="bi bi-linkedin"></i>
          <a href="https://linkedin.com" target="_blank">marina-cavalcanti</a>
        </li>

      </ul>

    </section>

    <p class="mb-0">
      © 2026 - Portfólio de Marina Duque
    </p>
  </footer>
  `;

  // INSERE NO TOPO
  document.body.insertAdjacentHTML("afterbegin", navbar);

  // INSERE NO FINAL
  document.body.insertAdjacentHTML("beforeend", footer);

});