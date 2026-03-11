const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-mono text-sm text-muted-foreground">
        {"<CM />"} © {new Date().getFullYear()}
      </p>
      <p className="text-xs text-muted-foreground">
        Construído com React + TypeScript
      </p>
    </div>
  </footer>
);

export default Footer;
