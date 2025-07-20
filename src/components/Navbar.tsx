import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "Tech Stack", "Logo", "Projects", "Contact"];

  return (
    <div className="bg-[#222052] py-3 flex items-center justify-center gap-30 text-[#fff] rounded-xl mt-6">
      {navItems.map((item) => (
        <div
          key={item}
          onClick={() => setActive(item)}
          className={`px-6 py-3 rounded-2xl cursor-pointer transition-all duration-200 ${
            active === item ? "bg-[#F5CB5C] text-black" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
