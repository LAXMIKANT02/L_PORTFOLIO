import { useRef } from "react";
import { usePhysicsEngine } from "./usePhysicsEngine";

function EcosystemCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  usePhysicsEngine(canvasRef);

  return (
    <div
      className="
        relative
        w-full
        h-[500px]
        rounded-[40px]
        overflow-hidden
        border
        border-white/10
        backdrop-blur-xl
      "
      style={{
        background: `
          radial-gradient(
            circle at center,
            rgba(192,193,255,0.07),
            rgba(255,255,255,0.01)
          )
        `,
      }}
    >
      {/* BACKGROUND TYPOGRAPHY */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
          select-none
        "
      ></div>

      {/* CENTER GLOW */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(192,193,255,0.08), transparent 70%)",
        }}
      />

      {/* CANVAS */}

      <canvas
        ref={canvasRef}
        className="
          absolute
          inset-0
          w-full
          h-full
        "
      />

      {/* TOP EDGE LIGHT */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-px
        "
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(192,193,255,0.5), transparent)",
        }}
      />
    </div>
  );
}

export default EcosystemCanvas;
