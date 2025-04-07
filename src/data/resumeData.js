// src/data/resumeData.js
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiGo, SiNodedotjs, SiPhp, SiPython, SiCss3, SiReact, SiHtml5, SiShell, SiMariadb, SiPostgresql, SiMongodb, SiRedis, SiLinux, SiDocker, SiKubernetes, SiGit } from 'react-icons/si'; // Exemplo de ícones

export const resumeData = {
  name: "Cesar Menegatti",
  title: "Especialista II de Desenvolvimento Cloud",
  profilePic: "/path/to/your/professional-photo.jpg", // Opcional: Coloque a foto em `public/` ou `src/assets/` e ajuste o path
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/cesar-menegatti-54630b125/", icon: FaLinkedin },
    { name: "GitHub", url: "https://github.com/chmenegatti/chmenegatti", icon: FaGithub },
    { name: "Facebook", url: "https://facebook.com/chmenegatti", icon: FaFacebook }, // Se relevante
    { name: "Instagram", url: "https://instagram.com/chmenegatti", icon: FaInstagram }, // Se relevante
  ],
  aboutMe: "Desenvolvedor Backend Sênior apaixonado por construir soluções escaláveis e eficientes, com forte experiência em Go (Golang), Node.js e uso de Inteligência Artificial. Gosto de aplicar minhas habilidades em arquitetura de sistemas, otimização de performance e desenvolvimento de APIs robustas. Experiente em ambientes de nuvem e práticas de DevOps.",
  skills: {
    main: [
      { name: "Go (Golang)", level: 95, icon: SiGo }, // Nível de 0 a 100
      { name: "Node.js", level: 95, icon: SiNodedotjs },
      { name: "Shell", level: 90, icon: SiLinux },
    ],
    secondary: [
      { name: "React", level: 70, icon: SiReact },
      { name: "CSS", level: 70, icon: SiCss3 },
      { name: "HTML", level: 70, icon: SiHtml5 },
      { name: "PHP", level: 75, icon: SiPhp },
      { name: "Python", level: 20, icon: SiPython },
    ],
    // Adicionar outras categorias se necessário (Bancos de Dados, DevOps, Frontend, etc.)
    databases: [  
      { name: "MySQL/MariaDb", level: 85, icon: SiMariadb }, 
      { name: "PostgreSQL", level: 85, icon: SiPostgresql}, 
      { name: "MongoDB", level: 80, icon: SiMongodb }, 
      { name: "Redis", level: 75, icon: SiRedis }, 
    ],
    tools: [ 
      { name: "Docker", level: 90, icon: SiDocker }, 
      { name: "Kubernetes", level: 70, icon: SiKubernetes }, 
      { name: "Git", level: 95, icon: SiGit },
      { name: "GitLab CI", level: 80, icon: SiGit },
      { name: "GitHub Actions", level: 50, icon: SiGit },
    ],
      

  },
  experience: [
    {
      title: "Especialista II de Desenvolvimento Cloud (Promovido)",
      company: "Totvs S/A",
      period: "Dez 2024 - Atualmente",
      location: "São Paulo, SP",
      description: [
        "Referencia técnica na área de atução e na equipe.",
        "Referência técnica em desenvolvimento de soluções em Go, Node.js e Shell.",
        "Referência técnica em arquitetura de sistemas e design de APIs.",
        "Desenvolvimento de soluções em Inteligência Artificial para otimização de processos.",
        "Desenvolvimento de módulos para o Api gateway utilizando Go",
        "Otimização de consultas em banco de dados MariaDb.",
        "Implementação de testes automatizados com Go",
        "Integração com APIs de terceiros. (NSXt, vSphere, Rubrik, PaloAlto, Fortinet, NetApp)",
        "Desenvolvimento de scripts em Shell para automação de processos.",
        "Participação ativa em reuniões de arquitetura e design de sistemas.",
        "Mentoria de desenvolvedores júnior e participação ativa em code reviews.",
        "Comprometimento com a melhoria contínua e inovação, buscando sempre as melhores práticas de desenvolvimento.",
        "Entrega de metas e resultados dentro dos prazos estabelecidos.",
      ],
    },
    {
      title: "Especialista I de Desenvolvimento Cloud (Promovido)",
      company: "Totvs S/A",
      period: "Jul 2023 - Nov 2024",
      location: "São Paulo, SP",
      description: [
        "Desenvolvimento de módulos para o Api gateway utilizando Go",
        "Otimização de consultas em banco de dados MariaDb.",
        "Implementação de testes automatizados com Go",
        "Integração com APIs de terceiros. (NSXt, vSphere, Rubrik, PaloAlto, Fortinet, NetApp)",
        "Desenvolvimento de scripts em Shell para automação de processos.",
        "Participação ativa em reuniões de arquitetura e design de sistemas.",
        "Mentoria de desenvolvedores júnior e participação ativa em code reviews.",
        "Comprometimento com a melhoria contínua e inovação, buscando sempre as melhores práticas de desenvolvimento.",
        "Entrega de metas e resultados dentro dos prazos estabelecidos.",
      ],
    },
    {
      title: "Desenvolvedor Backend Sênior",
      company: "Totvs S/A",
      period: "Fev 2022 - Jun 2023",
      location: "São Paulo, SP",
      description: [
        "Desenvolvimento de módulos para o Api gateway utilizando Go",
        "Otimização de consultas em banco de dados MariaDb.",
        "Implementação de testes automatizados com Go",
        "Integração com APIs de terceiros. (NSXt, vSphere, Rubrik, PaloAlto, Fortinet, NetApp)",
        "Desenvolvimento de scripts em Shell para automação de processos.",
        "Participação ativa em reuniões de arquitetura e design de sistemas.",
        "Mentoria de desenvolvedores júnior e participação ativa em code reviews.",
      ],
    },
    {
      title: "Desenvolvedor Backend Sênior",
      company: "Yalo Benefícios",
      period: "Ago 2021 - Jan 2022",
      location: "São Paulo, SP",
      description: [
        "Desenvolvimento de módulos para um sistema de benefícios utilizando Node.js e Express.",
        "Otimização de consultas em banco de dados PostgreSQL.",
        "Implementação de testes automatizados com Jest e Cypress.",
        "Integração com API de pagamento e serviços de terceiros. (Stone)",
        "Integração com APIs de terceiros.",
      ],
    },
    {
      title: "Desenvolvedor Backend Sênior",
      company: "FR Consultoria",
      period: "Jun 2021 - Ago 2021",
      location: "Piracicaba, SP",
      description: [
        "Desenvolvimento de módulos para um sistema back-office utilizando Node.js e Express.",
        "Otimização de consultas em banco de dados PostgreSQL.",
        "Integração com APIs de terceiros.",
      ],
    },
    {
      title: "Desenvolvedor Backend Sênior",
      company: "Corsi Arquitetura",
      period: "Jan 2018 - Jun 2021",
      location: "Piracicaba, SP",
      description: [
        "Liderança técnica no desenvolvimento de um sistema de gestão dos projetos utilizando Node.js e ReactJS.",
        "Implementação de pipelines CI/CD com GitLab CI e Docker, reduzindo o tempo de deploy em 50%.",
        "Desenvolvimento e manutenção de APIs RESTful com foco em performance e escalabilidade.",
        "Mentoria de desenvolvedores júnior e participação ativa em code reviews.",
      ],
    },
    // Adicione mais experiências
  ],
  education: [
    {
      institution: "Universadade Cruzeiro do Sul Virtual",
      degree: "MBA em Arquitetura de Software e Métodos Ágeis",
      period: "2021",
    },
    {
      institution: "Bacharelado em Engenharia de Civil",
      degree: "Escola de Engenharia de Piracicaba",
      period: "2003 - 2007",
    },
    {
      institution: "Bacharelado em Ciências da Computação",
      degree: "Escola de Engenharia de Piracicaba",
      period: "1997 - 2001",
    },
  ],
  projects: [
    {
      name: "API de E-commerce em Go",
      description: "Projeto pessoal de uma API RESTful completa para um e-commerce, utilizando Go, Gin Gonic, PostgreSQL e Docker.",
      stack: ["Go", "Gin Gonic", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/yourusername/go-ecommerce-api", // Link para o repo
      liveUrl: null, // Link para a demo online, se houver
    },
    {
      name: "Chat em Tempo Real com Node.js",
      description: "Aplicação de chat usando Node.js, Socket.IO e React para o frontend.",
      stack: ["Node.js", "Express", "Socket.IO", "React", "MongoDB"],
      githubUrl: "https://github.com/yourusername/nodejs-realtime-chat",
      liveUrl: "https://link-para-demo.com", // Exemplo
    },
    // Adicione mais projetos
  ],
  contact: {
    email: "cesar.oliveira@totvs.com.br",
    phone: "+55 (19) 98827-0809", // Opcional
    linkedin: "https://linkedin.com/in/cesar-menegatti-54630b125", // Repetido para fácil acesso na seção
  }
};