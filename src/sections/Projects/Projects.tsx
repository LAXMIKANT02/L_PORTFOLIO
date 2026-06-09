import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { featuredProject, projects } from "./ProjectData";

function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
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
          className="mb-14"
        >
          <span className="uppercase tracking-[0.25em] text-xs text-[#c0c1ff]">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Selected
            <span className="text-[#c0c1ff]"> Projects</span>
          </h2>
        </motion.div>

        {/* FEATURED */}

        <div className="mb-10">
          <ProjectCard {...featuredProject} github="" />
        </div>

        {/* OTHER PROJECTS */}

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
