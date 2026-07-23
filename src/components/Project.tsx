import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Handshake } from "lucide-react";
import regencyImg from "../assets/regency.png";
import ehelepola from "../assets/ehelepola2.png";
import Lavia from "../assets/CafeLavia.png";
import RobotCanvas from "./RobotCanvas";
interface Project {
  client: string;
  title: string;
  description: string;
  challenges: string[];
  tags: string[];
  image: string;
  link?: string;
  collaboration?: string;
}

const projects: Project[] = [
  {
    client: "Ehelepola Walawwa",
    title: "Heritage Website Design",
    description:
      "Ehelepola Walawwa is a heritage homestay located in Kandy, Sri Lanka. It offers a unique blend of traditional Sri Lankan architecture and modern amenities, providing guests with an unforgettable stay.",
    challenges: [
      "Digitalizing a complex historical narrative into a seamless virtual environment.",
      "A seamless digital experience across Wax Museum exhibits, shopping, and dining.",
      "Lag-free, high-performance visual display for hyper-realistic wax figures and architecture.",
      "Balancing historical accuracy with modern UI for researchers and tourists.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "MySQL", "Node.js"],
    image: ehelepola,
    link: "https://www.ehelepolawalawwa.lk",
    collaboration: "AIOH",
  },
  {
    client: "Regency Travel House",
    title: "Travel Agency Website Design",
    description:
      "Built a custom travel packages platform that lets visitors browse curated destinations and accommodations, with a clean booking flow designed to convert casual browsers into confirmed bookings.",
    challenges: [
      "Presenting rich destination content without overwhelming the page",
      "Designing a booking flow that feels effortless on mobile",
      "Keeping load times fast despite heavy imagery",
      "Giving the client an easy way to update packages themselves",
    ],
    tags: ["React", "Tailwind CSS", "Node.js"],
    image: regencyImg,
    link: "https://regency.knowmo.me",
    collaboration: "AIOH",
  },
  {
    client: "Cafe Lavia",
    title: "Cafe Website Design",
    description:
      "Cafe Lavia is a cafe located in Kandy, Sri Lanka. It offers a unique blend of traditional Sri Lankan architecture and modern amenities, providing guests with an unforgettable stay.",
    challenges: [
      "Enhancing visual storytelling to capture Cafe Lavia’s authentic atmosphere",
      "Creating an intuitive interface for browsing the menu and discovering daily specials",
      "Ensuring high-quality image and video display across all devices",
      "Developing a flexible system for updates and seasonal promotions",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: Lavia,
    link: "https://www.cafelavia.net/",
    collaboration: "AIOH",
  },
];

export default function ProjectShowcase(): React.ReactElement {
  const [index, setIndex] = useState<number>(0);
  const project = projects[index];

  const goPrev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <section
      className="relative overflow-hidden px-[6vw]  h-[95dvh] rounded-2xl "
      style={{ backgroundColor: "#0a0a16" }}
    >
      {/* ambient glow, consistent with other sections */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 700px 500px at 90% 10%, rgba(157,140,245,0.08), transparent 60%), radial-gradient(ellipse 600px 500px at 5% 95%, rgba(242,193,78,0.05), transparent 60%)",
        }}
      />

      <div className="relative z-[2] mx-auto w-[1280px]">
        {/* heading */}
        <div className="mb-14 flex items-end justify-between">
          <div className="font-mono text-[13px] tracking-[4px] text-[#f2c14e]">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </div>
          <h2 className="font-[Poppins] text-[clamp(36px,4vw,56px)] font-extrabold text-[#f2f1f8]">
            What I did
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-8 h-[70dvh]">
          <div className="col-span-3 relative w-full overflow-hidden rounded-[20px] border border-[rgba(157,140,245,0.18)] bg-gradient-to-br from-[#0d1226] to-[#0a0a16] p-10">
            <div className="grid grid-cols-2 gap-8">
              {/* text content */}
              <div>
                <h3 className="mb-1 font-[Poppins] text-[28px] font-bold text-[#f2f1f8]">
                  {project.title}
                </h3>
                <div className="flex items-center flex-wrap gap-2.5 mb-5">
                  <p className="text-sm font-medium text-[#9d8cf5]">
                    - {project.client}
                  </p>
                  {project.collaboration && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[rgba(97,176,240,0.1)] border border-[rgba(97,176,240,0.3)] text-[#61b0f0] backdrop-blur-sm">
                      <Handshake size={12} />
                      Collab with {project.collaboration}
                    </span>
                  )}
                </div>

                <p className="mb-7 max-w-[480px] text-[15px] leading-[1.75] text-[#b4b2cc]">
                  {project.description}
                </p>

                <h4 className="mb-3 font-[Poppins] text-lg font-semibold text-[#f2f1f8]">
                  Challenges, we solved
                </h4>
                <ul className="mb-8 space-y-2.5">
                  {project.challenges.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-[14.5px] leading-snug text-[#c9c6ec]"
                    >
                      <span className="mt-[7px] h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#61b0f0]" />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-8 left-8 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f2c14e] px-5 py-2 text-sm font-semibold text-[#0a0a16]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.collaboration && (
                    <span className="rounded-full bg-gradient-to-r from-[#9d8cf5] to-[#61b0f0] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_15px_rgba(157,140,245,0.25)] flex items-center gap-1.5">
                      <Handshake size={14} />
                      Collaboration
                    </span>
                  )}
                </div>
              </div>

              {/* mockup preview, layered/stacked for depth */}
              <div className="relative  min-h-[260px]">
                <div className="absolute right-2 top-6 h-[190px] w-[360px] rotate-3 rounded-xl border border-[rgba(157,140,245,0.2)] bg-[#1a1f3a]" />
                <div className="absolute right-6 top-3 h-[190px] w-[360px] -rotate-2 rounded-xl border border-[rgba(157,140,245,0.25)] bg-[#141830]" />
                <a
                  href={project.link ?? "#"}
                  className="group absolute right-4 top-0 block h-[190px] w-[360px] overflow-hidden rounded-xl border border-[rgba(157,140,245,0.3)] shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-"
                  />
                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#0a0a16]/70 text-white backdrop-blur-sm transition-colors group-hover:bg-[#f2c14e] group-hover:text-[#0a0a16]">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </div>
            </div>

            {/* nav controls */}
            <div className="absolute bottom-8 right-8 -mt-4 flex justify-end gap-3">
              <button
                onClick={goPrev}
                aria-label="Previous project"
                className="flex h-11 cursor-pointer w-11 items-center justify-center rounded-full bg-[#141830] text-[#f2f1f8] transition-colors hover:bg-[#1f2547]"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={goNext}
                aria-label="Next project"
                className="flex h-11 cursor-pointer w-11 items-center justify-center rounded-full bg-[#f2c14e] text-[#0a0a16] transition-colors hover:bg-[#f7d375]"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="col-span-1 relative overflow-hidden rounded-[20px] border-[rgba(157,140,245,0.15)]">
            <RobotCanvas cameraFov={40} className="w-full h-full min-h-[350px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
