import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import cognifyz from "../../assets/certificates/cognifyz.png";
import skillcraft from "../../assets/certificates/skillcraft.png";
import onestop from "../../assets/certificates/1stop.png";
import paper1 from "../../assets/certificates/paper1.png";
import java from "../../assets/certificates/java.png";
import BPH from "../../assets/certificates/BPH.png";
import gluconet from "../../assets/certificates/gluconet.png";

const certificates = [
  {
    src: java,
    title: "Programming in Java",
    type: "Course",
  },
  {
    src: paper1,
    title: "Research Publication",
    type: "Publication",
  },
  {
    src: gluconet,
    title: "GlucoNet Research Paper",
    type: "Publication",
  },
  {
    src: cognifyz,
    title: "Cognifyz Technologies",
    type: "Internship",
  },
  {
    src: onestop,
    title: "Full Stack Internship",
    type: "Internship",
  },
  {
    src: skillcraft,
    title: "SkillCraft Technologies",
    type: "Internship",
  },
  {
    src: BPH,
    title: "MERN Stack Internship",
    type: "Internship",
  },
];

export default function Achievements() {
  const [selected, setSelected] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const [shuffled] = useState(() =>
    [...certificates].sort(() => Math.random() - 0.5),
  );

  return (
    <section
      id="achievements"
      className="relative py-20 px-4 md:px-6 overflow-hidden"
    >
      {/* BLURRED CONTENT ONLY */}
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          selected ? "blur-md scale-[0.98]" : ""
        }`}
      >
        {/* HEADING */}

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Recognitions & <span className="text-[#c0c1ff]">Artifacts</span>
          </h2>

          <p className="text-[#c7c4d7] mt-4 max-w-3xl mx-auto">
            Internships, certifications, publications and achievements
            throughout my learning journey.
          </p>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {[
            { value: "3+", label: "Internships" },
            { value: "6+", label: "Certificates" },
            { value: "2", label: "Publications" },
            { value: "10+", label: "Projects" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -8 }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-6
                text-center
              "
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#c0c1ff]">
                {item.value}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-wider text-[#c7c4d7]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CERTIFICATE ROW */}

        <div className="overflow-hidden">
          <div className="marquee flex gap-6">
            {[...shuffled, ...shuffled].map((certificate, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                onClick={() =>
                  setSelected({
                    src: certificate.src,
                    title: certificate.title,
                  })
                }
                className="
                  min-w-[220px]
                  md:min-w-[280px]
                  cursor-pointer
                  rounded-2xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                "
              >
                <div className="relative">
                  <img
                    src={certificate.src}
                    alt={certificate.title}
                    className="
                      w-full
                      h-[160px]
                      md:h-[190px]
                      object-cover
                    "
                  />

                  <div
                    className="
                      absolute
                      top-3
                      left-3
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      bg-black/70
                      text-[#c0c1ff]
                    "
                  >
                    {certificate.type}
                  </div>

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-3
                      bg-gradient-to-t
                      from-black
                      to-transparent
                    "
                  >
                    <p className="text-sm text-white font-medium">
                      {certificate.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SHARP MODAL */}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="
              absolute
              inset-0
              z-[999]
              bg-black/60
              flex
              items-center
              justify-center
              p-4
            "
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <img
                src={selected.src}
                alt={selected.title}
                className="
                  max-w-[90vw]
                  max-h-[500px]
                  object-contain
                  rounded-3xl
                  bg-white
                  p-2
                "
              />

              <button aria-label="Close certificate preview">
                <FiX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
