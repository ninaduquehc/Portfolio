const projects = [

    // =====================================================
    // PROJETOS ACADÊMICOS (API'S)
    // =====================================================
    {
        id: "radar-cidadao",
        category: "academico",
        title: "Radar Cidadão",
        semester: "1º semestre de 2026",
        partner: "Cliente interno: Professor Fernando Masanori",
        description: "Sistema para simplificar dados públicos sobre candidatos à reeleição, com foco em acessibilidade de dados públicos complexos.",
        problem: "A maioria da população tem dificuldade para acessar e compreender os dados públicos sobre deputados candidatos à reeleição, que ficam espalhados em fontes complexas e pouco claras. Isso dificulta que o eleitor compare candidatos e tome uma decisão informada. A fonte de dados utilizada também não fornecia boa parte das informações de forma direta, exigindo a busca de alternativas.",
        solution: "Criação de um site que reúne e simplifica esses dados complexos, apresentando-os de forma clara e útil para que o cidadão consiga entender e comparar candidatos. O projeto transforma dados complexos em informações acessíveis. Metodologia utilizada: SCRUM.",
        tech: ["Python", "HTML", "CSS", "Colab", "Jira", "Bootstrap"],
        contributions: "Atuei como Scrum Master, organizando e distribuindo as tarefas da equipe por meio do Jira. Além da organização de reuniões com a equipe, identificando e resolvendo impedimentos para o progresso do projeto. Também participei do desenvolvimento do site, contribuindo com a implementação de funcionalidades e melhorias na interface.",
        hardSkills: [
            "Extração de dados da API pública da Câmara dos Deputados",
            "Utilização de Python para processamento e análise de dados",
            "Desenvolvimento de interface web com HTML, CSS e Bootstrap",
            "Gestão de projetos ágeis com SCRUM e Jira"
        ],
        softSkills: [
            "Liderança",
            "Comunicação com a equipe",
            "Organização e gestão de tarefas",
            "Resolução de problemas"
        ],
        link: "https://github.com/ninaduquehc/API",
        images: [
            "static/imagens/projetos/api_2.png",
            "static/imagens/projetos/api_3.png",
            "static/imagens/projetos/api_4.png",
            "static/imagens/projetos/api_5.png",
            "static/imagens/projetos/api_7.png"
        ]
    },

    {
        id: "gestec",
        category: "academico",
        title: "SGOS - Sistema de Gestão de Ordens de Serviço",
        semester: "2º semestre de 2026",
        partner: "Cliente externo: Altave",
        description: "Sistema web que centraliza e rastreia o fluxo de ordens de serviço e projetos de implantação da Altave, com controle de SLA, notificações e auditoria.",
        problem: "A Altave acompanhava as solicitações de serviço de forma descentralizada, sem padronização das etapas operacionais entre seus departamentos. Com isso, era difícil saber em que ponto cada solicitação estava e faltava previsibilidade sobre os prazos de atendimento do SLA contratual, dificultando a priorização dos chamados críticos.",
        solution: "Desenvolvimento do SGOS pela equipe GesTec, em SCRUM, com sprints mensais. O sistema oferece projetos como agrupador central de ordens de serviço, ordens organizadas por departamento, controle de status, cálculo de SLA com alertas de risco, notificações por e-mail e in-app, anexos, registro de horas, exportação de relatórios em PDF, logs de auditoria e documentação da API via Swagger.",
        tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "Prisma", "JWT", "Swagger", "Cucumber"],
        contributions: "Prototipagem da interface do projeto. Desenvolvimento e aprimoramento do sistema de gestão de ordens de serviço, com atuação principal no frontend, mas também no backend. Implementação de funcionalidades de edição e gerenciamento das OS's, integração entre as camadas da aplicação, indicadores e notificações de SLA, além de melhorias de UX/UI e padronização da identidade visual da GesTec.",
        hardSkills: [
            "Desenvolvimento frontend com React e TypeScript",
            "Desenvolvimento backend com Node.js e Express",
            "Modelagem e acesso ao banco de dados com Prisma e PostgreSQL",
            "Desenvolvimento ágil com SCRUM"
        ],
        softSkills: [
            "Comunicação com a equipe",
            "Organização e gestão de tempo",
            "Resolução de problemas",
            "Atenção aos detalhes",
            "Autonomia e Proatividade"
        ],
        link: "https://github.com/ninaduquehc/sistema-ordens-servico",
        images: [
            "static/imagens/projetos/gestec_1.png",
            "static/imagens/projetos/gestec_2.png",
            "static/imagens/projetos/gestec_3.png",
            "static/imagens/projetos/gestec_4.png",
            "static/imagens/projetos/gestec_5.png"
        ]
    },

    // =====================================================
    // PROJETO PROFISSIONAL
    // =====================================================
    {
        id: "seuseventos",
        category: "profissional",
        title: "SeusEventos",
        partner: "SeusEventos (startup)",
        description: "Atuação como UI/UX Designer e QA na startup SeusEventos, plataforma de eventos. Período: 06/10/2026 - Atual.",
        problem: "O site apresentava dificuldades em organizar e exibir as muitas funcionalidades que o organizador de um evento poderia usufruir de forma eficiente, prejudicando a experiência do usuário. Além disso, havia a necessidade de garantir a qualidade do site por meio de testes de novas funcionalidades, as quais, em boa parte, eu crio para a evolução do projeto.",
        solution: "Até o momento, minhas principais contribuições foram melhorias na interface do usuário, como a maior personalização da página de evento, a criação de um novo fluxo de ingressos, mais intuitivo, e a estilização do próprio ingresso.",
        tech: ["Figma", "Asana", "Claude"],
        contributions: "Atuo como UI/UX Designer e QA. Eu busco possíveis melhorias na interface do site e crio tasks para os desenvolvedores do site, além de prototipar as ideias para uma maior fidelidade e consistência na aparência do site.",
        hardSkills: [
            "Conhecimento de design para prototipagem de interfaces web",
            "Criação de fluxos para uma boa experiência do usuário",
            "Testes de usabilidade e feedback para melhorias"
        ],
        softSkills: [
            "Trabalho em equipe",
            "Organização e gestão de tarefas",
            "Olhar detalhista para a interface do usuário",
        ],
        link: "https://seuseventos.com.br/",
        images: [
            "static/imagens/projetos/seuseventos_1.png"
        ]
    },

    // =====================================================
    // PROJETOS PESSOAIS / ATIVIDADES DE DISCIPLINA
    // =====================================================
    {
        id: "universidade-ficticia",
        category: "disciplina",
        title: "Universidade Fictícia - Studio KeyFrame",
        partner: "",
        description: "Site responsivo criado para prática de HTML, CSS e Bootstrap, desenvolvido em aula para fixação de conteúdo.",
        problem: "Na disciplina de Desenvolvimento Web e Design Digital, era necessário aplicar na prática os conceitos de HTML, CSS e Bootstrap, construindo uma interface limpa, organizada e que funcionasse bem em diferentes tamanhos de tela.",
        solution: "Desenvolvimento de um site fictício chamado Studio KeyFrame, com 3 páginas interligadas (Home, Sobre e Contato), identidade visual moderna e consistente. O desafio foi ir além do conteúdo básico, explorando estrutura e responsividade.",
        tech: ["HTML", "CSS", "Bootstrap"],
        contributions: "Desenvolvimento individual do site, do layout ao código.",
        hardSkills: [
            "Layout e estrutura de páginas web com HTML e CSS",
            "Responsividade e design adaptativo com Bootstrap"
        ],
        softSkills: [
            "Criatividade",
            "Organização e atenção aos detalhes",
            "Capacidade de aprender e aplicar novos conceitos rapidamente"
        ],
        link: "https://github.com/ninaduquehc/DesignDigital",
        images: [
            "static/imagens/projetos/universidade_1.png",
            "static/imagens/projetos/universidade_2.png",
            "static/imagens/projetos/universidade_3.png",
            "static/imagens/projetos/universidade_4.png",
            "static/imagens/projetos/universidade_5.png"
        ]
    },

    {
        id: "prototipacao-lumiere",
        category: "disciplina",
        title: "Prototipação - Loja Lumière",
        partner: "",
        description: "Wireframe, mockup e protótipo navegável de uma loja fictícia no Figma.",
        problem: "Em um exercício acadêmico, era necessário percorrer todas as etapas de prototipação de interface (wireframe, mockup e protótipo) para planejar um site antes de programá-lo, entendendo a diferença entre cada etapa.",
        solution: "Criação da loja fictícia Lumière com 4 páginas principais no Figma, resultando em um protótipo navegável com identidade visual completa e estrutura bem definida.",
        tech: ["Figma"],
        contributions: "Criação individual de todas as etapas: wireframe, mockup e protótipo.",
        hardSkills: [
            "Wireframe e Mockup",
            "Protótipo navegável no Figma"
        ],
        softSkills: [
            "Paciência e atenção aos detalhes",
            "Organização e planejamento de interface",
            "Criatividade e senso estético"
        ],
        link: "https://www.figma.com/design/vxu0ja8sKMoGaFFrQ7hxJ4/Loja-de-Roupas?node-id=0-1&p=f&t=4fFCK8ZTKD8Brxa3-0",
        images: [
            "static/imagens/projetos/prototipo_1.png",
            "static/imagens/projetos/prototipo_2.png",
            "static/imagens/projetos/prototipo_3.png",
            "static/imagens/projetos/prototipo_4.png",
            "static/imagens/projetos/prototipo_5.png",
            "static/imagens/projetos/prototipo_6.png",
            "static/imagens/projetos/prototipo_7.png",
            "static/imagens/projetos/prototipo_8.png"
        ]
    },

    {
        id: "ecommerce-lumiere",
        category: "disciplina",
        title: "E-commerce Lumière",
        partner: "",
        description: "Loja virtual completa com backend em Flask, banco MySQL, Docker e deploy na AWS.",
        problem: "Era necessário construir uma loja virtual funcional, em que o cliente pudesse se cadastrar, entrar na conta, consultar um catálogo de produtos, montar um carrinho e finalizar a compra.",
        solution: "Sistema web com Flask, MySQL e Docker, com login e registro de usuários, catálogo de produtos, carrinho de compras, checkout e deploy em AWS. O principal desafio foi integrar o MySQL com o Docker e fazer o deploy em uma instância EC2.",
        tech: ["Flask", "MySQL", "Docker", "Bootstrap", "AWS"],
        contributions: "Projeto individual.",
        hardSkills: [
            "Backend com Flask",
            "Containerização com Docker",
            "Deploy em AWS EC2"
        ],
        softSkills: [
            "Resolução de problemas",
            "Organização e planejamento de execução do site",
            "Fidelidade ao senso estético pré-definido no protótipo",
            "Autonomia e disciplina para desenvolvimento individual"
        ],
        link: "https://github.com/ninaduquehc/lumiere",
        images: [
            "static/imagens/projetos/lumiere_1.PNG",
            "static/imagens/projetos/lumiere_2.PNG",
            "static/imagens/projetos/lumiere_3.PNG",
            "static/imagens/projetos/lumiere_4.PNG",
            "static/imagens/projetos/lumiere_5.PNG",
            "static/imagens/projetos/lumiere_6.PNG",
            "static/imagens/projetos/lumiere_7.PNG",
            "static/imagens/projetos/lumiere_8.PNG"
        ]
    }
];