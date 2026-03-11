import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// contact"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Estou sempre aberto a novas oportunidades e desafios interessantes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <a
            href="mailto:cesar.oliveira@totvs.com.br"
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <Mail size={20} className="text-primary" />
            </div>
            <p className="text-sm font-mono text-muted-foreground">cesar.oliveira@totvs.com.br</p>
          </a>

          <a
            href="https://wa.me/5519988270809"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <Phone size={20} className="text-primary" />
            </div>
            <p className="text-sm font-mono text-muted-foreground">WhatsApp</p>
          </a>

          <a
            href="https://www.linkedin.com/in/cesarmenegatti/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <Linkedin size={20} className="text-primary" />
            </div>
            <p className="text-sm font-mono text-muted-foreground">LinkedIn</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
