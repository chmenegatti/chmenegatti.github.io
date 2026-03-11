import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

type Job = {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  promoted?: boolean;
};

const jobs: Job[] = [
  {
    title: "Especialista II de Desenvolvimento Cloud",
    company: "Totvs S/A",
    period: "Dez 2024 - Atualmente",
    location: "São Paulo, SP",
    promoted: true,
    highlights: [
      "Referência técnica em Go, Node.js e Shell",
      "Soluções de IA para otimização de processos",
      "Módulos para API Gateway em Go",
      "Integração com APIs: NSXt, vSphere, Rubrik, PaloAlto, Fortinet, NetApp",
      "Mentoria de desenvolvedores e code reviews",
    ],
  },
  {
    title: "Especialista I de Desenvolvimento Cloud",
    company: "Totvs S/A",
    period: "Jul 2023 - Nov 2024",
    location: "São Paulo, SP",
    promoted: true,
    highlights: [
      "Módulos para API Gateway em Go",
      "Otimização de consultas MariaDB",
      "Testes automatizados e CI/CD",
    ],
  },
  {
    title: "Desenvolvedor Backend Sênior",
    company: "Totvs S/A",
    period: "Fev 2022 - Jun 2023",
    location: "São Paulo, SP",
    highlights: [
      "Módulos para API Gateway em Go",
      "Integração com APIs de terceiros",
      "Mentoria e code reviews",
    ],
  },
  {
    title: "Desenvolvedor Backend Sênior",
    company: "Yalo Benefícios",
    period: "Ago 2021 - Jan 2022",
    location: "São Paulo, SP",
    highlights: [
      "Sistema de benefícios com Node.js e Express",
      "Integração com API de pagamento (Stone)",
      "Testes com Jest e Cypress",
    ],
  },
  {
    title: "Desenvolvedor Backend Sênior",
    company: "FR Consultoria",
    period: "Jun 2021 - Ago 2021",
    location: "Piracicaba, SP",
    highlights: [
      "Sistema back-office com Node.js",
      "Otimização de PostgreSQL",
    ],
  },
  {
    title: "Desenvolvedor Backend Sênior",
    company: "Corsi Arquitetura",
    period: "Jan 2018 - Jun 2021",
    location: "Piracicaba, SP",
    highlights: [
      "Liderança técnica: sistema de gestão com Node.js e React",
      "CI/CD com GitLab CI e Docker — redução de 50% no tempo de deploy",
      "APIs RESTful com foco em performance",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// experience"}</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experiência Profissional</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{job.title}</h3>
                      <p className="text-primary font-mono text-sm flex items-center gap-2">
                        <Briefcase size={14} />
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right">
                      {job.promoted && (
                        <span className="inline-block text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded mb-1">
                          Promovido
                        </span>
                      )}
                      <p className="text-xs text-muted-foreground font-mono">{job.period}</p>
                      <p className="text-xs text-muted-foreground">{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="text-sm text-secondary-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
