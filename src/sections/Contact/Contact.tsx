import { motion } from "framer-motion";
import resume from "../../assets/L_Resume.pdf";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiInstagram,
  FiDownload,
} from "react-icons/fi";

function Contact() {
  return (
    <section id="connect" className="relative py-12 px-6 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7c6dff]/10 blur-[180px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
            md:p-14
          "
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mt-0">
              Let's Work Together
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-[#c7c4d7] leading-relaxed">
              Open to Full Stack Development, Cloud & DevOps and Software
              Engineering opportunities. My inbox is always open for exciting
              collaborations.
            </p>
          </div>

          {/* CTA Buttons */}

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <a
              href="mailto:laxmikantdadagi@gmail.com"
              className="
                inline-flex
                items-center
                gap-5
                px-8
                py-4
                rounded-xl
                font-medium
                bg-[#c0c1ff]
                text-[#1000a9]
                hover:scale-105
                transition-all
              "
            >
              <FiMail />
              Contact Me
              <FiArrowRight />
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              download="Resume_Laxmikant_S"
              className="
                inline-flex
                items-center
                gap-5
                px-8
                py-4
                rounded-xl
                border
                border-white/10
                hover:border-[#c0c1ff]
                transition-all
              "
            >
              <FiDownload />
              Download Resume
            </a>
          </div>

          {/* Social Icons */}

          <div className="flex justify-center gap-5 mt-10">
            <a
              href="https://github.com/LAXMIKANT02"
              target="_blank"
              rel="noreferrer"
              className="
                w-15
                h-15
                rounded-xl
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-[#c0c1ff]
                hover:-translate-y-1
                transition-all
              "
            >
              <FiGithub />
            </a>

            <a
              href="https://linkedin.com/in/laxmikant-s-b559b332a"
              target="_blank"
              rel="noreferrer"
              className="
                w-15
                h-15
                rounded-xl
                h-12
                rounded-xl
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-[#c0c1ff]
                hover:-translate-y-1
                transition-all
              "
            >
              <FiLinkedin />
            </a>

            <a
              href="https://instagram.com/dadagi_huduga_02"
              target="_blank"
              rel="noreferrer"
              className="
                w-15
                h-15
                rounded-xl
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-[#c0c1ff]
                hover:-translate-y-1
                transition-all
              "
            >
              <FiInstagram />
            </a>

            <a
              href="mailto:laxmikantdadagi@gmail.com"
              className="
                w-15
                h-15
                rounded-xl
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-[#c0c1ff]
                hover:-translate-y-1
                transition-all
              "
            >
              <FiMail />
            </a>
          </div>

          {/* Footer */}

          <div className="mt-10 pt-4 border-t border-white/10 text-center text-sm text-[#9a96b5]">
            Designed & Developed by Laxmikant S.
            <br />
            Built with React, TypeScript, Tailwind CSS & Framer Motion.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
