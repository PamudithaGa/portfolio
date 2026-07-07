import React from "react";
import { ArrowUp, Github, Linkedin, Facebook, Instagram } from "lucide-react";
import MrSIGMA from "../assets/sigma_bg_remove.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a16] text-[#b4b2cc] py-16 border-t border-[rgba(157,140,245,0.15)] min-h-[45dvh] overflow-hidden flex flex-col justify-between font-roboto">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 500px 300px at 50% 100%, rgba(157,140,245,0.06), transparent 80%)",
        }}
      />

      {/* Gigantic ghost watermark background text */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <span className="text-[14vw] font-black text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.02)] tracking-[0.15em] select-none">
          Mr.SIGMA
        </span>
      </div>

      <div className="relative z-10 w-full mx-auto px-[6vw]">
        {/* Main Grid Content */}
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
          {/* About Column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <img src={MrSIGMA} className="w-60 h-30" alt="Mr.SIGMA Logo" />
            </div>
            <p className="text-sm leading-relaxed text-[#b4b2cc] max-w-sm">
              A multi-disciplinary developer and creative strategist crafting
              scalable full-stack applications with contemporary high-end design
              aesthetics.
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-roboto text-sm tracking-[3px] uppercase opacity-90 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#F5CB5C] transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[#222052] group-hover:bg-[#F5CB5C] transition-colors" />
                  About
                </a>
              </li>
              <li>
                <a
                  href="#tech-stack"
                  className="hover:text-[#F5CB5C] transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[#222052] group-hover:bg-[#F5CB5C] transition-colors" />
                  Stack
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#F5CB5C] transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[#222052] group-hover:bg-[#F5CB5C] transition-colors" />
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#F5CB5C] transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[#222052] group-hover:bg-[#F5CB5C] transition-colors" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Brands Column */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-roboto text-sm tracking-[3px] uppercase opacity-90 font-semibold">
              Brands
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#F5CB5C] transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[#222052] group-hover:bg-[#F5CB5C] transition-colors" />
                  Mr.SIGMA Group
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#F5CB5C] transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[#222052] group-hover:bg-[#F5CB5C] transition-colors" />
                  Biththara Malli
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#F5CB5C] transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[#222052] group-hover:bg-[#F5CB5C] transition-colors" />
                  Kolam
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Connect Column */}
          <div className="flex flex-col gap-5 relative">
            <h3 className="text-white font-roboto text-sm tracking-[3px] uppercase opacity-90 font-semibold">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/PamudithaGa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#141830] text-white flex items-center justify-center hover:bg-[#F5CB5C] hover:text-[#0a0a16] transition-all duration-300 hover:scale-110 shadow-lg border border-[rgba(157,140,245,0.1)]"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/pamudithagss/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#141830] text-white flex items-center justify-center hover:bg-[#F5CB5C] hover:text-[#0a0a16] transition-all duration-300 hover:scale-110 shadow-lg border border-[rgba(157,140,245,0.1)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/pamuditha.gangana/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#141830] text-white flex items-center justify-center hover:bg-[#F5CB5C] hover:text-[#0a0a16] transition-all duration-300 hover:scale-110 shadow-lg border border-[rgba(157,140,245,0.1)]"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/pamu_senanayaka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#141830] text-white flex items-center justify-center hover:bg-[#F5CB5C] hover:text-[#0a0a16] transition-all duration-300 hover:scale-110 shadow-lg border border-[rgba(157,140,245,0.1)]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="absolute right-0 top-0 cursor-pointer w-10 h-10 rounded-full bg-[#F5CB5C] text-[#0a0a16] flex items-center justify-center hover:bg-[#f7d375] transition-all duration-300 hover:scale-115 shadow-md"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Separator & Footer Bottom */}
        <div className="border-t border-[rgba(157,140,245,0.1)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-[#8e8ca6]">
            © {currentYear} Pamuditha Senanayaka. All rights reserved.
          </p>
          <p className="text-[#8e8ca6] tracking-wider">
            Designed & Built By{" "}
            <span className="text-white font-bold">Mr.SIGMA</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
