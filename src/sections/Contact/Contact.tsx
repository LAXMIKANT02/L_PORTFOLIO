import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";

function Contact() {
  return (
    <section id="connect" className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
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
            duration: 0.7,
          }}
        >
          <div
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-10
              md:p-14
            "
          >
            <div className="text-center">
              <span className="uppercase tracking-[0.25em] text-xs text-[#c0c1ff]">
                Get In Touch
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Let's Work Together
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-[#c7c4d7] leading-relaxed">
                Open to internships, software engineering opportunities, cloud
                projects, cybersecurity collaborations and innovative product
                development.
              </p>

              {/* CTA */}

              <div className="mt-10">
                <a
                  href="mailto:your-email@example.com"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    px-8
                    py-4
                    rounded-xl
                    font-medium
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                  style={{
                    background: "#c0c1ff",
                    color: "#1000a9",
                  }}
                >
                  <FiMail />
                  Send Email
                  <FiArrowRight />
                </a>
              </div>

              {/* Socials */}

              <div className="flex justify-center gap-4 mt-10">
                <a
                  href="#"
                  className="
                    w-12
                    h-12
                    rounded-xl
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    hover:border-[#c0c1ff]
                    transition-all
                  "
                >
                  <FiGithub />
                </a>

                <a
                  href="#"
                  className="
                    w-12
                    h-12
                    rounded-xl
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    hover:border-[#c0c1ff]
                    transition-all
                  "
                >
                  <FiLinkedin />
                </a>

                <a
                  href="mailto:your-email@example.com"
                  className="
                    w-12
                    h-12
                    rounded-xl
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    hover:border-[#c0c1ff]
                    transition-all
                  "
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
