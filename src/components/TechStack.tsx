import React from "react";
import {
  Atom,
  Code2,
  Palette,
  Server,
  Cpu,
  Hash,
  Terminal,
  Database,
  Network,
  Cloud,
  PenTool,
  CheckCircle2,
} from "lucide-react";

type Badge =
  | "py"
  | "node"
  | "react"
  | "js"
  | "net"
  | "cs"
  | "db"
  | "sys"
  | "ui"
  | "test"
  | "host"
  | "proto";

interface Chip {
  label: string;
  badge: Badge;
  badgeLabel: string;
}

interface Floor {
  index: string;
  eyebrow: string;
  name: string;
  tagline: string;
  chips: Chip[];
}

const getIcon = (badge: Badge) => {
  switch (badge) {
    case "react":
      return <Atom className="w-4 h-4 animate-spin-slow" />;
    case "js":
      return <Code2 className="w-4 h-4" />;
    case "ui":
      return <Palette className="w-4 h-4" />;
    case "node":
      return <Server className="w-4 h-4" />;
    case "net":
      return <Cpu className="w-4 h-4" />;
    case "cs":
      return <Hash className="w-4 h-4" />;
    case "py":
      return <Terminal className="w-4 h-4" />;
    case "db":
      return <Database className="w-4 h-4" />;
    case "sys":
      return <Network className="w-4 h-4" />;
    case "host":
      return <Cloud className="w-4 h-4" />;
    case "proto":
      return <PenTool className="w-4 h-4" />;
    case "test":
      return <CheckCircle2 className="w-4 h-4" />;
    default:
      return <Code2 className="w-4 h-4" />;
  }
};

const floors: Floor[] = [
  {
    index: "01",
    eyebrow: "INTERFACE",
    name: "What people see & touch",
    tagline: "Presentation layer",
    chips: [
      { label: "React.js", badge: "react", badgeLabel: "R" },
      { label: "JavaScript", badge: "js", badgeLabel: "JS" },
      { label: "UI Design", badge: "ui", badgeLabel: "UI" },
    ],
  },
  {
    index: "02",
    eyebrow: "LOGIC",
    name: "Where the rules live",
    tagline: "Application layer",
    chips: [
      { label: "Node.js", badge: "node", badgeLabel: "N" },
      { label: ".NET", badge: "net", badgeLabel: ".NET" },
      { label: "C#", badge: "cs", badgeLabel: "C#" },
      { label: "Python", badge: "py", badgeLabel: "PY" },
    ],
  },
  {
    index: "03",
    eyebrow: "DATA",
    name: "Where truth is stored",
    tagline: "Persistence layer",
    chips: [
      { label: "Database Design", badge: "db", badgeLabel: "DB" },
      { label: "System Design", badge: "sys", badgeLabel: "SYS" },
    ],
  },
  {
    index: "04",
    eyebrow: "FOUNDATION",
    name: "What keeps it standing",
    tagline: "Infra & process",
    chips: [
      { label: "Web Hosting", badge: "host", badgeLabel: "WEB" },
      { label: "Prototyping", badge: "proto", badgeLabel: "PR" },
      { label: "Testing", badge: "test", badgeLabel: "QA" },
    ],
  },
];

const capabilities: string[] = [
  "Software Development",
  "Web Development",
  "UI Design",
  "Technical Documentation",
  "Web Hosting",
  "System Design",
  "Database Design",
  "Prototyping",
  "Testing",
];

const stats: { value: string; label: string }[] = [
  { value: "04", label: "CORE LAYERS" },
  { value: "10+", label: "TOOLS & FRAMEWORKS" },
  { value: "360°", label: "FULL STACK COVERAGE" },
];

const ghostWords: { text: string; className: string }[] = [
  {
    text: "DEPLOY",
    className:
      "top-[6%] left-[4%] text-[46px] [-webkit-text-stroke:1px_rgba(34,32,82,0.06)]",
  },
  {
    text: "BUILD",
    className:
      "top-[14%] right-[6%] text-[34px] [-webkit-text-stroke:1px_rgba(245,203,92,0.1)]",
  },
  {
    text: "COMPILE",
    className:
      "bottom-[8%] left-[6%] text-[40px] [-webkit-text-stroke:1px_rgba(34,32,82,0.06)]",
  },
  {
    text: "SCALE",
    className:
      "bottom-[16%] right-[4%] text-[30px] [-webkit-text-stroke:1px_rgba(34,32,82,0.06)]",
  },
];

export default function TechStackSection(): React.ReactElement {
  return (
    <section
      className="relative h-[100dvh] overflow-hidden px-[6vw] py-[110px] font-roboto text-gray-800"
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage:
          "radial-gradient(ellipse 700px 500px at 85% 15%, rgba(34, 32, 82, 0.05), transparent 60%), radial-gradient(ellipse 600px 500px at 10% 90%, rgba(245, 203, 92, 0.08), transparent 60%)",
      }}
    >
      {/* grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34, 32, 82, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 32, 82, 0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 90%)",
        }}
      />

      {/* ghost words */}
      {ghostWords.map((w) => (
        <div
          key={w.text}
          className={`pointer-events-none absolute select-none whitespace-nowrap font-roboto font-extrabold text-transparent tracking-wider ${w.className}`}
        >
          {w.text}
        </div>
      ))}

      <div className="relative z-[2] mx-auto grid max-w-[1280px] grid-cols-2 items-start gap-[60px]">
        {/* ---------- LEFT COLUMN ---------- */}
        <div>
          <div className="mb-[18px] font-mono text-[13px] tracking-[4px] text-[#222052] before:mr-1 before:text-[#F5CB5C] before:content-['//']">
            TECH STACK
          </div>

          <h2 className="mb-[22px] font-roboto text-[clamp(38px,4.2vw,58px)]  leading-[1.02] text-[#222052]">
            Built in
            <br />
            <span className="text-[#F5CB5C]">layers,</span>
            <br />
            not shortcuts.
          </h2>

          <p className="mb-10 max-w-[420px] text-[16.5px] leading-[1.7] text-gray-600">
            Every system I ship is engineered the same way it&apos;s designed
            here — from the interface people touch, down to the
            infrastructure that keeps it running. Each layer earns its place.
          </p>

          <div className="mb-[46px] flex max-w-[440px] flex-wrap gap-[10px]">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="rounded-full border border-gray-200 bg-white px-[14px] py-2 font-mono text-xs text-gray-600 transition-all duration-200 hover:border-[#F5CB5C] hover:bg-[#F5CB5C]/10 hover:text-[#222052]"
              >
                {cap}
              </span>
            ))}
          </div>

          <div className="flex gap-[42px] border-t border-gray-200 pt-[30px]">
            {stats.map((s) => (
              <div key={s.label}>
                <b className="block font-roboto text-[30px] text-[#222052]">
                  {s.value}
                </b>
                <span className="font-mono text-[11px] tracking-wide text-gray-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- RIGHT COLUMN: BLUEPRINT TOWER ---------- */}
        <div className="relative pl-[46px]">
          {/* vertical conduit with traveling pulse */}
          <div className="absolute bottom-[6px] left-[14px] top-[6px] w-[2px] bg-gradient-to-b from-transparent via-[rgba(34,32,82,0.15)] to-transparent">
            <div className="absolute left-1/2 top-0 h-[9px] w-[9px] -translate-x-1/2 animate-[pulseTravel_3.2s_linear_infinite] rounded-full bg-[#222052] shadow-[0_0_12px_3px_rgba(34,32,82,0.35)]" />
          </div>

          {floors.map((floor) => (
            <div
              key={floor.index}
              className="group relative mb-[22px] rounded-[14px] border border-gray-200 bg-white p-[22px] px-[26px] shadow-sm transition-all duration-200 hover:translate-x-[6px] hover:border-[#F5CB5C] hover:shadow-md"
            >
              {/* node dot on the conduit */}
              <span className="absolute left-[-34px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[#222052] bg-[#f8f9fa] transition-colors duration-200 group-hover:border-[#F5CB5C]" />

              <div className="mb-[14px] flex items-baseline justify-between">
                <div>
                  <div className="font-mono text-xs tracking-[3px] text-[#F5CB5C]">
                    {floor.index} · {floor.eyebrow}
                  </div>
                  <div className="font-roboto text-[21px]  text-[#222052]">
                    {floor.name}
                  </div>
                </div>
                <div className="text-[12.5px] text-gray-500">
                  {floor.tagline}
                </div>
              </div>

              <div className="mt-[14px] flex flex-wrap gap-[10px]">
                {floor.chips.map((chip) => (
                  <div
                    key={chip.label}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50/50 py-1.5 pl-1.5 pr-3 text-[13px] text-gray-700 hover:bg-gray-100/50 transition-colors"
                  >
                    <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[6px] bg-[#222052]/10 text-[#222052]">
                      {getIcon(chip.badge)}
                    </span>
                    {chip.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}