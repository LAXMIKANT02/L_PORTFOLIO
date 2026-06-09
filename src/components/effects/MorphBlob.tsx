function MorphBlob({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-[-60px] morph-blob-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(192,193,255,0.22), transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="absolute inset-0 morph-border" />

      <div className="absolute inset-[8px] morph-image">{children}</div>
    </div>
  );
}

export default MorphBlob;
