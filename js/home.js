document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector("#projects");

  if (!container || typeof projects === "undefined") {
    console.log("Container ou projects não carregaram");
    return;
  }

  projects.forEach(p => {
    container.innerHTML += `
      <div class="col-12 col-lg-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>${p.title}</h5>
            <p>${p.description}</p>
            <a class="btn btn-primary" href="project.html?id=${p.id}">
              Ver Projeto
            </a>
          </div>
        </div>
      </div>
    `;
  });

});