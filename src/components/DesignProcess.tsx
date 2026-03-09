import { Search, Target, Layout, Palette, Play, TestTube } from "lucide-react";
import { useRevealChildren } from "@/hooks/useReveal";

const steps = [
  { icon: Search, title: "Research", desc: "Understanding users, analyzing competitors, and identifying pain points." },
  { icon: Target, title: "Define", desc: "Synthesizing research into clear problem statements and goals." },
  { icon: Layout, title: "Wireframe", desc: "Creating early structures that define layout and interaction." },
  { icon: Palette, title: "Design", desc: "Crafting visual systems that balance usability and aesthetics." },
  { icon: Play, title: "Prototype", desc: "Building interactive flows that bring the design to life." },
  { icon: TestTube, title: "Test", desc: "Validating decisions through user testing and iteration." },
];

const DesignProcess = () => {
  const ref = useRevealChildren();

  return (
    <section id="process" className="py-28 lg:py-40">
      <div ref={ref} className="container mx-auto px-6 lg:px-16">
        <div className="mb-20 reveal">
          <p className="label-caps mb-4">Process</p>
          <h2 className="section-heading mb-5">
            Design Process
          </h2>
          <p className="section-subheading">
            A structured approach to creating meaningful products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="reveal relative p-8 lg:p-9 rounded-2xl border border-border/40 bg-card card-hover group"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span className="absolute top-7 right-8 text-[3rem] font-black text-muted-foreground/[0.06] leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-500">
                <step.icon size={18} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 tracking-tight">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
