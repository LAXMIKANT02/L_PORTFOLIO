import { useEffect, useRef } from "react";
import type { TechNode } from "./types";

const TECHS = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#68A063" },
  { name: "MongoDB", color: "#13AA52" },
  { name: "Python", color: "#3776AB" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "TailwindCSS", color: "#06B6D4" },
  { name: "Express", color: "#808080" },
];

const SIZES: Record<string, number> = {
  Laravel: 58,
  MongoDB: 52,
  React: 48,
  "Node.js": 44,
  Python: 40,
  TailwindCSS: 36,
  TypeScript: 32,
  Express: 28,
};

function lightenColor(color: string, amount: number) {
  const num = parseInt(color.slice(1), 16);

  const r = Math.min(255, (num >> 16) + amount);
  const g = Math.min(255, ((num >> 8) & 255) + amount);
  const b = Math.min(255, (num & 255) + amount);

  return `rgb(${r},${g},${b})`;
}

function darkenColor(color: string, amount: number) {
  const num = parseInt(color.slice(1), 16);

  const r = Math.max(0, (num >> 16) - amount);
  const g = Math.max(0, ((num >> 8) & 255) - amount);
  const b = Math.max(0, (num & 255) - amount);

  return `rgb(${r},${g},${b})`;
}

export function usePhysicsEngine(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
) {
  const nodesRef = useRef<TechNode[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    nodesRef.current = TECHS.map((tech, index) => ({
      id: index,
      name: tech.name,
      color: tech.color,

      x: Math.random() * (canvas.width - 300) + 150,
      y: Math.random() * (canvas.height - 250) + 125,

      vx: (Math.random() - 0.5) * 1.4,
      vy: (Math.random() - 0.5) * 1.4,

      radius: SIZES[tech.name],

      scale: 1,
      phase: Math.random() * Math.PI * 2,

      depth: 0.8 + Math.random() * 0.5,

      squash: 0,
    }));

    let animationId = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const time = performance.now() * 0.001;

      // MOVEMENT

      nodes.forEach((node) => {
        node.x += node.vx * node.depth;
        node.y += node.vy * node.depth;

        if (node.x <= node.radius || node.x >= canvas.width - node.radius) {
          node.vx *= -1;
        }

        if (node.y <= node.radius || node.y >= canvas.height - node.radius) {
          node.vy *= -1;
        }

        node.scale = 1 + Math.sin(time + node.phase) * 0.025;

        node.squash *= 0.92;
      });

      // COLLISIONS

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = b.x - a.x;
          const dy = b.y - a.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          const minDistance = a.radius + b.radius;

          if (distance < minDistance && distance > 0) {
            const overlap = minDistance - distance;

            const nx = dx / distance;
            const ny = dy / distance;

            a.x -= nx * overlap * 0.5;
            a.y -= ny * overlap * 0.5;

            b.x += nx * overlap * 0.5;
            b.y += ny * overlap * 0.5;

            const tempVx = a.vx;
            const tempVy = a.vy;

            a.vx = b.vx;
            a.vy = b.vy;

            b.vx = tempVx;
            b.vy = tempVy;

            a.squash = 0.15;
            b.squash = 0.15;
          }
        }
      }

      // CONNECTIONS + DATA PULSES

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = b.x - a.x;
          const dy = b.y - a.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 260) {
            const opacity = 1 - distance / 260;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle = `rgba(192,193,255,${opacity * 0.18})`;

            ctx.lineWidth = 1;

            ctx.stroke();

            const pulse = (time * 0.25 + i * 0.2 + j * 0.1) % 1;

            const px = a.x + (b.x - a.x) * pulse;

            const py = a.y + (b.y - a.y) * pulse;

            ctx.beginPath();

            ctx.fillStyle = "rgba(192,193,255,0.95)";

            ctx.arc(px, py, 2.2, 0, Math.PI * 2);

            ctx.fill();
          }
        }
      }

      // DRAW BALLS

      nodes.forEach((node) => {
        const radius = node.radius * node.scale * node.depth;

        ctx.save();

        ctx.translate(node.x, node.y);

        ctx.scale(1 + node.squash, 1 - node.squash);

        ctx.translate(-node.x, -node.y);

        // OUTER GLOW

        const glow = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          radius * 2.5,
        );

        glow.addColorStop(0, `${node.color}33`);

        glow.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(node.x, node.y, radius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // BALL

        const gradient = ctx.createRadialGradient(
          node.x - radius * 0.3,
          node.y - radius * 0.3,
          radius * 0.1,
          node.x,
          node.y,
          radius,
        );

        gradient.addColorStop(0, lightenColor(node.color, 55));

        gradient.addColorStop(0.55, node.color);

        gradient.addColorStop(1, darkenColor(node.color, 35));

        ctx.beginPath();
        ctx.fillStyle = gradient;

        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);

        ctx.fill();

        // HIGHLIGHT

        ctx.beginPath();

        ctx.fillStyle = "rgba(255,255,255,0.22)";

        ctx.arc(
          node.x - radius * 0.28,
          node.y - radius * 0.28,
          radius * 0.16,
          0,
          Math.PI * 2,
        );

        ctx.fill();

        // LABEL

        const fontSize = Math.max(12, radius * 0.24);

        ctx.font = `500 ${fontSize}px Geist`;

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // soft glow for readability

        ctx.shadowColor = "rgba(255,255,255,0.35)";
        ctx.shadowBlur = 12;

        ctx.fillStyle = "#f8fafc";

        ctx.fillText(node.name, node.x, node.y);

        // reset shadow

        ctx.shadowBlur = 0;

        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);

      cancelAnimationFrame(animationId);
    };
  }, [canvasRef]);
}
