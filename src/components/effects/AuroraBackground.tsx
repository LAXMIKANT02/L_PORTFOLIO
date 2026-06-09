function AuroraBackground() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(49, 46, 129, 0.25) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(76, 29, 149, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 1) 0%, transparent 100%)
        `,
        filter: "blur(100px)",
        animation: "auroraShift 25s ease-in-out infinite alternate",
      }}
    />
  );
}

export default AuroraBackground;
