import resume from "../../assets/L_Resume.pdf";
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
        background: "rgba(60, 55, 55, 0.2)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <nav
        className="
        max-w-[1400px]
        mx-auto
        px-2
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
          LAXMIKANT S
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#education">Journey</a>
          <a href="#projects">Projects</a>
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
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              /*download="Resume_Laxmikant_S"*/
            >
              Resume
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
