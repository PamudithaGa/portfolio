import React from "react";
import { motion } from "framer-motion";
import { Hammer, Github, Linkedin, Mail, Globe } from "lucide-react";

const UnderDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center relative overflow-hidden font-roboto">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="mb-8 inline-block p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
        >
          <Hammer className="w-12 h-12 text-blue-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Something <span className="text-blue-400">Great</span> is Coming
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          My portfolio is currently undergoing a complete transformation to provide you with a better experience. 
          I'm working hard to bring you something amazing. Stay tuned!
        </motion.p>

        {/* Progress Bar (Visual Only) */}
        <div className="max-w-md mx-auto mb-16">
          <div className="flex justify-between text-sm mb-2 text-gray-400">
            <span>Development Progress</span>
            <span>85%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <SocialIcon icon={<Github />} href="#" label="GitHub" />
          <SocialIcon icon={<Linkedin />} href="#" label="LinkedIn" />
          <SocialIcon icon={<Mail />} href="mailto:contact@example.com" label="Email" />
          <SocialIcon icon={<Globe />} href="#" label="Website" />
        </div>
      </motion.div>

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 text-center text-sm text-gray-500"
      >
        &copy; {new Date().getFullYear()} Pamuditha Senanayaka. All rights reserved.
      </motion.div>
    </div>
  );
};

const SocialIcon = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <motion.a
    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    whileTap={{ scale: 0.95 }}
    href={href}
    className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default UnderDevelopment;
