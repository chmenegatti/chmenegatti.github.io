import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MBA em Arquitetura de Software e Métodos Ágeis",
    institution: "Universidade Cruzeiro do Sul Virtual",
    year: "2021",
  },
  {
    degree: "Bacharelado em Engenharia Civil",
    institution: "Escola de Engenharia de Piracicaba",
    year: "2003 - 2007",
  },
  {
    degree: "Bacharelado em Ciências da Computação",
    institution: "Escola de Engenharia de Piracicaba",
    year: "1997 - 2001",
  },
];

const EducationSection = () => {
  return (
    <section id="educacao" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// education"}</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educação e Certificações</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-2">{edu.degree}</h3>
              <p className="text-xs text-muted-foreground mb-1">{edu.institution}</p>
              <p className="text-xs font-mono text-primary">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
