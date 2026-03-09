import { Eye, Heart, Search, Brain } from "lucide-react";
import { useRevealChildren } from "@/hooks/useReveal";

const principles = [
  { icon: Eye, title: "Clarity over complexity", desc: "Every element serves a purpose. Nothing is decorative without function." },
  { icon: Heart, title: "Emotionally thoughtful interfaces", desc: "Design that resonates with users on an emotional level." },
  { icon: Search, title: "Research-driven design decisions", desc: "Every design choice is informed by data and user insights." },
  { icon: Brain, title: "Reducing cognitive load", desc: "Making complex systems feel simple and intuitive." },
];

const Philosophy = () => {
  const ref = useRevealChildren();

  return (
    <section className="py-28 lg:py-40 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-3xl mb-20 reveal">
          <p className="label-caps mb-4">Philosophy</p>
          <h2 className="section-heading mb-6">
            My Design Philosophy
          </h2>
          <p className="section-subheading">
            I believe the best digital products feel calm, effortless, and human.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="reveal p-8 lg:p-10 rounded-2xl bg-card border border-border/40 card-hover group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-500">
                <p.icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2.5 tracking-tight">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
