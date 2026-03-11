import { motion } from "framer-motion";

type SkillGroup = {
  title: string;
  skills: { name: string; level: number }[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Principais",
    skills: [
      { name: "Go (Golang)", level: 95 },
      { name: "Node.js", level: 95 },
      { name: "Shell", level: 90 },
    ],
  },
  {
    title: "Outras Linguagens",
    skills: [
      { name: "PHP", level: 75 },
      { name: "React", level: 70 },
      { name: "HTML / CSS", level: 70 },
      { name: "Python", level: 20 },
    ],
  },
  {
    title: "Bancos de Dados",
    skills: [
      { name: "MySQL / MariaDB", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    title: "Ferramentas & DevOps",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 90 },
      { name: "GitLab CI", level: 80 },
      { name: "Kubernetes", level: 70 },
      { name: "GitHub Actions", level: 50 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-mono text-foreground">{name}</span>
      <span className="text-xs font-mono text-primary">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary"
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="habilidades" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// skills"}</p>
          <h2 className="text-3xl md:text-4xl font-bold">Habilidades Técnicas</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <h3 className="text-lg font-semibold mb-5 text-foreground">{group.title}</h3>
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={si * 0.1} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
