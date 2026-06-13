import CursorGlow from "./components/effects/CursorGlow";
import AuroraBackground from "./components/effects/AuroraBackground";
import Navbar from "./components/layout/Navbar";
import { lazy, Suspense } from "react";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import TechnicalCore from "./sections/TechnicalCore/TechnicalCore";
import Education from "./sections/Education/Education";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/footer/Footer";

const Achievements = lazy(() => import("./sections/Achievements/Achievements"));
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
        <Suspense fallback={null}>
          <Achievements />
        </Suspense>
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
