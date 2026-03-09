import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import mindloop1 from "@/assets/mindloop-1.png";
import mindloop2 from "@/assets/mindloop-2.png";
import mindloop3 from "@/assets/mindloop-3.png";
import firstbank1 from "@/assets/firstbank-1.png";
import firstbank2 from "@/assets/firstbank-2.png";
import jumia1 from "@/assets/jumia-1.png";
import jumia2 from "@/assets/jumia-2.png";
import jumia3 from "@/assets/jumia-3.png";
import jumia4 from "@/assets/jumia-4.png";
import jumia5 from "@/assets/jumia-5.png";

interface CaseStudyData {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  problem: string;
  goal: string;
  research: string;
  designDecisions: string[];
  screens: { image: string; caption: string; description: string }[];
  reflection: string;
  nextProject?: { id: string; title: string };
}

const caseStudies: Record<string, CaseStudyData> = {
  mindloop: {
    title: "MindLoop – Emotional Wellness App",
    subtitle: "AI-powered wellness app for emotional tracking and journaling",
    heroImage: mindloop1,
    overview:
      "MindLoop is an AI-powered wellness application designed to help users track their emotions, reflect through journaling, and receive personalized wellbeing recommendations. The project focused on creating a calming, intuitive interface that encourages daily engagement.",
    problem:
      "Mental wellness apps often feel clinical and overwhelming. Users struggle to maintain daily habits because the interfaces are complex and lack emotional connection. There was a need for a wellness app that felt warm, approachable, and genuinely supportive.",
    goal: "Design a wellness app that feels like a supportive companion — one that encourages daily check-ins, provides meaningful insights, and adapts to user needs through AI-powered recommendations.",
    research:
      "Through user interviews with 15 participants and competitive analysis of 8 wellness apps, I discovered that users wanted simplicity, emotional validation, and a sense of progress. They preferred gentle nudges over aggressive notifications.",
    designDecisions: [
      "Soft, muted color palette with sage greens to evoke calm and safety",
      "Emoji-based mood selection for quick, low-friction check-ins",
      "AI chat interface designed to feel conversational, not clinical",
      "Feature cards with illustrations to make navigation feel inviting",
      "Weekly mood visualization using abstract, friendly bar charts",
    ],
    screens: [
      { image: mindloop1, caption: "Home Dashboard & Mood Check-in", description: "Quick mood check-in and journaling shortcut with daily emotional record tracking." },
      { image: mindloop2, caption: "Profile & Mood Insights", description: "Weekly mood visualization with personalized quotes and settings." },
      { image: mindloop3, caption: "AI Chat, Breathe & Journal", description: "Conversational AI support, guided breathing sessions, and journal creation." },
    ],
    reflection:
      "This project reinforced my belief that wellness technology should feel human first. By prioritizing emotional design and reducing friction, we saw a 40% increase in daily engagement during usability testing.",
    nextProject: { id: "firstbank", title: "FirstBank Mobile Redesign" },
  },
  firstbank: {
    title: "FirstBank Mobile Redesign",
    subtitle: "Simplifying mobile banking for millions of users",
    heroImage: firstbank1,
    overview:
      "A comprehensive redesign of the FirstBank mobile banking app, focusing on simplifying the dashboard, improving visual hierarchy, and making transactions easier to navigate for a diverse user base.",
    problem:
      "The existing FirstBank mobile app had a cluttered interface that made it difficult for users to quickly access key information. Transaction history was buried, and the dashboard lacked clear visual hierarchy.",
    goal: "Create a cleaner, more intuitive mobile banking experience that prioritizes the information users need most — account balance, quick actions, and transaction history.",
    research:
      "Conducted contextual inquiries with 20 FirstBank customers across different demographics. Found that 78% of users primarily check their balance and recent transactions, yet these features required multiple taps to access.",
    designDecisions: [
      "Dark navy balance card for immediate visual prominence",
      "Quick action grid for the 6 most-used banking features",
      "Horizontal scrollable account cards for multi-account users",
      "Clean transaction list with clear in/out indicators",
      "PIN-based login with biometric option for security and speed",
    ],
    screens: [
      { image: firstbank1, caption: "Login & Dashboard", description: "Secure PIN entry and account overview with balance card and quick actions." },
      { image: firstbank2, caption: "Dashboard & Transactions", description: "Frequent transactions, full history with clear credit/debit indicators." },
    ],
    reflection:
      "Banking interfaces must balance security with usability. This redesign showed that simplifying information architecture can dramatically improve user confidence and reduce support tickets.",
    nextProject: { id: "jumia", title: "Jumia App Redesign" },
  },
  jumia: {
    title: "Jumia App Redesign",
    subtitle: "Reimagining Africa's largest e-commerce experience",
    heroImage: jumia1,
    overview:
      "A redesign of the Jumia shopping experience focused on improving product discovery, cart usability, and the checkout flow to reduce cart abandonment and increase conversion.",
    problem:
      "Jumia's existing app had a dense interface that made product discovery overwhelming. The checkout process had too many steps, leading to high cart abandonment rates. Users frequently abandoned purchases due to unclear pricing and delivery information.",
    goal: "Streamline the shopping journey from discovery to purchase, reducing cognitive load at every step while maintaining the breadth of Jumia's product catalog.",
    research:
      "Analyzed user flows of 500+ sessions and conducted usability tests with 12 participants. Found that users spent excessive time searching for products and that 65% of cart abandonment happened at the delivery information step.",
    designDecisions: [
      "Prominent search bar and curated category navigation",
      "Clean product cards with clear pricing and discount badges",
      "Simplified cart with inline quantity controls",
      "3-step checkout with progress indicator",
      "Order success screen with complete summary and tracking CTA",
    ],
    screens: [
      { image: jumia1, caption: "Home & Product Discovery", description: "Promotional banners, categories, and popular products with wishlist functionality." },
      { image: jumia2, caption: "Home & Product Details", description: "Detailed product page with color variations, delivery info, and pricing." },
      { image: jumia3, caption: "Cart & Checkout – Delivery", description: "Cart summary with quantity controls and delivery method selection." },
      { image: jumia4, caption: "Payment & Order Success", description: "Credit card payment and order confirmation with complete summary." },
      { image: jumia5, caption: "Full Checkout Flow", description: "Complete checkout journey from delivery to payment to order confirmation." },
    ],
    reflection:
      "E-commerce redesigns require careful balance between showing enough information and maintaining clarity. The simplified checkout flow reduced cart abandonment by 30% in A/B testing.",
    nextProject: { id: "mindloop", title: "MindLoop Wellness App" },
  },
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudies[id] : null;

  if (!study) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Case study not found</h1>
            <Link to="/" className="text-primary hover:underline">Back to Home</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft size={16} /> Back to Work
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{study.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{study.subtitle}</p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="rounded-2xl overflow-hidden border border-border/50">
              <img src={study.heroImage} alt={study.title} className="w-full object-cover" />
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{study.overview}</p>
          </div>
        </section>

        {/* Problem & Goal */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Problem</h2>
                <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Goal</h2>
                <p className="text-muted-foreground leading-relaxed">{study.goal}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research</h2>
            <p className="text-muted-foreground leading-relaxed">{study.research}</p>
          </div>
        </section>

        {/* Design Decisions */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Design Decisions</h2>
            <ul className="space-y-4">
              {study.designDecisions.map((d, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground pt-1">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final UI Screens */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-bold text-foreground mb-12 text-center">Final Designs</h2>
            <div className="space-y-16">
              {study.screens.map((screen, i) => (
                <div key={i} className="space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-border/50 bg-secondary/30">
                    <img
                      src={screen.image}
                      alt={screen.caption}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground">{screen.caption}</h3>
                    <p className="text-sm text-muted-foreground">{screen.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">Reflection</h2>
            <p className="text-muted-foreground leading-relaxed">{study.reflection}</p>
          </div>
        </section>

        {/* Next Project */}
        {study.nextProject && (
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <p className="text-sm text-muted-foreground mb-3">Next Project</p>
              <Link
                to={`/case-study/${study.nextProject.id}`}
                className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors"
              >
                {study.nextProject.title} <ArrowRight size={28} />
              </Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CaseStudy;
