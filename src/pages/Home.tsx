import Header from "../components/layout/Header";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}
