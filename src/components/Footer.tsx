import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ayodele Halleluyah Oreoluwa
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="mailto:hello@halleluyah.design" className="hover:text-foreground transition-colors">
            Email
          </a>
          <Link to="/resume" className="hover:text-foreground transition-colors">
            Resume
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
