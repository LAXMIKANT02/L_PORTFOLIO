import { motion } from "framer-motion";
import {
  FiUser,
  FiMonitor,
  FiServer,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";

import GlassCard from "../../components/ui/GlassCard";

const skills = [
  {
    icon: <FiMonitor />,
    title: "Frontend",
  },
  {
    icon: <FiServer />,
    title: "Backend",
  },
  {
    icon: <FiDatabase />,
    title: "Databases",
  },
  {
    icon: <FiLayers />,
    title: "Full Stack",
  },
];

const stats = [
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "3",
    label: "Internships",
  },
  {
    value: "MERN",
    label: "Stack",
  },
  {
    value: "2022+",
    label: "Journey",
  },
];

function About() {
  return (
    <section id="about" className="py-15 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FiUser className="text-[#c0c1ff]" />

            <span className="uppercase tracking-[0.25em] text-xs text-[#c0c1ff]">
              About Me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Turning Ideas Into
            <span className="text-[#c0c1ff]"> Full Stack Solutions</span>
          </h2>
        </motion.div>

        {/* Main Card */}

        <GlassCard className="p-8 lg:p-10">
          <div className="grid lg:grid-cols-[1.8fr_1fr] gap-10 items-center">
            {/* LEFT SIDE */}

            <div>
              <p className="text-[#c7c4d7] leading-relaxed mb-5 text-lg">
                I'm Laxmikant, a Full Stack Developer passionate about building
                modern, scalable, and user-focused web applications.
              </p>

              <p className="text-[#c7c4d7] leading-relaxed mb-5">
                I enjoy transforming ideas into complete digital products by
                working across the entire development lifecycle—from creating
                responsive user interfaces to designing backend systems, APIs,
                and databases.
              </p>

              <p className="text-[#c7c4d7] leading-relaxed">
                Through internships, hackathons, and projects such as ShopNest
                and AegisAI-X, I have gained hands-on experience building
                production-ready applications using modern web technologies.
              </p>

              {/* Expertise */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.title}
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                    }}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-4
                      transition-all
                    "
                  >
                    <span className="text-[#c0c1ff] text-lg">{skill.icon}</span>

                    <span className="text-sm font-medium">{skill.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-5
                    text-center
                  "
                >
                  <h3 className="text-3xl font-bold text-[#c0c1ff]">
                    {stat.value}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-[#c7c4d7]
                    "
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default About;
