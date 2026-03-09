import { ArrowDown } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const Hero = () => {
  const ref = useReveal();

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-20">
      <div className="container mx-auto px-6 lg:px-16">
        <div
          ref={ref}
          className="reveal grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          {/* Left */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-[13px] font-medium text-primary tracking-wide">
                UI/UX Designer
              </div>
              <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold leading-[1.08] text-foreground tracking-[-0.035em]">
                Ayodele Halleluyah{" "}
                <span className="text-primary">Oreoluwa</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-[1.7] font-light">
                I design calm, intuitive digital experiences that simplify complex
                interactions and create meaningful user experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToWork}
                className="group px-7 py-3.5 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10"
              >
                View Projects
              </button>
              <a
                href="/Ayodele_Halleluyah_UIUX_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-border text-foreground font-medium rounded-full hover:bg-secondary hover:border-border/80 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Figma", "UX Research", "Product Design", "Prototyping"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 bg-secondary/80 rounded-full text-[13px] text-muted-foreground font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right - Abstract Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="aspect-square w-full max-w-[480px] relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
              <div className="absolute top-10 left-10 w-44 h-44 rounded-2xl bg-primary/10 backdrop-blur-sm animate-[fade-in_1s_ease-out_0.2s_forwards] opacity-0" />
              <div className="absolute bottom-14 right-10 w-36 h-36 rounded-full bg-accent/15 backdrop-blur-sm animate-[fade-in_1s_ease-out_0.4s_forwards] opacity-0" />
              <div className="absolute top-[30%] right-[22%] w-28 h-28 rounded-xl bg-card border border-border/50 shadow-xl animate-[fade-in_1s_ease-out_0.6s_forwards] opacity-0" />
              <div className="absolute bottom-[30%] left-[22%] w-20 h-20 rounded-full border-2 border-primary/20 animate-[fade-in_1s_ease-out_0.8s_forwards] opacity-0" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-lg bg-foreground/[0.03] border border-border/50 animate-[fade-in_1s_ease-out_1s_forwards] opacity-0" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 lg:mt-24">
          <button
            onClick={scrollToWork}
            className="text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-500 animate-bounce"
          >
            <ArrowDown size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
