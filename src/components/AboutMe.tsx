import React from "react";
import AboutImg from "../assets/1st.png";
import BiththaraMalli from "../assets/biththara_malli.png";
import Kolam from "../assets/kolam2.png";
import SM from "../assets/sm_travels.png";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="flex w-full h-[100dvh] justify-center items-center gap-32">
        <div className="w-1/3 flex justify-center items-end relative">
          <div className="w-[350px] h-[90px] bg-[#222052] rounded-[100%] absolute -bottom-5 animate-moveLeftRight"></div>
          <div className="w-[350px] h-[90px] border-4 border-[#F5CB5C] rounded-[100%] absolute -bottom-5 animate-moveRightLeft"></div>
          <img
            src={AboutImg}
            alt="About Me"
            className="h-[390px] object-cover z-10 relative mb-5"
          />
        </div>
        <div className="w-2/3 flex flex-col justify-center">
          <h1 className="text-[#222052] text-6xl font- mb-8">Who am I?</h1>
          <p className="text-md text-justify leading-relaxed text-gray-800">
            I am a multi-disciplinary Full-Stack Developer, Systems Architect,
            and Creative Strategist working at the intersection of robust
            engineering and high-end digital branding. <br />
            <br />
            With core expertise in full-stack engineering utilizing the MERN
            Stack, I specialize in designing and deploying clean, scalable
            software architectures. My technical workflow centers on structured
            system design and precise logic implementation, allowing me to
            transform intricate backend requirements into smooth, highly
            optimized user experiences.
            <br />
            <br />
            What sets me apart is my dual focus on technology and brand
            building. I don't just build the infrastructure; I shape the
            identity. My experience spans the entire creative lifecycle from
            product development and high-end minimalist packaging design to
            digital media production and data-driven marketing execution. By
            fusing analytical system architecture with contemporary visual
            storytelling, I create cohesive digital products that are
            technically superior and commercially compelling.
          </p>

          <div className="mt-8">
            <h3 className="text-xs font-mono tracking-[4px] text-[#222052]/60 uppercase mb-4 before:content-['//_'] before:text-[#F5CB5C] before:font-bold">
              My Venture from Mr. SIGMA Group of Companies
            </h3>
            <div className="grid grid-cols-3 gap-5">
              {/* <div className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/20 hover:bg-white/40 border border-[#222052]/10 hover:border-[#F5CB5C]/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_10px_35px_-5px_rgba(34,32,82,0.1)] hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/60 p-1 flex items-center justify-center border border-[#222052]/5 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={Sigma}
                    alt="Sigma"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#222052] text-base leading-tight">
                    Mr.SIGMA Group
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                    {" "}
                    Invesment & Enterprenership
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#F5CB5C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div> */}

              <div className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/20 hover:bg-white/40 border border-[#222052]/10 hover:border-[#F5CB5C]/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_10px_35px_-5px_rgba(34,32,82,0.1)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/60 p-1 flex items-center justify-center border border-[#222052]/5 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={BiththaraMalli}
                    alt="Biththara Malli"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#222052] text-base leading-tight">
                    Biththara Malli
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                    Food & Beverage
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#F5CB5C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/20 hover:bg-white/40 border border-[#222052]/10 hover:border-[#F5CB5C]/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_10px_35px_-5px_rgba(34,32,82,0.1)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/60 p-1 flex items-center justify-center border border-[#222052]/5 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={SM}
                    alt="SM"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#222052] text-base leading-tight">
                    SM Travels
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                    Travel & Tourism
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#F5CB5C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/20 hover:bg-white/40 border border-[#222052]/10 hover:border-[#F5CB5C]/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_10px_35px_-5px_rgba(34,32,82,0.1)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/60 p-1 flex items-center justify-center border border-[#222052]/5 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={Kolam}
                    alt="Kolam"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#222052] text-base leading-tight">
                    Kolam
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                    Creative Brand
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#F5CB5C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/pamuditha.gangana/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#222052] text-white flex items-center justify-center hover:bg-[#F5CB5C] hover:text-[#222052] transition-all hover:scale-110 shadow-sm"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/pamu_senanayaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#222052] text-white flex items-center justify-center hover:bg-[#F5CB5C] hover:text-[#222052] transition-all hover:scale-110 shadow-sm"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/pamudithagss/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#222052] text-white flex items-center justify-center hover:bg-[#F5CB5C] hover:text-[#222052] transition-all hover:scale-110 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/PamudithaGa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#222052] text-white flex items-center justify-center hover:bg-[#F5CB5C] hover:text-[#222052] transition-all hover:scale-110 shadow-sm"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
