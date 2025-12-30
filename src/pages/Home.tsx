import Header from "../components/layout/Header";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
