import React from "react";
import { Mail, Phone, Facebook, Instagram, Globe } from "lucide-react";

const Coontact: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 font-sans">
      {/* Left Column - Form */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 bg-transparent border border-gray-400 rounded-2xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-4 bg-transparent border border-gray-400 rounded-2xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 bg-transparent border border-gray-400 rounded-2xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <textarea
          placeholder="Your Message..."
          rows={6}
          className="w-full p-4 bg-transparent border border-gray-400 rounded-2xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
        />

        <div className="mt-2">
          <button className="bg-[#FCD34D] text-black font-semibold text-lg px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors shadow-md">
            Send Message
          </button>
        </div>
      </div>

      {/* Right Column - Info */}
      <div className="w-full lg:w-1/2 flex flex-col pt-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
          Reach Out, We're Listening
        </h2>
        <p className="text-gray-500 text-lg mb-12">
          We're ready to assist. Share the details below and we'll get back to
          you soon.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Email Card */}
          <div className="bg-white p-8 rounded-[30px] flex-1 shadow-sm flex flex-col justify-center gap-2">
            <p className="text-black font-bold text-lg">E-mail :</p>
            <p className="text-gray-600">info@allinoneholdings.com</p>
          </div>

          {/* Phone Card */}
          <div className="bg-[#023e7d] p-8 rounded-[30px] flex-1 shadow-sm text-white flex flex-col justify-center gap-2">
            <p className="font-bold text-lg">Phone :</p>
            <p>+94 81 2121 051</p>
            <p>+94 81 2121 051</p>
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-black text-lg mb-4">Follow Us:</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-12 h-12 bg-[#FCD34D] rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[#FCD34D] rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[#FCD34D] rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition-colors"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coontact;
