import React, { useState } from "react";
import Logo from "../assets/LogoP.png";
const Navbar: React.FC = () => {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Tech Stack", id: "tech-stack" },
    { name: Logo, id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string, name: string) => {
    setActive(name);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#222052] font-roboto flex items-center justify-center gap-10 text-[#fff] rounded-xl mt-6">
      {navItems.map((item) => (
        <div
          key={item.name}
          onClick={() => handleScroll(item.id, item.name)}
          className={`px-6 py-2 rounded-2xl cursor-pointer transition-all duration-200 text-lg flex items-center ${
            active === item.name && item.name !== Logo ? "bg-[#F5CB5C] text-black" : ""
          }`}
        >
          {item.name === Logo ? (
            <img src={Logo} alt="Logo" className="h-12" />
          ) : (
            item.name
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
