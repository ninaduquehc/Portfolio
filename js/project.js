// Cria um card de texto ou de lista. Se não houver conteúdo, não cria nada.
function card(title, content) {
    if (!content || (Array.isArray(content) && content.length === 0)) return "";

    const body = Array.isArray(content)
        ? `<ul>${content.map(item => `<li>${item}</li>`).join("")}</ul>`
        : `<p>${content}</p>`;

    return `<div class="project-card"><h3>${title}</h3>${body}</div>`;
}

// Monta toda a descrição do projeto, na ordem pedida no roteiro
function buildDescription(p) {
    return [
        card("Cliente / Parceiro", p.partner),
        card("Semestre", p.semester),
        card("Problema", p.problem),
        card("Solução desenvolvida", p.solution),
        card("Contribuições pessoais", p.contributions),
        card("Hard skills", p.hardSkills),
        card("Soft skills", p.softSkills)
    ].join("");
}

// Escolhe o texto do botão conforme o tipo de link
function linkLabel(url) {
    if (url.includes("github.com")) return "Ver repositório no GitHub";
    if (url.includes("figma.com")) return "Ver protótipo no Figma";
    return "Visitar site";
}

// O DOMContentLoaded avisa que o HTML já foi montado.
// Só então o código procura os elementos na página.
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
    // TEXTOS PRINCIPAIS
    // =========================
    document.title = project.title;
    document.getElementById("title").innerText = project.title;
    document.getElementById("short-desc").innerText = project.description;
    document.getElementById("desc").innerHTML = buildDescription(project);

    // =========================
    // CARROSSEL DE IMAGENS
    // =========================
    const inner = document.getElementById("carousel-inner");
    const indicators = document.getElementById("carousel-indicators");
    const images = project.images || [];

    if (inner && indicators) {
        inner.innerHTML = "";
        indicators.innerHTML = "";

        if (images.length === 0) {
            // sem imagens: esconde o carrossel inteiro
            document.querySelector(".project-hero").style.display = "none";
        }

        images.forEach((img, index) => {
            const div = document.createElement("div");
            div.classList.add("carousel-item");
            if (index === 0) div.classList.add("active");

            div.innerHTML = `
                <img src="${img}" class="d-block project-image" alt="${project.title} - imagem ${index + 1}">
            `;
            inner.appendChild(div);

            const button = document.createElement("button");
            button.type = "button";
            button.setAttribute("data-bs-target", "#projectCarousel");
            button.setAttribute("data-bs-slide-to", index);
            if (index === 0) button.classList.add("active");
            indicators.appendChild(button);
        });

        // com apenas 1 imagem, não faz sentido mostrar setas e indicadores
        if (images.length === 1) {
            indicators.style.display = "none";
            document.querySelector(".carousel-control-prev").style.display = "none";
            document.querySelector(".carousel-control-next").style.display = "none";
        }
    }

    // =========================
    // LINK DO PROJETO
    // =========================
    const link = document.getElementById("link");
    if (link) {
        if (project.link) {
            link.href = project.link;
            link.innerText = linkLabel(project.link);
        } else {
            link.style.display = "none";
        }
    }

    // =========================
    // TECNOLOGIAS
    // =========================
    const techContainer = document.getElementById("tech");
    if (techContainer) {
        techContainer.innerHTML = "";
        (project.tech || []).forEach(t => {
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
    if (page) page.classList.add("fade-in");
});