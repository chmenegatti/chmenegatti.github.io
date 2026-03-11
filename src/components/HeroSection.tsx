import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram, Mail, BookOpen } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/cesarmenegatti/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/chmenegatti", label: "GitHub" },
  { icon: Facebook, href: "https://www.facebook.com/cesar.menegatti", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/chmenegatti/", label: "Instagram" },
];

const HeroSection = () => {
  return (
    <section id="sobre" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-primary text-sm mb-4 tracking-wider">
              // Olá, eu sou
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Cesar
              <br />
              <span className="gradient-text">Menegatti</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2 font-mono">
              Especialista II de Desenvolvimento Cloud
            </p>
            <p className="text-secondary-foreground leading-relaxed mb-8 max-w-lg">
              Desenvolvedor Backend Sênior apaixonado por construir soluções escaláveis e eficientes,
              com forte experiência em Go, Node.js e Inteligência Artificial.
              Arquitetura de sistemas, performance e APIs robustas.
            </p>

            <div className="flex items-center gap-4 mb-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-[0_0_20px_hsl(142_72%_50%/0.3)] transition-all"
              >
                <Mail size={16} />
                Entre em contato
              </a>
              <a
                href="https://www.cesarmenegatti.com/go-na-pratica/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all"
              >
                <BookOpen size={16} />
                📘 Go na Prática
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center box-glow">
                <div className="font-mono text-primary text-center leading-relaxed text-sm">
                  <p className="text-muted-foreground text-xs mb-2">{"// main.go"}</p>
                  <p><span className="text-primary">func</span> main() {"{"}</p>
                  <p className="ml-4">build(<span className="text-foreground">"solutions"</span>)</p>
                  <p className="ml-4">optimize(<span className="text-foreground">"performance"</span>)</p>
                  <p className="ml-4">deploy(<span className="text-foreground">"cloud"</span>)</p>
                  <p>{"}"}</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-card border border-border flex items-center justify-center">
                <span className="font-mono text-primary text-2xl font-bold">Go</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl bg-card border border-border flex items-center justify-center">
                <span className="font-mono text-primary text-lg font-bold">Node</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
