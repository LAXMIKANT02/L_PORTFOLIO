import { motion } from "framer-motion";

interface Props {
  title: string;
  institution: string;
  duration: string;
  description: string;
  image: string;
  current: boolean;
}

function EducationCard({
  title,
  institution,
  duration,
  description,
  image,
  current,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex items-center gap-6"
    >
      {/* Logo */}

      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        className="relative shrink-0"
      >
        <div
          className="
            absolute
            inset-0
            rounded-full
            blur-3xl
            opacity-40
          "
          style={{
            background:
              "radial-gradient(circle, rgba(192,193,255,.25), transparent 70%)",
          }}
        />

        <div
          className="
            relative
            w-[130px]
            h-[130px]
            rounded-full
            overflow-hidden
            border-2
            border-[#c0c1ff]/20
            bg-white
          "
        >
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-full
              object-contain
              p-4
            "
          />
        </div>
      </motion.div>

      {/* Content */}

      <div className="flex-1">
        {current && (
          <div
            className="
              inline-flex
              items-center
              gap-2
              mb-4
              px-4
              py-2
              rounded-full
              border
              border-[#c0c1ff]/30
              bg-[#c0c1ff]/10
            "
          >
            <span className="w-2 h-2 rounded-full bg-[#c0c1ff] animate-pulse" />

            <span className="text-xs uppercase tracking-wider text-[#c0c1ff]">
              Current
            </span>
          </div>
        )}

        <p className="text-[#c0c1ff] text-xs tracking-[0.25em] uppercase mb-2">
          {duration}
        </p>

        <h3 className="text-[2rem] font-bold">{title}</h3>

        <p className="mt-2 text-[#c0c1ff] font-medium">{institution}</p>

        <p className="mt-4 text-[#9ca3af] max-w-xl leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default EducationCard;
