"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-between px-10">
      
      <div>
        <h1 className="text-5xl font-bold">Matheus Di Santo</h1>
        <p className="mt-4 text-gray-400">Desenvolvedor Frontend</p>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="bg-zinc-900 p-6 rounded-2xl"
      >
        Terminal UI
      </motion.div>

    </section>
  );
}