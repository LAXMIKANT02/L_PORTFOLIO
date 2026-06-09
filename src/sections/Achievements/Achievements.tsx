import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import cognifyz from "../../assets/certificates/cognifyz.png";
import skillcraft from "../../assets/certificates/skillcraft.png";
import onestop from "../../assets/certificates/1stop.png";
import paper1 from "../../assets/certificates/paper1.png";

type CertificateProps = {
  src: string;
  className: string;
  onClick: () => void;
};

function CertificateCard({ src, className, onClick }: CertificateProps) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.05,
        rotate: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`${className} cursor-pointer`}
      onClick={onClick}
    >
      <img
        src={src}
        alt="certificate"
        className="
          w-full
          h-full
          object-cover
          rounded-2xl
          border
          border-white/10
          shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        "
      />
    </motion.div>
  );
}

function Achievements() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.25em] text-xs text-[#c0c1ff]">
            Recognition
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Recognitions & Artifacts
          </h2>
        </div>

        {/* Gallery Container */}

        <div
          className="
            relative
            mx-auto
            h-[900px]
            max-w-6xl
          "
        >
          {/* Background Certificates */}

          <div
            className={`
              absolute inset-0
              transition-all duration-500
              ${
                selectedImage
                  ? "blur-md opacity-20 scale-95"
                  : "blur-0 opacity-100 scale-100"
              }
            `}
          >
            <CertificateCard
              src={onestop}
              onClick={() => setSelectedImage(onestop)}
              className="
                absolute
                left-[5%]
                top-[0]
                w-[300px]
                rotate-[-8deg]
              "
            />

            <CertificateCard
              src={skillcraft}
              onClick={() => setSelectedImage(skillcraft)}
              className="
                absolute
                left-[28%]
                top-[130px]
                w-[340px]
                rotate-[3deg]
                z-20
              "
            />

            <CertificateCard
              src={paper1}
              onClick={() => setSelectedImage(paper1)}
              className="
                absolute
                right-[3%]
                top-[20px]
                w-[320px]
                rotate-[6deg]
              "
            />

            <CertificateCard
              src={cognifyz}
              onClick={() => setSelectedImage(cognifyz)}
              className="
                absolute
                left-[48%]
                top-[300px]
                w-[320px]
                rotate-[-4deg]
              "
            />

            <CertificateCard
              src={skillcraft}
              onClick={() => setSelectedImage(skillcraft)}
              className="
                absolute
                left-[0%]
                top-[380px]
                w-[280px]
                rotate-[8deg]
              "
            />

            <CertificateCard
              src={onestop}
              onClick={() => setSelectedImage(onestop)}
              className="
                absolute
                left-[30%]
                top-[620px]
                w-[300px]
                rotate-[-3deg]
              "
            />

            <CertificateCard
              src={paper1}
              onClick={() => setSelectedImage(paper1)}
              className="
                absolute
                right-[0%]
                top-[330px]
                w-[280px]
                rotate-[2deg]
              "
            />
          </div>

          {/* Enlarged Certificate */}

          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  z-50
                "
              >
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="certificate"
                    className="
                      max-h-[700px]
                      max-w-[900px]
                      rounded-2xl
                      border
                      border-white/20
                      shadow-[0_0_80px_rgba(192,193,255,0.35)]
                    "
                  />

                  <button
                    onClick={() => setSelectedImage(null)}
                    className="
                      absolute
                      -top-5
                      -right-5
                      w-12
                      h-12
                      rounded-full
                      bg-[#c0c1ff]
                      text-black
                      font-bold
                      text-xl
                      shadow-lg
                    "
                  >
                    ×
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
