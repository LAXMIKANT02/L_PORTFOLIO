import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Props {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  highlights: string[];
  status: string;
  year: string;
  github?: string;
  showcase: string;
}

function ProjectCard({
  title,
  category,
  description,
  image,
  tech,
  highlights,
  status,
  year,
  github,
  showcase,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        hover:border-[#c0c1ff]/20
        hover:shadow-[0_0_60px_rgba(192,193,255,0.12)]
        transition-all
      "
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-[450px]
            object-fit
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#0b1020]
            via-transparent
            to-transparent
          "
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center">
          <span className="text-xs uppercase tracking-wider text-[#c0c1ff]">
            {category}
          </span>

          <span
            className="
              text-[10px]
              px-3
              py-1
              rounded-full
              bg-emerald-500/10
              text-emerald-400
            "
          >
            {status}
          </span>
        </div>

        <h3 className="text-2xl font-bold mt-3">{title}</h3>

        <p className="text-[#9ca3af] text-sm mt-1">{year}</p>

        <p className="mt-4 text-[#c7c4d7] leading-relaxed text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {highlights.map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                border
                border-[#c0c1ff]/15
              "
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {tech.map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                bg-white/[0.03]
                border
                border-white/10
              "
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-xl
                    border border-white/10
                    hover:border-[#c0c1ff]/20
                    hover:bg-white/[0.03]
                    transition-all
                "
            >
              <FiGithub />
              GitHub
            </a>
          )}

          <a
            href={showcase}
            target="_blank"
            rel="noreferrer"
            className="
                flex items-center gap-2
                px-4 py-2
                rounded-xl
                bg-[#c0c1ff]
                text-black
                font-medium
                hover:scale-[1.03]
                transition-all
                "
          >
            <FiExternalLink />
            Showcase
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
