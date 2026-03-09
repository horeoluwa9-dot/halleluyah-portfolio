import { Mail, Linkedin, Send } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const Contact = () => {
  const ref = useReveal();

  return (
    <section id="contact" className="py-28 lg:py-40">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-caps mb-4">Contact</p>
          <h2 className="section-heading mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-14 leading-relaxed">
            If you're interested in working together or discussing design
            opportunities, feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="mailto:hello@halleluyah.design"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-border/60 bg-card hover:bg-secondary hover:border-border transition-all duration-300 group"
            >
              <Mail size={17} className="text-primary" strokeWidth={1.5} />
              <span className="text-foreground text-[14px] font-medium">Email</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-border/60 bg-card hover:bg-secondary hover:border-border transition-all duration-300 group"
            >
              <Linkedin size={17} className="text-primary" strokeWidth={1.5} />
              <span className="text-foreground text-[14px] font-medium">LinkedIn</span>
            </a>
          </div>

          <button className="inline-flex items-center gap-2.5 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10">
            <Send size={16} strokeWidth={1.5} />
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
