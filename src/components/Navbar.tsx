import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/resume" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/40 shadow-[0_1px_3px_0_hsl(var(--foreground)/0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/"
            className="text-sm font-bold tracking-[0.2em] text-foreground hover:text-primary transition-colors duration-300"
          >
            HALLELUYAH
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline pb-0.5"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/#work")}
              className="px-5 py-2 bg-foreground text-background text-[13px] font-medium rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/10"
            >
              View Work
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden pb-8 animate-fade-in">
            <div className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-base py-3 text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("/#work")}
                className="w-fit mt-4 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-full"
              >
                View Work
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
