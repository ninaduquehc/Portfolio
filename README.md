# 🗂️ Portfólio — Marina Duque

Site pessoal desenvolvido com HTML, CSS e JavaScript. Os projetos são gerenciados como dados e renderizados dinamicamente na página.

---

## ✨ Funcionalidades

- Página inicial com seções de apresentação, currículo, projetos e habilidades
- Página de detalhes de cada projeto gerada dinamicamente via JavaScript
- Navbar e footer injetados automaticamente nas páginas
- Carrossel de imagens por projeto

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
│   │   ├── 📁 projetos
│   │   │   ├── 🖼️ api_2.png
│   │   │   ├── 🖼️ api_3.png
│   │   │   ├── 🖼️ api_4.png
│   │   │   ├── 🖼️ api_5.png
│   │   │   ├── 🖼️ api_7.png
│   │   │   ├── 🖼️ lumiere_1.PNG
│   │   │   ├── 🖼️ lumiere_2.PNG
│   │   │   ├── 🖼️ lumiere_3.PNG
│   │   │   ├── 🖼️ lumiere_4.PNG
│   │   │   ├── 🖼️ lumiere_5.PNG
│   │   │   ├── 🖼️ lumiere_6.PNG
│   │   │   ├── 🖼️ lumiere_7.PNG
│   │   │   ├── 🖼️ lumiere_8.PNG
│   │   │   ├── 🖼️ prototipo_1.png
│   │   │   ├── 🖼️ prototipo_2.png
│   │   │   ├── 🖼️ prototipo_3.png
│   │   │   ├── 🖼️ prototipo_4.png
│   │   │   ├── 🖼️ prototipo_5.png
│   │   │   ├── 🖼️ prototipo_6.png
│   │   │   ├── 🖼️ prototipo_7.png
│   │   │   ├── 🖼️ prototipo_8.png
│   │   │   ├── 🖼️ universidade_1.png
│   │   │   ├── 🖼️ universidade_2.png
│   │   │   ├── 🖼️ universidade_3.png
│   │   │   ├── 🖼️ universidade_4.png
│   │   │   └── 🖼️ universidade_5.png
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

**`data/projects.js`** — define a lista de projetos com título, descrição, tecnologias, imagens e link. É o único lugar que precisa ser editado para adicionar ou atualizar um projeto.

**`js/home.js`** — lê a lista e cria um card para cada projeto na página inicial.

**`js/project.js`** — lê o `id` da URL (`project.html?id=radar-cidadao`), busca o projeto correspondente na lista e preenche todos os elementos da página: título, descrição formatada, carrossel de imagens e tags de tecnologia.

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

Por usar módulos JavaScript com múltiplos arquivos, o projeto precisa de um servidor local — não funciona abrindo o `index.html` direto no navegador.

Com a extensão **Live Server** no VS Code, clique com o botão direito no `index.html` e selecione *Open with Live Server*.

Ou via terminal:

```bash
npx serve .
```

---

## 📦 Tecnologias utilizadas

- HTML e CSS
- JavaScript
- Bootstrap
- Google Fonts
- Vercel

---

## 🔗 Deploy

[portfolio-xi-two-e0kvwqx64c.vercel.app](https://portfolio-xi-two-e0kvwqx64c.vercel.app)

---

## 👩‍💻 Autora

**Marina Duque de Holanda Cavalcanti**
[Email](mailto:marinaduque2006@email.com)