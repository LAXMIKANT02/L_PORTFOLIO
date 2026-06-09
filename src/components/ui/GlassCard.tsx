import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -5,
              scale: 1.01,
            }
          : {}
      }
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        backdrop-blur-xl
        bg-white/[0.03]
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        ${className}
      `}
    >
      {/* top glow */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
        "
      />

      {/* inner glow */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.04]
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default GlassCard;
