import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-red-600">
      <div className="bg-green-600 flex justify-center w-full">
        <div className="bg-blue-600 w-[1/3]">
          <div>
            <h2 className="">Pamuditha</h2>
            <h2>Gangana</h2>
          </div>
          <div>
            <h3>Software Developer</h3>
            <h3>Web Developer</h3>
            <h3>Event Planner</h3>
          </div>
        </div>
        <div className="bg-orange-600 w-[1/3]">Image</div>
        <div className="bg-pink-600 w-[1/3]">
          <p>Amid the Storm of Tasks and Bugs, </p>
          <p>I remain the Master of Calm Chaos</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
