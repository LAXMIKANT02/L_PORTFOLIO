import { useEffect, useRef } from "react";
import gsap from "gsap";

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      gsap.to(glowRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        width: "600px",
        height: "600px",
        left: 0,
        top: 0,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 1,
        background:
          "radial-gradient(circle, rgba(192,193,255,0.08) 0%, transparent 70%)",
      }}
    />
  );
}

export default CursorGlow;
