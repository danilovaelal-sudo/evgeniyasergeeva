import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Issues from "@/components/Issues";
import Methods from "@/components/Methods";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Issues />
      <Methods />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
