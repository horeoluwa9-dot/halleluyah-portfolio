import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRevealChildren } from "@/hooks/useReveal";
import mindloop1 from "@/assets/mindloop-1.png";
import firstbank1 from "@/assets/firstbank-1.png";
import jumia1 from "@/assets/jumia-1.png";

const projects = [
  {
    id: "mindloop",
    title: "MindLoop – Emotional Wellness App",
    description:
      "An AI-powered wellness app designed to help users track emotions, reflect through journaling, and receive personalized wellbeing recommendations.",
    image: mindloop1,
    tags: ["Mobile App", "AI", "Wellness"],
  },
  {
    id: "firstbank",
    title: "FirstBank Mobile Redesign",
    description:
      "A redesign of the FirstBank mobile experience focused on simplifying the dashboard, improving hierarchy, and making transactions easier to navigate.",
    image: firstbank1,
    tags: ["Mobile App", "Fintech", "Redesign"],
  },
  {
    id: "jumia",
    title: "Jumia App Redesign",
    description:
      "A redesign of the Jumia shopping experience focused on improving product discovery, cart usability, and checkout flow.",
    image: jumia1,
    tags: ["Mobile App", "E-commerce", "Redesign"],
  },
];

const SelectedWork = () => {
  const containerRef = useRevealChildren();

  return (
    <section id="work" className="py-28 lg:py-40">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="mb-20 reveal" ref={containerRef}>
          <p className="label-caps mb-4">Selected Work</p>
          <h2 className="section-heading mb-5">
            Featured Projects
          </h2>
          <p className="section-subheading">
            A curated selection of projects showcasing my approach to user-centered design.
          </p>
        </div>

        <div ref={containerRef} className="space-y-20">
          {projects.map((project, i) => (
            <Link
              key={project.id}
              to={`/case-study/${project.id}`}
              className="reveal group block"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="rounded-2xl overflow-hidden bg-card border border-border/40 card-hover">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-[420px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary group-hover:gap-3.5 transition-all duration-500">
                    View Case Study <ArrowRight size={14} strokeWidth={2.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
