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
            p-6
            sm:p-8
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

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
            <a
              href="mailto:laxmikantdadagi@gmail.com"
              className="
                 w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-3
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
              download="Laxmikant_S_Resume.pdf"
              className="
                 w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-3
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

          <div
            className="
              grid
              grid-cols-2
              gap-4
              mt-10
              max-w-[140px]
              mx-auto
              sm:flex
              sm:justify-center
              sm:gap-5
              sm:max-w-none
            "
          >
            <a
              href="https://github.com/LAXMIKANT02"
              target="_blank"
              rel="noreferrer"
              className="
                w-12
                h-12
                sm:w-14
                sm:h-14
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
                w-12
                h-12
                sm:w-14
                sm:h-14
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
                w-12
                h-12
                sm:w-14
                sm:h-14
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
                w-12
                h-12
                sm:w-14
                sm:h-14
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
            Built with React, Tailwind CSS, and a passion for software
            engineering.
            <br /> I hope you enjoyed exploring it as much as I enjoyed creating
            it!
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
