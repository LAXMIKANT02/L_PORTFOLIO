import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import GlassCard from "../../components/ui/GlassCard";

const projects = [
  {
    title: "AegisAI-X",
    category: "Banking SOC Platform",
    description:
      "Enterprise cybersecurity platform featuring incident management, MITRE ATT&CK mapping, fraud detection workflows, role-based dashboards, and security operations monitoring.",
    tech: ["React", "FastAPI", "PostgreSQL", "Docker", "Redis"],
  },

  {
    title: "ShopNest",
    category: "Full Stack E-Commerce",
    description:
      "Modern e-commerce platform with authentication, product management, shopping cart, order lifecycle management, admin workflows, and scalable backend architecture.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
  },

  {
    title: "Portfolio Platform",
    category: "Interactive Experience",
    description:
      "Immersive portfolio featuring Three.js visuals, motion design, glassmorphism UI, advanced animations, and performance-focused frontend engineering.",
    tech: ["React", "Three.js", "GSAP", "Framer Motion"],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-15 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="uppercase tracking-[0.25em] text-xs text-[#c0c1ff]">
              Featured Work
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">Projects</h2>
          </div>

          <button className="hidden md:block text-sm text-[#c7c4d7] hover:text-white transition">
            View All
          </button>
        </div>

        {/* Project Grid */}

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                delay: index * 0.15,
              }}
            >
              <GlassCard className="p-6 h-full">
                {/* Top */}

                <div className="flex items-center justify-between mb-6">
                  <FiGithub size={18} className="text-[#c0c1ff]" />

                  <FiExternalLink size={16} className="text-[#c7c4d7]" />
                </div>

                {/* Category */}

                <span className="text-xs uppercase tracking-wider text-[#c0c1ff]">
                  {project.category}
                </span>

                {/* Title */}

                <h3 className="text-xl font-semibold mt-3">{project.title}</h3>

                {/* Description */}

                <p className="mt-4 text-sm leading-relaxed text-[#c7c4d7]">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        border
                        border-white/10
                        bg-white/[0.03]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
