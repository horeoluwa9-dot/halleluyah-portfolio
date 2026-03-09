import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-primary">
                UI/UX Designer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground tracking-tight">
                Ayodele Halleluyah{" "}
                <span className="text-primary">Oreoluwa</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                I design calm, intuitive digital experiences that simplify complex
                interactions and create meaningful user experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToWork}
                className="px-7 py-3.5 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                View Projects
              </button>
              <a
                href="#contact"
                className="px-7 py-3.5 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors"
              >
                Download Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              {["Figma", "UX Research", "Product Design", "Prototyping"].map(
                (skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary rounded-full">
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right - Abstract Visual */}
          <div className="relative hidden lg:block">
            <div className="aspect-square max-w-lg mx-auto relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5" />
              <div className="absolute top-8 left-8 w-48 h-48 rounded-2xl bg-primary/15 backdrop-blur-sm" />
              <div className="absolute bottom-12 right-8 w-40 h-40 rounded-full bg-accent/20 backdrop-blur-sm" />
              <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-xl bg-secondary border border-border/50 shadow-lg" />
              <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full border-2 border-primary/30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-lg bg-foreground/5 border border-border" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <button onClick={scrollToWork} className="animate-bounce text-muted-foreground">
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
