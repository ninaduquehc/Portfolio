# 🗂️ Portfólio Acadêmico — Marina Duque

Portfólio acadêmico digital desenvolvido com HTML, CSS e JavaScript para o curso de Desenvolvimento de Software Multiplataforma (DSM) da FATEC São José dos Campos. Os projetos são gerenciados como dados e renderizados dinamicamente na página.

---

## ✨ Funcionalidades

- Apresentação pessoal com foto, formação, objetivos e áreas de interesse
- Currículo com formação, cursos, medalhas e certificados
- Projetos separados em Acadêmicos (API), Atividades de Disciplina e Profissionais.
- Página de detalhes de cada projeto gerada dinamicamente via JavaScript, com empresa parceira, problema, solução, contribuições pessoais, hard skills e soft skills
- Habilidades técnicas com nível de domínio (de 1 a 5 estrelas)
- Eventos e participações com carrossel de imagens
- Navbar e footer injetados automaticamente nas páginas

---

## 🗃️ Estrutura do projeto

```
├── 📁 data
│   └── 📄 projects.js
├── 📁 js
│   ├── 📄 home.js
│   ├── 📄 layout.js
│   └── 📄 project.js
├── 📁 static
│   ├── 📁 css
│   │   └── 🎨 style.css
│   ├── 📁 imagens
│   │   ├── 📁 eventos
│   │   │   ├── 🖼️ interfatec.jpeg
│   │   │   ├── 🖼️ certificado.png
│   │   │   ├── 🖼️ pit.jpeg
│   │   │   ├── 🖼️ colmeia.jpeg
│   │   │   └── 🖼️ pit.certif.png
│   │   ├── 📁 projetos
│   │   │   ├── 🖼️ api_2.png ... api_7.png
│   │   │   ├── 🖼️ lumiere_1.PNG ... lumiere_8.PNG
│   │   │   ├── 🖼️ prototipo_1.png ... prototipo_8.png
│   │   │   └── 🖼️ universidade_1.png ... universidade_5.png
│   │   ├── 🖼️ Marina Duque.jpeg
│   │   └── 🖼️ marina-foto-descontraida.jpeg
│   └── 📁 pdf
│       └── 📕 curriculo_marina_duque.pdf
├── 📝 README.md
├── 🌐 index.html
└── 🌐 project.html
```

---

## ⚙️ Arquitetura do projeto

**`data/projects.js`** — define a lista de projetos com título, categoria, empresa parceira, problema, solução, tecnologias, contribuições, hard skills, soft skills, imagens e link do repositório. É o único lugar que precisa ser editado para adicionar ou atualizar um projeto.

**`js/home.js`** — lê a lista e cria um card para cada projeto na página inicial, agrupando por categoria.

**`js/project.js`** — lê o `id` da URL (`project.html?id=radar-cidadao`), busca o projeto correspondente na lista e preenche a página: título, cards de descrição, carrossel de imagens e tags de tecnologia.

**`js/layout.js`** — injeta a navbar e o footer em todas as páginas automaticamente, evitando repetição de código HTML.

---

## 🎨 Identidade visual

| Elemento | Valor |
|----------|-------|
| Cor primária (vinho) | `#781313` |
| Cor secundária (verde) | `#0d7a59` |
| Cor de texto (bege) | `#cec295` |
| Fundo (preto) | `#000000` |
| Fonte | Poppins (Google Fonts) |

---

## 🚀 Como rodar localmente

Por usar arquivos JavaScript separados, o ideal é rodar o projeto em um servidor local em vez de abrir o `index.html` direto no navegador.

Com a extensão **Live Server** no VS Code, clique com o botão direito no `index.html` e selecione *Open with Live Server*.

Ou via terminal:

```bash
npx serve .
```

---

## 📦 Tecnologias utilizadas

- HTML e CSS
- JavaScript
- Bootstrap e Bootstrap Icons
- Google Fonts
- GitHub Pages

---

## 🔗 Acesse o portfólio

[https://ninaduquehc.github.io/Portfolio/](https://ninaduquehc.github.io/Portfolio/)

---

## 👩‍💻 Autora

**Marina Duque de Holanda Cavalcanti**
Cursando Desenvolvimento de Software Multiplataforma — FATEC São José dos Campos

- GitHub: [ninaduquehc](https://github.com/ninaduquehc)
- LinkedIn: [marina-cavalcanti](https://www.linkedin.com/in/marina-cavalcanti-53b3503b8/)
- E-mail: [marinaduque2006@gmail.com](mailto:marinaduque2006@gmail.com)