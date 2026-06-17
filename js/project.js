function formatToCards(text) {
    return text
        .trim()
        .split("\n")
        .filter(line => line.trim() !== "")
        .map(line => {

            // detecta títulos tipo "Problema:"
            if (line.endsWith(":")) {
                return `<div class="project-card">
                            <h3>${line.replace(":", "")}</h3>`;
            }

            return `<p>${line}</p>`;
        })
        .join("") + "</div>";
}

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // PEGAR ID DA URL
    // =========================
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const project = projects.find(p => p.id === id);

    // =========================
    // SE NÃO ENCONTRAR PROJETO
    // =========================
    if (!project) {
        document.getElementById("title").innerText = "Projeto não encontrado";
        return;
    }

    // =========================
    // TEXTO PRINCIPAL
    // =========================
    document.getElementById("title").innerText = project.title;
    document.getElementById("short-desc").innerText = project.description; // ← adiciona essa linha
    document.getElementById("desc").innerHTML = formatToCards(project.fullDescription || project.description);

    // sidebar
    const sideTitle = document.getElementById("titleSide");
    if (sideTitle) sideTitle.innerText = project.title;

    // =========================
    // CARROSSEL DE IMAGENS
    // =========================
    const inner = document.getElementById("carousel-inner");
    const indicators = document.getElementById("carousel-indicators");

    if (inner && indicators) {

        inner.innerHTML = "";
        indicators.innerHTML = "";

        // aceita image OU images
        const images = project.images || (project.image ? [project.image] : []);

        images.forEach((img, index) => {

            // IMAGEM
            const div = document.createElement("div");
            div.classList.add("carousel-item");

            if (index === 0) div.classList.add("active");

            div.innerHTML = `
                <img src="${img}" class="d-block project-image" alt="Imagem do projeto">
            `;

            inner.appendChild(div);

            // INDICADOR
            const button = document.createElement("button");
            button.type = "button";
            button.setAttribute("data-bs-target", "#projectCarousel");
            button.setAttribute("data-bs-slide-to", index);

            if (index === 0) button.classList.add("active");

            indicators.appendChild(button);
        });
    }

    // =========================
    // LINK DO PROJETO
    // =========================
    const link = document.getElementById("link");
    if (link) link.href = project.link;

    // =========================
    // TECNOLOGIAS
    // =========================
    const techContainer = document.getElementById("tech");

    if (techContainer) {
        techContainer.innerHTML = "";

        project.tech.forEach(t => {
            const span = document.createElement("span");
            span.classList.add("tech-tag");
            span.innerText = t;
            techContainer.appendChild(span);
        });
    }

    // =========================
    // ANIMAÇÃO FINAL
    // =========================
    const page = document.querySelector(".project-page");
    if (page) {
        page.classList.add("fade-in");
    }

});