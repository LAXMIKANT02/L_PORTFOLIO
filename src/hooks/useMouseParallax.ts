import { useEffect } from "react";
import gsap from "gsap";

export function useMouseParallax() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const relX = (e.clientX - centerX) / centerX;
      const relY = (e.clientY - centerY) / centerY;

      gsap.to(".hero-portrait-parallax", {
        x: relX * 40,
        y: relY * 40,
        rotateY: relX * 10,
        rotateX: -relY * 10,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.to(".hero-content-parallax", {
        x: relX * 15,
        y: relY * 15,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);
}
