import CursorGlow from "./components/effects/CursorGlow";
import AuroraBackground from "./components/effects/AuroraBackground";
import Navbar from "./components/layout/Navbar";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import TechnicalCore from "./sections/TechnicalCore/TechnicalCore";
import Education from "./sections/Education/Education";
import Projects from "./sections/Projects/Projects";
import Achievements from "./sections/Achievements/Achievements";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <CursorGlow />
      <AuroraBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <TechnicalCore />
        <Education />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
