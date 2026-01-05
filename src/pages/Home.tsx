import Header from "../components/layout/Header";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";
import VisualBreak from "../components/visualbreak/VisualBreak";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />

        <VisualBreak imageSrc="/images/visual-break.webp" />

        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
