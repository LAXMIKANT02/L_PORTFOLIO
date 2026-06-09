import heroImage from "../../assets/hero.png";
import MorphBlob from "../../components/effects/MorphBlob";
import HeroCanvas from "../../components/effects/HeroCanvas";
import { useMouseParallax } from "../../hooks/useMouseParallax";
import { motion } from "framer-motion";

function Hero() {
  useMouseParallax();

  return (
    <section
      id="hero"
      className="
        min-h-[85vh]
        flex
        items-center
        justify-center
        pt-24
        px-6
        pb-15
        max-w-[1280px]
        mx-auto
        relative
        overflow-hidden
      "
    >
      <HeroCanvas />

      <div
        className="
          grid
          lg:grid-cols-2
          gap-10
          lg:gap-12
          items-center
          w-full
          relative
          z-10
        "
      >
        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content-parallax"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <span
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#c0c1ff]
            "
          >
            FULL-STACK ENGINEER
          </span>

          <h1
            className="
              mt-6
              font-bold
              leading-[0.88]
              tracking-tight
              text-[52px]
              md:text-[68px]
              xl:text-[78px]
            "
          >
            Namaste ji,
            <br />
            <span className="text-[#c0c1ff]">I'm Laxmikant</span>
          </h1>

          <p
            className="
              mt-8
              max-w-lg
              text-[#c7c4d7]
              text-lg
              leading-relaxed
            "
          >
            A passionate developer crafting clean, responsive, and accessible
            web applications that blend precise engineering with immersive
            design performance.
          </p>

          <div className="flex gap-4 mt-10">
            <button
              className="
                px-8
                py-3.5
                rounded-2xl
                font-medium
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(192,193,255,0.35)]
              "
              style={{
                background: "#c0c1ff",
                color: "#1000a9",
              }}
            >
              <a href="#projects">View My Works</a>
            </button>

            <button
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              <a href="#connect">Contact</a>
            </button>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="
            flex
            justify-center
            hero-portrait-parallax
          "
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <div
            className="
              relative
              w-[420px]
              h-[420px]
              lg:w-[520px]
              lg:h-[520px]
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <MorphBlob>
              <img
                src={heroImage}
                alt="Laxmikant"
                className="
                  w-full
                  h-full
                  object-cover
                  object-top
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </MorphBlob>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
