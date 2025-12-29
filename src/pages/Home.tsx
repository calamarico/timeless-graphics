import Header from "../components/layout/Header";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import About from "../components/about/About";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
    </>
  );
}
