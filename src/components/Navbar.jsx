import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          
          <a
            href="#hero"
            className="text-xl md:text-2xl font-bold text-cyan-400"
          >
            {portfolioData.personal.displayName}
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition duration-300"
              >
                {link.name}
              </a>
            ))}

            <a
href="/Navya-Resume.pdf"
download
              className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition duration-300"
            >
              Resume
            </a>
          </div>

          <button
            className="lg:hidden text-cyan-400 text-3xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            ))}

            <a
             href="/Navya-Resume.pdf"
download
              className="w-fit px-5 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;