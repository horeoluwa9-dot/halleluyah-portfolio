import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Philosophy from "@/components/Philosophy";
import DesignProcess from "@/components/DesignProcess";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <SelectedWork />
      <Philosophy />
      <DesignProcess />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
