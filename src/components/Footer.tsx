import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/40 py-14 lg:py-16">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[13px] text-muted-foreground/70">
          © {new Date().getFullYear()} Ayodele Halleluyah Oreoluwa
        </p>
        <div className="flex items-center gap-8 text-[13px] text-muted-foreground">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-300 link-underline pb-0.5">
            LinkedIn
          </a>
          <a href="mailto:hello@halleluyah.design" className="hover:text-foreground transition-colors duration-300 link-underline pb-0.5">
            Email
          </a>
          <Link to="/resume" className="hover:text-foreground transition-colors duration-300 link-underline pb-0.5">
            Resume
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
