import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface Project {
  client: string;
  title: string;
  description: string;
  challenges: string[];
  tags: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    client: "Kandy Rental Car",
    title: "Rental Car Website Development",
    description:
      "Designed and developed a responsive, user-friendly website for a car rental service, featuring real-time vehicle availability, booking functionality, and location-based search to enhance customer experience and streamline operations.",
    challenges: [
      "Simplifying a complicated design process",
      "Giving consumers a seamless digital experience when booking their car",
      "Real time experience of exploring available vehicles",
      "A comprehensive back-end platform that allowed real time updates",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/kandy-rental-car.png",
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
    image: "/images/projects/regency-travel-house.png",
  },
];

export default function ProjectShowcase(): React.ReactElement {
  const [index, setIndex] = useState<number>(0);
  const project = projects[index];

  const goPrev = () =>
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const goNext = () =>
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

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

        <div className="grid grid-cols-2">
          <div className="relative overflow-hidden rounded-[20px] border border-[rgba(157,140,245,0.15)] ">
            <img
              src="/images/profile-pointing.png"
              alt="Portrait"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="relative w-full overflow-hidden rounded-[20px] border border-[rgba(157,140,245,0.18)] bg-gradient-to-br from-[#0d1226] to-[#0a0a16] p-10">
            <div className="grid grid-cols-1">
              {/* text content */}
              <div>
                <h3 className="mb-1 font-[Poppins] text-[28px] font-bold text-[#f2f1f8]">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm font-medium text-[#9d8cf5]">
                  — {project.client}
                </p>

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

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f2c14e] px-5 py-2 text-sm font-semibold text-[#0a0a16]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* mockup preview, layered/stacked for depth */}
              <div className="relative  min-h-[260px]">
                <div className="absolute right-2 top-6 h-[220px] w-[280px] rotate-3 rounded-xl border border-[rgba(157,140,245,0.2)] bg-[#1a1f3a]" />
                <div className="absolute right-6 top-3 h-[220px] w-[280px] -rotate-2 rounded-xl border border-[rgba(157,140,245,0.25)] bg-[#141830]" />
                <a
                  href={project.link ?? "#"}
                  className="group absolute right-4 top-0 block h-[220px] w-[280px] overflow-hidden rounded-xl border border-[rgba(157,140,245,0.3)] shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#0a0a16]/70 text-white backdrop-blur-sm transition-colors group-hover:bg-[#f2c14e] group-hover:text-[#0a0a16]">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </div>
            </div>

            {/* nav controls */}
            <div className="mt-10 flex justify-end gap-3">
              <button
                onClick={goPrev}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#141830] text-[#f2f1f8] transition-colors hover:bg-[#1f2547]"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={goNext}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2c14e] text-[#0a0a16] transition-colors hover:bg-[#f7d375]"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
