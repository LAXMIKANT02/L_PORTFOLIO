function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-2xl
      border-b
    "
      style={{
        background: "rgba(14,14,14,0.2)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <nav
        className="
        max-w-[1200px]
        mx-auto
        px-6
        h-16
        flex
        items-center
        justify-between
        "
      >
        <div
          className="
          text-white
          font-bold
          tracking-tight
          text-xl
          "
        >
          LAXMIKANT.DEV
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#projects">Projects</a>
          <a href="#education">Journey</a>
          <a href="#stack">Stack</a>
          <a href="#connect">Contact</a>

          <button
            className="
            px-6
            py-2
            rounded-xl
            font-medium
            "
            style={{
              background: "#c0c1ff",
              color: "#1000a9",
            }}
          >
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
