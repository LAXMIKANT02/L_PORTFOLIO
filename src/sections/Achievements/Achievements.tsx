import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import cognifyz from "../../assets/certificates/cognifyz.png";
import skillcraft from "../../assets/certificates/skillcraft.png";
import onestop from "../../assets/certificates/1stop.png";
import paper1 from "../../assets/certificates/paper1.png";
import java from "../../assets/certificates/java.png";
import BPH from "../../assets/certificates/BPH.png";
import gluconet from "../../assets/certificates/gluconet.png";

type CertificateProps = {
  src: string;
  title: string;
  label: string;
  className: string;
  onClick: () => void;
};

function CertificateCard({
  src,
  title,
  label,
  className,
  onClick,
}: CertificateProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        y: -10,
        scale: 1.04,
        rotate: 0,
        zIndex: 50,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`${className} cursor-pointer relative`}
    >
      <div
        className="
          absolute
          top-3
          left-3
          z-10
          px-3
          py-1
          rounded-full
          bg-black/70
          backdrop-blur-xl
          text-[10px]
          uppercase
          tracking-wider
          text-[#c0c1ff]
        "
      >
        {label}
      </div>

      <div
        className="
          absolute
          bottom-3
          left-3
          right-3
          z-20
          px-3
          py-2
          rounded-xl
          bg-black/70
          backdrop-blur-xl
        "
      >
        <p className="text-xs text-white font-medium">{title}</p>
      </div>

      <img
        src={src}
        alt={title}
        className="
          w-full
          h-full
          object-cover
          rounded-2xl
          border
          border-white/10
          shadow-[0_25px_60px_rgba(0,0,0,0.45)]
        "
      />
    </motion.div>
  );
}

function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    src: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section
      id="achievements"
      className="py-24 px-6 relative overflow-hidden isolate"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.25em] text-xs text-[#c0c1ff]">
            Recognition
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Recognitions & <span className="text-[#c0c1ff]">Artifacts</span>
          </h2>

          <p className="text-[#c7c4d7] mt-4 max-w-2xl mx-auto">
            Internships, certifications, publications and milestones throughout
            my learning and professional journey.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { value: "3+", label: "Internships" },
            { value: "6+", label: "Certificates" },
            { value: "2", label: "Publication" },
            { value: "10+", label: "Projects" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
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
              <h3 className="text-3xl font-bold text-[#c0c1ff]">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm text-[#c7c4d7] uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certificate Wall */}

        <div
          className={`
            relative
            mx-auto
            h-[900px]
            max-w-8xl
            overflow-hidden
            transition-all
            duration-300
            ${selectedCertificate ? "blur-md scale-[0.98] pointer-events-none" : ""}
          `}
        >
          <CertificateCard
            src={onestop}
            label="Internship"
            title="1Stop.ai Internship"
            onClick={() =>
              setSelectedCertificate({
                src: onestop,
                title: "1Stop.ai Internship",
              })
            }
            className="
                absolute
                left-[8%]
                top-[20px]
                w-[340px]
                rotate-[-8deg]
                z-10
              "
          />

          <CertificateCard
            src={java}
            label="Course"
            title="Programming in Java"
            onClick={() =>
              setSelectedCertificate({
                src: java,
                title: "Programming in Java",
              })
            }
            className="
              absolute
              left-[37%]
              top-[50px]
              w-[360px]
              rotate-[2deg]
              z-50
            "
          />

          <CertificateCard
            src={paper1}
            label="Publication"
            title="Research Publication"
            onClick={() =>
              setSelectedCertificate({
                src: paper1,
                title: "Research Publication",
              })
            }
            className="
              absolute
              left-[40%]
              top-[-480px]
              w-[340px]
              rotate-[8deg]
              z-10
            "
          />

          <CertificateCard
            src={cognifyz}
            label="Internship"
            title="Cognifyz Technologies"
            onClick={() =>
              setSelectedCertificate({
                src: cognifyz,
                title: "Cognifyz Technologies",
              })
            }
            className="
              absolute
              right-[-70%]
              top-[-650px]
              w-[340px]
              rotate-[5deg]
              z-30
            "
          />

          <CertificateCard
            src={skillcraft}
            label="Certification"
            title="SkillCraft Certificate"
            onClick={() =>
              setSelectedCertificate({
                src: skillcraft,
                title: "SkillCraft Certificate",
              })
            }
            className="
              absolute
              right-[-65%]
              top-[-600px]
              w-[340px]
              rotate-[-8deg]
              z-40
            "
          />

          <CertificateCard
            src={BPH}
            label="paper"
            title=" Internship Certificate"
            onClick={() =>
              setSelectedCertificate({
                src: BPH,
                title: " Internship Certificate",
              })
            }
            className="
              absolute
              left-[8%]
              top-[-1100px]
              w-[360px]
              rotate-[-2deg]
              z-20
            "
          />
          <CertificateCard
            src={gluconet}
            label="paper"
            title="GlucoNet Research Paper"
            onClick={() =>
              setSelectedCertificate({
                src: gluconet,
                title: "GlucoNet Research Paper",
              })
            }
            className="
              absolute
              left-[35%]
              top-[-1250px]
              w-[340px]
              rotate-[5deg]
              z-21
            "
          />
        </div>
      </div>

      {/* LIGHTBOX */}

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="
              absolute
              inset-0
              z-50
              bg-black/50
              flex
              items-center
              justify-center
              p-6
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
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <img
                src={selectedCertificate.src}
                alt={selectedCertificate.title}
                className="
                block
                max-w-[800px]
                max-h-[80vh]
                rounded-3xl
                bg-white
                border
                border-white/10
                shadow-[0_0_120px_rgba(192,193,255,0.35)]
              "
              />

              <div
                className="
                absolute
                bottom-4
                left-4
                right-4
                rounded-xl
                bg-black/70
                backdrop-blur-xl
                px-4
                py-3
              "
              >
                <p className="font-semibold text-white">
                  {selectedCertificate.title}
                </p>
              </div>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="
                absolute
                -top-4
                -right-4
                w-10
                h-10
                rounded-full
                bg-[#c0c1ff]
                text-black
                font-bold
                shadow-lg
              "
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Achievements;
