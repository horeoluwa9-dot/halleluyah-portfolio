import { Mail, Linkedin, Send } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 lg:py-32">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Let's Work Together
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          If you're interested in working together or discussing design
          opportunities, feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:hello@halleluyah.design"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-border hover:bg-secondary transition-colors"
          >
            <Mail size={18} className="text-primary" />
            <span className="text-foreground">Email</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-border hover:bg-secondary transition-colors"
          >
            <Linkedin size={18} className="text-primary" />
            <span className="text-foreground">LinkedIn</span>
          </a>
        </div>

        <button className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity">
          <Send size={18} />
          Send Message
        </button>
      </div>
    </div>
  </section>
);

export default Contact;
