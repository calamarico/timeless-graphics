import { Header } from "./layout/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Approach } from "./components/Approach";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
