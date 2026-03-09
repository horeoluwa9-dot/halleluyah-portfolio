import { Eye, Heart, Search, Brain } from "lucide-react";

const principles = [
  { icon: Eye, title: "Clarity over complexity", desc: "Every element serves a purpose. Nothing is decorative without function." },
  { icon: Heart, title: "Emotionally thoughtful interfaces", desc: "Design that resonates with users on an emotional level." },
  { icon: Search, title: "Research-driven design decisions", desc: "Every design choice is informed by data and user insights." },
  { icon: Brain, title: "Reducing cognitive load", desc: "Making complex systems feel simple and intuitive." },
];

const Philosophy = () => (
  <section className="py-24 lg:py-32 bg-secondary/50">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          My Design Philosophy
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I believe the best digital products feel calm, effortless, and human.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {principles.map((p) => (
          <div
            key={p.title}
            className="p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <p.icon size={22} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Philosophy;
