import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "📘 Go na Prática",
    description: "Livro com 30 capítulos para dominar Go — do zero ao projeto final, com +100 exercícios práticos, tudo em português.",
    tags: ["Go", "Livro", "100+ Exercícios", "Projeto Final"],
    link: "https://www.cesarmenegatti.com/go-na-pratica/",
    featured: true,
  },
  {
    title: "E-Coleta",
    description: "Aplicação Web e Mobile para encontrar pontos de coleta para reciclagem.",
    tags: ["TypeScript", "Node.js", "React", "React Native", "PostgreSQL"],
    github: "https://github.com/chmenegatti/nlw01-ecoleta",
  },
  {
    title: "Jogo da Forca Lúdico",
    description: "Jogo da forca com proposta lúdica e interface web interativa.",
    tags: ["ReactJS", "TypeScript", "Jogo Web"],
    link: "https://balaodaforca.vercel.app/",
  },
  {
    title: "Bolão da Copa 2026",
    description: "Plataforma de bolão da Copa 2026 desenvolvida com Next.js e publicada em infraestrutura com MetalLB e Kubernetes.",
    tags: ["Next.js", "MetalLB", "Kubernetes"],
    link: "https://bolao.cesarmenegatti.com/",
  },
  {
    title: "Robô YouTube com IA",
    description: "Robô que gera vídeos e publica no YouTube utilizando Inteligência Artificial.",
    tags: ["Node.js", "After Effects", "FFmpeg", "Watson", "Wikipedia"],
  },
  {
    title: "Gestão de Ativos de Obra",
    description: "Sistema de gestão de ativos para Cataguá Construtora.",
    tags: ["PHP", "MariaDB", "JavaScript"],
  },
  {
    title: "Ficha de Inspeção",
    description: "Sistema de gestão de fichas de inspeção de serviços para Supricel Construtora.",
    tags: ["PHP", "MariaDB", "JavaScript"],
  },
  {
    title: "Gestão de Compras",
    description: "Sistema de gestão de compras para Tropcons Construtora.",
    tags: ["PHP", "MariaDB", "JavaScript"],
  },
  {
    title: "Gestão de Treinamentos",
    description: "Sistema de gestão de treinamentos para Tropcons Construtora.",
    tags: ["PHP", "MariaDB", "JavaScript"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// projects"}</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projetos Pessoais</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`bg-card rounded-xl p-6 border transition-all group ${
                project.featured ? "border-primary/40 box-glow" : "border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all mb-4 ${
                    project.featured
                      ? "bg-primary text-primary-foreground hover:shadow-[0_0_16px_hsl(142_72%_50%/0.4)]"
                      : "border border-primary/30 text-primary hover:bg-primary/10"
                  }`}
                >
                  <ExternalLink size={14} />
                  Ver site
                </a>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
