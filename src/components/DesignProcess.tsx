import { Search, Target, Layout, Palette, Play, TestTube } from "lucide-react";

const steps = [
  { icon: Search, title: "Research", desc: "Understanding users, analyzing competitors, and identifying pain points." },
  { icon: Target, title: "Define", desc: "Synthesizing research into clear problem statements and goals." },
  { icon: Layout, title: "Wireframe", desc: "Creating early structures that define layout and interaction." },
  { icon: Palette, title: "Design", desc: "Crafting visual systems that balance usability and aesthetics." },
  { icon: Play, title: "Prototype", desc: "Building interactive flows that bring the design to life." },
  { icon: TestTube, title: "Test", desc: "Validating decisions through user testing and iteration." },
];

const DesignProcess = () => (
  <section id="process" className="py-24 lg:py-32">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Design Process
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          A structured approach to creating meaningful products.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative p-8 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
          >
            <span className="absolute top-6 right-6 text-5xl font-bold text-muted/80">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <step.icon size={20} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DesignProcess;
