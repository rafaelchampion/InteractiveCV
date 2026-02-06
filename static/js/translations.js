const translations = {
    en: {
        // Location
        location: "SP • Brazil",

        // Role
        role_1: "Computer Engineer",
        role_2: "Full Stack Software Engineer",
        role_3: ".NET Expert",

        // Navigation
        nav_about: "About me",
        nav_skills: "Skills",
        nav_career: "Career",
        nav_education: "Education",
        nav_projects: "Projects",
        nav_courses: "Courses",
        nav_languages: "Languages",
        nav_books: "Shelf",
        nav_interests: "Interests",
        nav_socials: "Contact me",

        // About section
        about_title: "About me",
        about_content: "Hi, I'm Rafael, a senior software engineer with over 8 years of experience, specialized in .NET development and software architecture. I'm passionate about building scalable and efficient applications and thrive on solving complex challenges and continuously improving my skills. I'm a purposeful professional with strong experience in developing complex enterprise systems. Committed to clean code practices and SOLID principles, with a history of delivering scalable and high-performance solutions.",

        // Skills section
        skills_title: "Technical Skills",
        skills_instructions: "Click on the categories to expand and see more skills.",
        skills_backend: "Backend",
        skills_frontend: "Frontend",
        skills_databases: "Databases",
        skills_devops: "DevOps",
        skills_tests: "Tests",
        skills_architecture: "Architecture",
        skills_code_quality: "Code quality",
        skills_agile: "Agile",
        skills_other: "Other skills",
        query_performance: "Query performance",

        // Career section
        career_title: "Career",

        // Current job
        job9_date: "Aug. 2025 - Present",
        job9_title: "Senior Software Engineer",
        job9_company: "OMIE",
        job9_description_1: "Work on the maintenance and modernization of one of Brazil's most robust and widely adopted ERP systems, with a strong focus on fiscal modules and systems impacted by the Brazilian tax reform.",
        job9_description_2: "Work with xHarbour (Clipper), contributing to the migration of functionalities built with legacy visual design tools (CoreBuilder) to modern web-based architectures, with a strong emphasis on performance, stability, and backward compatibility.",
        job9_description_3: "Actively contribute to database query optimization, including execution plan analysis, index creation and tuning, and the refinement of performance-critical queries, always considering large-scale production environments.",
        job9_description_4: "Work closely with fiscal and enterprise management processes, including inventory control, purchasing, sales, and tax-related workflows, ensuring compliance with business rules, legal requirements, and overall system reliability.",

        job8_date: "Jun. 2025 - Aug. 2025",
        job8_title: "Senior .NET Developer",
        job8_company: "CWI (Outsourcing) • Bankly",
        job8_description_1: "Worked on legacy code modernization for an emerging Brazilian bank, contributing to the evolution of a monolithic architecture toward microservices-based patterns.",
        job8_description_2: "Participated in the migration and restructuring of system components, supporting the adoption of scalable, resilient, and cloud-oriented solutions suited for a high-availability financial environment.",
        job8_description_3: "Contributed to the implementation and maintenance of AWS Lambda functions and the definition of infrastructure as code using Terraform, promoting automation and environment reliability.",
        job8_description_4: "Worked with message queues and asynchronous events, enabling efficient and decoupled service communication, as well as on the execution and integration of security mechanisms focused on fraud prevention, addressing critical security and compliance requirements in the financial sector.",

        job7_date: "Apr. 2025 - Jun. 2025",
        job7_title: "Specialist .NET Developer",
        job7_company: "Gestionna (Outsourcing) • Eicon",
        job7_description_1: "Was part of a squad responsible for modernizing a public-sector ERP system for municipal education management, contributing to the migration from a legacy .NET Framework (WebForms) architecture to .NET 8.",
        job7_description_2: "Worked on the technical analysis of system resources, features, and business rules across modules, supporting the definition and execution of the migration plan, with focus on system stability, continuity, and long-term evolution.",
        job7_description_3: "Actively participated in the migration of approximately 50 ERP modules, performing legacy code refactoring and cleanup, applying Clean Code and SOLID principles, and aligning the codebase with newly established architectural and technical standards.",
        job7_description_4: "Addressed security risk areas, improving database query performance, and decoupling class dependencies, increasing system maintainability and testability, resulting in a more robust, high-performance, secure, and future-ready platform.",

        job6_date: "Apr. 2021 - Apr. 2025",
        job6_title: "Senior Software Engineer",
        job6_company: "Grupo Fast • Laser Fast",
        job6_description_1: "Composed a continuous enhancement and development team of a cutting-edge management system for a rapidly expanding laser hair removal clinic network, significantly improving operational efficiency.",
        job6_description_2: "Integrated important system design, architecture and business rules decision making being a core member of product steering and providing valuable experience and academic-based propositions for the product's future.",
        job6_description_3: "Spearheaded system integrations with multiple third-party services, legacy architecture modernizing, database interactions optimization, and system experience and performance enhancement to support business growth.",
        job6_description_4: "Reworked main institutional website with modern .NET technologies and multiple language support, improving raw and SEO performance and user experience.",
        job6_description_5: "Improved main system's scheduling gap finding with custom parameters, greatly reducing customers and users scheduling operation time, reducing customer complaints and improving business time utilization.",

        job5_date: "Feb. 2020 - Apr. 2021",
        job5_title: "Mid-Level .NET Developer",
        job5_company: "Grupo Fast • Fast Escova",
        job5_description_1: "Led the development of a new management system for a cosmetic procedures clinic franchise, simplifying appointment scheduling, inventory management, and operational oversight.",
        job5_description_2: "Designed the system architecture, database structure, chosen technologies, and project stack for a new system using clean architecture, DDD, .NET Core, and SOLID principles, ensuring scalability, maintainability, and long-term security.",
        job5_description_3: "Managed a small team of freelance developers, delegating tasks, reviewing code, and ensuring adherence to best practices and business objectives.",
        job5_description_4: "Designed secure APIs for real-time data synchronization between multiple clinics and the franchisor, streamlining business processes and centralizing data management.",
        job5_description_5: "Developed an inventory and supplies system for product sales and inventory control of product supplies used in procedures, improving inventory visibility and reducing costs.",

        job4_date: "Feb. 2019 - Feb. 2020",
        job4_title: "Mid-Level .NET Developer",
        job4_company: "Grupo Fast • MedicMais",
        job4_description_1: "Led the development of a brand new management system for a health plan franchise, automating clinical operations, medical record management, and appointment scheduling.",
        job4_description_2: "Designed the system architecture, database structure, chosen technologies and project stack for a new system.",
        job4_description_3: "Designed a multi-view interactive medical agenda with real-time synchronization, significantly enhancing scheduling efficiency and medical staff coordination.",
        job4_description_4: "Managed a small team of freelance developers, overseeing development efforts and ensuring delivery of high-quality, scalable software solutions.",
        job4_description_5: "Implemented security best practices, including secure data storage and secure API integrations, ensuring compliance with healthcare regulations.",

        job3_date: "Nov. 2016 - Jan. 2019",
        job3_title: "Junior .NET Developer",
        job3_company: "Instituto da Construção",
        job3_description_1: "Played a key role in improving a management system for a construction training school franchise, improving operational workflows, speeding up processes and increasing course uptake.",
        job3_description_2: "Optimized database queries and reports to improve system performance, reducing query execution time and improving data retrieval efficiency.",
        job3_description_3: "Developed integration with payment gateways for pinpad transactions - a payment method most widely adopted by the target audience - increasing sales.",
        job3_description_4: "Developed a group scheduling process to control classes, rooms, teachers and students, avoiding time conflicts and improving date and time availability.",

        job2_date: "Apr. 2016 - Nov. 2016",
        job2_title: "Support analyst",
        job2_company: "Resolve Franchising",
        job2_description_1: "Provided technical support and training to users and franchisees across three distinct franchise brands, improving user adoption to system usability and preventing operation issues.",
        job2_description_2: "Conducted database queries and troubleshooting to resolve system issues, acting as the bridge between end-users and developers for feature enhancements.",
        job2_description_3: "Composed documentation for existing systems and new features keeping operation up to date with changes and improvements.",

        job1_date: "Nov. 2012 - Jul. 2015",
        job1_title: "Administrative Assistant",
        job1_company: "De Rose Comércio e Representações LTDA",
        job1_description: "Managed financial and administrative tasks, including invoicing and document processing.",

        // Education section
        education_title: "Education",

        education_2_date: "Jan. 2014 - Dec. 2018",
        education_1_date: "Jan. 2009 - Jul. 2010",
        degree_computer_engineering: "Computer engineering",
        degree_computer_technician: "Computer technician",
        education_thesis: "Thesis:",
        education_initiation_program: "Scientific initiation program:",
        education_thesis1: "Galvanometer usage in laser harp electronics.",
        education_thesis2: "Comparative study of A* pathtracing algorithm vs. machine learning genetic algorithm on warehouse robots automation.",
        education_thesis3: "Newstand sales software automation.",
        degree_type_bachelor: "Bachelor degree",
        degree_type_technician: "Technician degree",

        // Projects section
        projects_title: "Projects",
        project_utilbox_title: "Utilbox",
        project_opensource: "Open source",
        project_mit_license: "MIT License",
        project_utilbox_description: "A modular collection of C# utility libraries designed to simplify common development tasks. With separate packages for handling dates, enums, results, strings, and pagination, Utilbox is made for developers to want to code without the need to reinvent the wheel.",
        view_github: "View on GitHub",
        view_nuget: "View on Nuget.org",

        // Courses section
        courses_title: "Courses",
        course_oop: "Fundamentals of object oriented programming",
        course_csharp: "C# Fundamentals",
        course_ef: "Entity Framework Fundamentals",
        course_microservices: "Microservices Fundamentals",
        course_multitenant: "Multi-tenant applicatios with Entity Framework Core",
        course_ddd: "Rich Domain Modeling",
        course_architecture: "Software Architecture & System Design Practical Case Studies",
        course_hours: "hours",

        // Languages section
        languages_title: "Languages",
        language_portuguese: "Brazilian Portuguese",
        language_english: "English",
        proficiency_native: "Native",
        proficiency_fluent: "Fluent",

        // Books section
        books_title: "Shelf",
        books_intro: "Books that I consider important in my training and daily life as a software developer and that I keep on my desk.",
        book_clean_code: "Clean Code",
        book_clean_coder: "Clean Coder",
        book_clean_architecture: "Clean Architecture",
        book_ddd: "Domain Driven Design",
        book_refactoring: "Refactoring",
        book_csharp: "C# 9.0 Pocket Reference",

        book_ddd_subtitle: "Tackling Complexity in the Heart of Software",
        book_refactoring_subtitle: "Improving the Design of Existing Code",

        // Interests section
        interests_title: "Interests",
        interests_tech_title: "Technology",
        interests_science_title: "Science",
        interests_communication_title: "Communication",
        interests_teamwork_title: "Teamwork",
        interests_ai_title: "Artificial intelligence",
        interests_tech: "I like programming, reading and learning new things. I am always looking for new technologies, new challenges and to stay up to date in this ever-evolving world. I am interested in everything that involves computers, including hardware but mainly software, and recently I have been venturing into the use of locally executed Artificial Intelligence for task automation, image generation, sound, etc. In my spare time I try to get involved in personal software projects for personal and professional study and development.",
        interests_science: "I like everything related to science, especially astronomy. Subjects such as quantum mechanics, physics and mathematics also fascinate me and spark my interest. Part of this love for science is translated into code, where I always try to rely on the best practices and techniques already established in academic texts. I like to stick to well-defined processes and follow them to deliver code with the best possible quality.",
        interests_communication: "In both my personal and professional environments, I like to foster open and sincere dialogue as a way of maintaining a healthy environment and learning. I really enjoy receiving feedback on my work and I always look for ways to improve or adapt to each situation. I am a person who learns quickly. I also enjoy mediating different points of view and finding a common solution.",
        interests_teamwork: "I like to work in teams with common goals of growth and learning. I always try to maintain a good and cordial relationship with everyone. Although I consider myself an introvert, I like to be in contact with people and different opinions. Both the personal and professional environment are shared with other people and knowing how to understand, respect and sometimes absorb other points of view keeps us constantly evolving.",
        interests_ai_1: "AI is a powerful tool that is reshaping our industry. Just as CAD revolutionized engineering, AI accelerators allow developers to focus on higher-level architectural challenges and creative problem-solving.",
        interests_ai_2: "I embrace AI as a productivity multiplier. It helps in rapid prototyping, boilerplate generation, and debugging, but it cannot replace the deep understanding of business logic and user needs.",
        interests_ai_3: "The essence of software engineering lies in human empathy and strategic decision-making. AI serves as a co-pilot that handles the routine, freeing us to build more robust, human-centric solutions.",
        interests_ai_4: "Staying ahead means adapting to these new tools. I am committed to leveraging AI responsibly to deliver higher quality code faster, while maintaining the critical thinking and creativity that define great engineering.",

        //Contacts section
        socials_title: "Contact and Social Networks",
        socials_intro: "Let's connect!",
        socials_invite: "It’s always good to connect with new people. Got a project idea? Want to discuss technology, programming, and coding? Need a developer? Get in touch.",
    },
    pt: {
        // Location
        location: "SP • Brasil",

        // Role
        role_1: "Engenheiro da Computação",
        role_2: "Engenheiro de Software Full Stack",
        role_3: "Especialista .NET",

        // Navigation
        nav_about: "Sobre mim",
        nav_skills: "Habilidades",
        nav_career: "Carreira",
        nav_education: "Educação",
        nav_projects: "Projetos",
        nav_courses: "Cursos",
        nav_languages: "Idiomas",
        nav_books: "Prateleira",
        nav_interests: "Interesses",
        nav_socials: "Links",

        // About section
        about_title: "Sobre mim",
        about_content: "Olá, sou Rafael, um engenheiro de software sênior com mais de 8 anos de experiência, especializado em desenvolvimento .NET e arquitetura de software. Sou apaixonado por construir aplicações escaláveis ​​e eficientes e por solucionar desafios complexos que ajudem na melhoria contínua de minhas habilidades. Sou um profissional com propósito e sólida experiência no desenvolvimento de sistemas empresariais complexos. Sou comprometido com práticas de código limpo e princípios SOLID, e possuo um histórico de entrega de soluções escaláveis ​​e de alto desempenho.",

        // Skills section
        skills_title: "Habilidades Técnicas",
        skills_instructions: "Clique nas categorias para expandi-las e visualizar mais habilidades.",
        skills_backend: "Backend",
        skills_frontend: "Frontend",
        skills_databases: "Bancos de dados",
        skills_devops: "DevOps",
        skills_tests: "Testes",
        skills_architecture: "Arquitetura",
        skills_code_quality: "Qualidade de código",
        skills_agile: "Agile",
        skills_other: "Outras habilidades",
        query_performance: "Performance de consultas",

        // Career section
        career_title: "Carreira",

        job9_date: "Ago. 2025 - Presente",
        job9_title: "Engenheiro de Software Sênior",
        job9_company: "OMIE",
        job9_description_1: "Atuo na manutenção e modernização de um dos ERPs mais robustos e amplamente utilizados do Brasil, com forte foco em módulos fiscais e em sistemas impactados pela reforma tributária brasileira.",
        job9_description_2: "Trabalho contribuindo para a migração de funcionalidades desenvolvidas com ferramentas visuais legadas (CoreBuilder) para arquiteturas web modernas, com grande ênfase em performance, estabilidade e compatibilidade retroativa.",
        job9_description_3: "Contribuo ativamente para a otimização de consultas em banco de dados, incluindo análise de planos de execução, criação e ajuste de índices e refinamento de queries críticas de performance, sempre considerando ambientes de produção em larga escala.",
        job9_description_4: "Atuo próximo aos processos fiscais e de gestão empresarial, incluindo controle de estoque, compras, vendas e fluxos tributários, garantindo conformidade com regras de negócio, requisitos legais e confiabilidade geral do sistema.",

        job8_date: "Jun. 2025 - Ago. 2025",
        job8_title: "Desenvolvedor .NET Sênior",
        job8_company: "CWI (Consultoria) • Bankly",
        job8_description_1: "Atuei na modernização de código legado para um banco digital brasileiro em crescimento, contribuindo para a evolução de uma arquitetura monolítica para padrões baseados em microsserviços.",
        job8_description_2: "Participei da migração e reestruturação de componentes do sistema, apoiando a adoção de soluções escaláveis, resilientes e orientadas à nuvem, adequadas a um ambiente financeiro de alta disponibilidade.",
        job8_description_3: "Contribuí na implementação e manutenção de AWS Lambda e na definição de infraestrutura como código utilizando Terraform, promovendo automação e maior confiabilidade dos ambientes.",
        job8_description_4: "Também atuei com filas de mensagens e eventos assíncronos, além da implementação e integração de mecanismos de segurança (antifraude), atendendo a requisitos críticos de segurança e compliance do setor financeiro.",

        job7_date: "Abr. 2025 - Jun. 2025",
        job7_title: "Desenvolvedor .NET Especialista",
        job7_company: "Gestionna (Consultoria) • Eicon",
        job7_description_1: "Integrei uma squad responsável pela modernização de um ERP do setor público voltado à gestão educacional municipal, contribuindo para a migração de uma arquitetura legada em .NET Framework (WebForms) para .NET 8.",
        job7_description_2: "Atuei na análise técnica de recursos, funcionalidades e regras de negócio entre os módulos do sistema, apoiando a definição e execução do plano de migração, com foco em estabilidade, continuidade e evolução de longo prazo.",
        job7_description_3: "Participei ativamente da migração de aproximadamente 50 módulos do ERP, realizando refatoração e limpeza de código legado, aplicando Clean Code e princípios SOLID, e alinhando o código a novos padrões arquiteturais e técnicos.",
        job7_description_4: "Atuei na mitigação de riscos de segurança, melhoria da performance de consultas ao banco de dados e desacoplamento de dependências entre classes, aumentando a manutenibilidade, testabilidade, performance e segurança da plataforma.",

        job6_date: "Abr. 2021 - Abr. 2025",
        job6_title: "Engenheiro de Software Sênior",
        job6_company: "Grupo Fast • Laser Fast",
        job6_description_1: "Integrei a equipe de evolução contínua de um sistema de gestão de ponta para uma rede de clínicas de depilação a laser em rápida expansão, contribuindo significativamente para o aumento da eficiência operacional.",
        job6_description_2: "Participei ativamente de decisões de design de sistema, arquitetura e regras de negócio, atuando como membro central do direcionamento do produto, contribuindo com propostas técnicas baseadas em experiência prática e fundamentos acadêmicos.",
        job6_description_3: "Liderei integrações com diversos serviços de terceiros, modernização de arquitetura legada, otimização de interações com banco de dados e melhorias de experiência e performance do sistema para suportar o crescimento do negócio.",
        job6_description_4: "Reestruturei o site institucional principal com tecnologias modernas em .NET e suporte a múltiplos idiomas, melhorando performance, SEO e experiência do usuário.",
        job6_description_5: "Otimizei o mecanismo de agendamento com parâmetros personalizados, reduzindo significativamente o tempo de operação dos clientes, diminuindo reclamações e melhorando a utilização do tempo do negócio.",

        job5_date: "Fev. 2020 - Abr. 2021",
        job5_title: "Desenvolvedor .NET Pleno",
        job5_company: "Grupo Fast • Fast Escova",
        job5_description_1: "Liderei o desenvolvimento de um novo sistema de gestão para uma franquia de clínicas de procedimentos estéticos, simplificando agendamentos, controle de estoque e operações gerais.",
        job5_description_2: "Projetei a arquitetura do sistema, estrutura de banco de dados, tecnologias e stack do projeto, utilizando Clean Architecture, DDD, .NET Core e princípios SOLID, garantindo escalabilidade, manutenibilidade e segurança a longo prazo.",
        job5_description_3: "Gerenciei uma pequena equipe de desenvolvedores freelancers, distribuindo tarefas, revisando código e assegurando a aderência às melhores práticas e objetivos de negócio.",
        job5_description_4: "Desenhei APIs seguras para sincronização de dados em tempo real entre múltiplas unidades e a franqueadora, centralizando dados e otimizando processos.",
        job5_description_5: "Desenvolvi um sistema de controle de estoque e vendas de insumos, melhorando visibilidade de inventário e reduzindo custos operacionais.",

        job4_date: "Fev. 2019 - Fev. 2020",
        job4_title: "Desenvolvedor .NET Pleno",
        job4_company: "Grupo Fast • MedicMais",
        job4_description_1: "Liderei o desenvolvimento de um sistema de gestão totalmente novo para uma franquia de planos de saúde, automatizando operações clínicas, prontuários médicos e agendamentos.",
        job4_description_2: "Projetei a arquitetura do sistema, estrutura de banco de dados, tecnologias e stack do projeto.",
        job4_description_3: "Desenvolvi uma agenda médica interativa com múltiplas visualizações e sincronização em tempo real, aumentando significativamente a eficiência de agendamento e a coordenação das equipes médicas.",
        job4_description_4: "Gerenciei uma equipe de desenvolvedores freelancers, garantindo a entrega de soluções escaláveis e de alta qualidade.",
        job4_description_5: "Implementei boas práticas de segurança, incluindo armazenamento seguro de dados e integrações seguras via API, garantindo conformidade com regulamentações da área da saúde.",

        job3_date: "Nov. 2016 - Jan. 2019",
        job3_title: "Desenvolvedor .NET Júnior",
        job3_company: "Instituto da Construção",
        job3_description_1: "Atuei na melhoria de um sistema de gestão para uma rede de escolas de capacitação na área da construção civil, otimizando fluxos operacionais, acelerando processos e aumentando a adesão aos cursos.",
        job3_description_2: "Otimizei consultas e relatórios em banco de dados, reduzindo o tempo de execução e melhorando a eficiência na recuperação de dados.",
        job3_description_3: "Desenvolvi integração com gateways de pagamento via pinpad, método amplamente utilizado pelo público-alvo, aumentando as vendas.",
        job3_description_4: "Implementei um processo de agendamento em grupo para controle de turmas, salas, professores e alunos, evitando conflitos de horários e melhorando a disponibilidade.",

        job2_date: "Abr. 2016 - Nov. 2016",
        job2_title: "Analista de suporte",
        job2_company: "Resolve Franchising",
        job2_description_1: "Suporte técnico e treinamento para usuários e franqueados em três marcas de franquia, aumentando a adoção dos usuários à usabilidade do sistema e prevenindo problemas de operação.",
        job2_description_2: "Consultas de banco de dados para relatórios pontuais e análise de anomalias para resolver problemas do sistema, atuando como ponte entre usuários finais e desenvolvedores para aprimoramentos de recursos de sistema.",
        job2_description_3: "Composição de documentação para sistemas existentes e novos recursos, mantendo a operação atualizada com mudanças e melhorias.",

        job1_date: "Nov. 2012 - Jul. 2015",
        job1_title: "Assistente Administrativo",
        job1_company: "De Rose Comércio e Representações LTDA",
        job1_description: "Gerenciamento de tarefas financeiras e administrativas, incluindo faturamento e processamento de notas fiscais eletrônicas.",

        // Education section
        education_2_date: "Jan. 2014 - Dez. 2018",
        education_1_date: "Jan. 2009 - Jul. 2010",
        education_title: "Educação",
        degree_computer_engineering: "Engenharia da computação",
        degree_computer_technician: "Técnico em informática",
        education_thesis: "Tese:",
        education_initiation_program: "Programa de iniciação científica:",
        education_thesis1: "Utilização de galvanômetro como componente eletrônico em harpas laser.",
        education_thesis2: "Estudo comparativo do algoritmo de rastreamento de caminho A* versus algoritmo genético de aprendizado de máquina na automação de robôs de armazém.",
        education_thesis3: "Software empregado em automação de bancas de jornais.",
        degree_type_bachelor: "Bacharelado",
        degree_type_technician: "Nível técnico",

        // Projects section
        projects_title: "Projetos",
        project_utilbox_title: "Utilbox",
        project_opensource: "Código aberto",
        project_mit_license: "Licença MIT",
        project_utilbox_description: "Uma coleção de bibliotecas de utilidades em C# projetadas para simplificar tarefas comuns de desenvolvimento. Com pacotes individuais para lidar com datas, enums, resultados, strings e paginação, o Utilbox é feito para desenvolvedores que desejam escrever código sem a necessidade de reinventar a roda.",
        view_github: "Ver no GitHub",
        view_nuget: "Ver no Nuget.org",

        // Courses section
        courses_title: "Cursos",
        course_oop: "Fundamentos da orientação a objetos",
        course_csharp: "Fundamentos do C#",
        course_ef: "Fundamentos do Entity Framework",
        course_microservices: "Fundamentos dos microsserviços",
        course_multitenant: "Aplicações Mult-Tenant com Entity Framework Core",
        course_ddd: "Modelando Domínios Ricos",
        course_architecture: "Software Architecture & System Design Practical Case Studies",
        course_hours: "horas",

        // Languages section
        languages_title: "Idiomas",
        language_portuguese: "Português Brasileiro",
        language_english: "Inglês",
        proficiency_native: "Nativo",
        proficiency_fluent: "Fluente",

        // Books section
        books_title: "Prateleira",
        books_intro: "Livros que considero importantes em minha formação e dia a dia como desenvolvedor de software e que mantenho na minha escrivaninha.",
        book_clean_code: "Código Limpo",
        book_clean_coder: "O Codificador Limpo",
        book_clean_architecture: "Arquitetura Limpa",
        book_ddd: "Domain Driven Design",
        book_refactoring: "Refatoração",
        book_csharp: "C# 9.0 Pocket Reference",

        book_ddd_subtitle: "Atacando as Complexidades no Coração do Software",
        book_refactoring_subtitle: "Aperfeiçoando o Design de Códigos Existentes",

        // Interests section
        interests_title: "Interesses",
        interests_tech_title: "Tecnologia",
        interests_science_title: "Ciência",
        interests_communicatin_title: "Comunicação",
        interests_teamwork_title: "Trabalho em equipe",
        interests_ai_title: "Inteligência artificial",
        interests_tech: "Gosto de programar, ler e aprender coisas novas. Estou sempre em busca de novas tecnologias, novos desafios e de me manter atualizado nesse mundo em constante evolução. Tenho interesse em tudo que envolve computadores, incluindo hardware mas principalmente software, e nos últimos tempos venho me aventurando com a utilização de Inteligência Artificial executada localmente para automação de tarefas, geração de imagens, som, etc. Nas horas vagas busco me envolver em projetos pessoais de software para estudo e desenvolvimento pessoal e profissional.",
        interests_science: "Gosto de tudo relacionado a ciência, principalmente astronomia. Assuntos como mecânica quântica, física e matemática também me encantam e despertam meu interesse. Parte desse amor por ciência é traduzido no código, onde procuro sempre me apoiar nas boas práticas e técnicas já estabelecidas que os textos acadêmicos apresentam. Gosto de me ater a processos bem definidos e seguí-los para entregar código com a melhor qualidade possível.",
        interests_communication: "Tanto no ambiente pessoal quanto no ambiente profissional, gosto de cultivar diálogo aberto e sincero como forma de manter um ambiente sadio e aprender. Gosto muito de receber feedback sobre o meu trabalho e sempre busco formas de melhorar ou me adaptar à cada situação. Sou uma pessoa que aprende rápido. Também gosto de mediar diferentes pontos de vista e encontrar uma solução em comum.",
        interests_teamwork: "Gosto de trabalhar em equipes com objetivos de crescimento e aprendizado em comum. Procuro sempre manter um bom e cordial relacionamento com todos. Apesar de me considerar introvertido, gosto de estar em contato com pessoas e diferentes opiniões. Tanto o ambiente pessoal quanto o profissional são compartilhados com outras pessoas e saber entender, respeitar e as vezes absorver outros pontos de vista nos mantém em constante evolução.",
        interests_ai_1: "A IA é uma ferramenta poderosa que está remodelando nossa indústria. Assim como o CAD revolucionou a engenharia, os aceleradores de IA permitem que os desenvolvedores foquem em desafios arquiteturais de alto nível e na resolução criativa de problemas.",
        interests_ai_2: "Abraço a IA como um multiplicador de produtividade. Ela auxilia na prototipagem rápida, geração de código repetitivo e depuração, mas não substitui a compreensão profunda da lógica de negócios e das necessidades do usuário.",
        interests_ai_3: "A essência da engenharia de software reside na empatia humana e na tomada de decisões estratégicas. A IA serve como um copiloto que lida com a rotina, nos liberando para construir soluções mais robustas e centradas no ser humano.",
        interests_ai_4: "Estar à frente significa adaptar-se a essas novas ferramentas. Estou comprometido em utilizar a IA de forma responsável para entregar código de maior qualidade com mais rapidez, mantendo o pensamento crítico e a criatividade que definem a grande engenharia.",

        //Contacts section
        socials_title: "Contato e Redes Sociais",
        socials_intro: "Vamos nos conectar!",
        socials_invite: "É sempre bom estar em contato com novas pessoas. Tem alguma ideia de projeto? Quer discutir tecnologia, programação e código? Precisa de um desenvolvedor? Encontre-me nos links abaixo."
    }
};