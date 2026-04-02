import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Issues from "@/components/Issues";
import Methods from "@/components/Methods";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import TestSection from "@/components/TestSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TestPopup from "@/components/TestPopup";

const Index = () => {
  const [testOpen, setTestOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Issues />
      <Methods />
      <Services />
      <Process />
      <Testimonials />
      <TestSection onOpenTest={() => setTestOpen(true)} />
      <FAQ />
      <Contact />
      <Footer />
      <TestPopup externalOpen={testOpen} onExternalClose={() => setTestOpen(false)} />
    </div>
  );
};

export default Index;
