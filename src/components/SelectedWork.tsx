import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
    color: "from-primary/5 to-primary/10",
  },
  {
    id: "firstbank",
    title: "FirstBank Mobile Redesign",
    description:
      "A redesign of the FirstBank mobile experience focused on simplifying the dashboard, improving hierarchy, and making transactions easier to navigate.",
    image: firstbank1,
    color: "from-accent/5 to-accent/10",
  },
  {
    id: "jumia",
    title: "Jumia App Redesign",
    description:
      "A redesign of the Jumia shopping experience focused on improving product discovery, cart usability, and checkout flow.",
    image: jumia1,
    color: "from-secondary to-muted",
  },
];

const SelectedWork = () => (
  <section id="work" className="py-24 lg:py-32">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Selected Work
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          A curated selection of projects showcasing my approach to design.
        </p>
      </div>

      <div className="space-y-16">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            to={`/case-study/${project.id}`}
            className="group block"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className={`rounded-2xl overflow-hidden bg-gradient-to-br ${project.color} border border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}>
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-96 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  View Case Study <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default SelectedWork;
