import { motion } from "framer-motion";
import EducationRoadmap from "./EducationRoadmap";

function Education() {
  return (
    <section id="education" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
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
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mt-2">
            Academic
            <span className="text-[#c0c1ff]"> Journey</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-[#c7c4d7] leading-relaxed">
            Roadmap of my academic journey, from foundational education to
            pursuing Computer Science Engineering and modern software
            development.
          </p>
        </motion.div>

        <EducationRoadmap />
      </div>
    </section>
  );
}

export default Education;
