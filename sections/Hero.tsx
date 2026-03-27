"use client";

import { motion } from "framer-motion";

const lines = [
  "const developer = {",
  "name: 'Matheus Di Santo',",
  "role: 'Frontend Developer',",
  "skills: ['React', 'TypeScript']",
  "}",
];

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-between px-10">
      
    <section className="min-h-screen flex items-start pt-20">
      <div className="pl-6 md:pl-10">
        <h1 className="text-red-50 md:text-7xl lg:text-8xl font-extrabold leading-tight">
          Matheus <br /> Di Santo
        </h1>

        <div className="flex items-center gap-3 mt-4">
          <div className="w-16 h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
          <p className="text-gray-400 text-lg md:text-xl lg:text-2xl font-medium font-mono">
            Desenvolvedor Frontend
          </p>
        </div>
        <p className="text-gray-400 text-lg font-light mt-4 pt-6   ">
            Especializado em criar interfaces modernas, performáticas e <br />centradas na experiência do usuário.
        </p>

      </div>
    </section>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="bg-zinc-900 p-6 rounded-2xl"
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1b1f]">

          {/* Icons Terminal */}
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>

          <span className="ml-3 text-sm text-gray-400">terminal.tsx</span>
        </div>

        {/* Body */}
        <div className="p-4 font-mono text-sm text-[#dadada]">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              {line}
            </motion.p>
          ))}

        </div>
      </motion.div>

    </section>
  );
}