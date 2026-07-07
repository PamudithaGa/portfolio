import React from "react";
import AboutImg from "../assets/1st.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const AboutMe: React.FC = () => {
  return (
    <div className="flex w-full h-[50vh] justify-center items-center mb-20 gap-32">
      <div className="w-1/3 flex justify-center items-end relative">
        <div className="w-[350px] h-[100px] bg-[#222052] rounded-[100%] absolute -bottom-5 animate-moveLeftRight"></div>
        <div className="w-[350px] h-[100px] border-4 border-[#F5CB5C] rounded-[100%] absolute -bottom-5 animate-moveRightLeft"></div>
        <img
          src={AboutImg}
          alt="About Me"
          className="h-[400px] object-cover z-10 relative mb-5"
        />
      </div>
      <div className="w-2/3 flex flex-col justify-center">
        <h1 className="text-[#222052] text-6xl font-medium mb-8">Who am I?</h1>
        <p className="text-lg text-justify leading-relaxed text-gray-800">
          I am a multi-disciplinary Full-Stack Developer, Systems Architect, and
          Creative Strategist working at the intersection of robust engineering
          and high-end digital branding. <br />
          <br />
          With core expertise in full-stack engineering utilizing the MERN
          Stack, I specialize in designing and deploying clean, scalable
          software architectures. My technical workflow centers on structured
          system design and precise logic implementation, allowing me to
          transform intricate backend requirements into smooth, highly optimized
          user experiences.
          <br />
          <br />
          What sets me apart is my dual focus on technology and brand building.
          I don't just build the infrastructure; I shape the identity. My
          experience spans the entire creative lifecycle—from product
          development and high-end minimalist packaging design to digital media
          production and data-driven marketing execution. By fusing analytical
          system architecture with contemporary visual storytelling, I create
          cohesive digital products that are technically superior and
          commercially compelling.
        </p>
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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
