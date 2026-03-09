const skills = ["UX Research", "Wireframing", "Prototyping", "Visual Design"];
const tools = ["Figma", "Photoshop"];

const About = () => (
  <section id="about" className="py-24 lg:py-32 bg-secondary/50">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Profile Image Placeholder */}
        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 border border-border/50 flex items-center justify-center">
            <span className="text-6xl">👩🏾‍🎨</span>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              I am a UI/UX designer passionate about creating clean and engaging
              digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work focuses on crafting intuitive interfaces that combine
              empathy, research, and thoughtful visual design.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-primary/10 text-sm text-primary font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
