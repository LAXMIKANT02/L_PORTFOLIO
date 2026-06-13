import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import resume from "../../assets/L_Resume.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          px-4
          h-16
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <a
          href="#hero"
          className="
            text-white
            font-bold
            tracking-tight
            text-xl
          "
        >
          LAXMIKANT S
        </a>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8">
          <a href="#about">About</a>

          <a href="#stack">Stack</a>

          <a href="#education">Journey</a>

          <a href="#projects">Projects</a>

          <a href="#connect">Contact</a>

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
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
          </a>
        </div>

        {/* Mobile Menu Button */}

        <button
          className="
            md:hidden
            text-white
            text-2xl
          "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Navigation */}

      {isOpen && (
        <div
          className="
            md:hidden
            flex
            flex-col
            gap-5
            px-6
            py-6
            border-t
            border-white/10
            backdrop-blur-xl
          "
          style={{
            background: "rgba(15,23,42,0.95)",
          }}
        >
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>

          <a href="#stack" onClick={() => setIsOpen(false)}>
            Stack
          </a>

          <a href="#education" onClick={() => setIsOpen(false)}>
            Journey
          </a>

          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>

          <a href="#connect" onClick={() => setIsOpen(false)}>
            Contact
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="
              px-6
              py-3
              rounded-xl
              text-center
              font-medium
            "
            style={{
              background: "#c0c1ff",
              color: "#1000a9",
            }}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
