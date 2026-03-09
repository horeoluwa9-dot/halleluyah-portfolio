import { useReveal } from "@/hooks/useReveal";
import profileImg from "@/assets/profile.png";

const skills = ["UX Research", "Wireframing", "Prototyping", "Visual Design"];
const tools = ["Figma", "Photoshop"];

const About = () => {
  const ref = useReveal();

  return (
    <section id="about" className="py-28 lg:py-40 bg-secondary/30">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-[2rem] overflow-hidden border border-border/40 shadow-xl shadow-primary/[0.03]">
              <img src={profileImg} alt="Ayodele Halleluyah Oreoluwa" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-10">
            <div>
              <p className="label-caps mb-4">About</p>
              <h2 className="section-heading mb-6">
                About Me
              </h2>
              <p className="text-muted-foreground text-lg leading-[1.8] mb-4">
                I am a UI/UX designer passionate about creating clean and engaging
                digital experiences.
              </p>
              <p className="text-muted-foreground leading-[1.8]">
                My work focuses on crafting intuitive interfaces that combine
                empathy, research, and thoughtful visual design.
              </p>
            </div>

            <div>
              <h3 className="label-caps mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((s) => (
                  <span key={s} className="px-4 py-2 rounded-full bg-card border border-border/60 text-[13px] font-medium text-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="label-caps mb-4">
                Tools
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {tools.map((t) => (
                  <span key={t} className="px-4 py-2 rounded-full bg-primary/8 border border-primary/12 text-[13px] text-primary font-semibold">
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
};

export default About;
