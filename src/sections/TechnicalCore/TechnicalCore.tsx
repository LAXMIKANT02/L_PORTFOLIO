import { motion } from "framer-motion";
import EcosystemCanvas from "../../components/technical/EcosystemCanvas";

function TechnicalCore() {
  return (
    <section
      id="stack"
      className="
        py-10
        px-6
        relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mt-0">
            Technology
            <span className="text-[#c0c1ff]"> Ecosystem</span>
          </h2>

          <p className="mt-6 text-[#c7c4d7] max-w-3xl mx-auto leading-relaxed">
            Technologies don't exist in isolation. They collaborate,
            communicate, and evolve together inside every system I build.
          </p>
        </motion.div>

        {/* Ecosystem */}

        <EcosystemCanvas />
      </div>
    </section>
  );
}

export default TechnicalCore;
