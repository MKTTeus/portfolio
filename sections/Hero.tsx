"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Button from "../components/Button";
import Terminal from "../components/Terminal";
import { GoProjectSymlink } from "react-icons/go";

const lines = [
  "const developer = {",
  "  name: 'Matheus Di Santo',",
  "  role: 'Frontend Developer',",
  "  skills: ['React', 'TypeScript']",
  "}",
];

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -20, 0], 
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-[1fr_1fr] items-center px-6 md:px-10 bg-gradient-to-r from-mist-900 to-zinc-950 p-8 shadow-2xl">
      
      <div className="flex flex-col justify-center pt-20 md:pt-0">
        <div className="pl-6 md:pl-10">
          
          <h1 className="text-indigo-50 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            Matheus <br /> Di Santo
          </h1>

          <div className="flex items-center gap-3 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl font-medium font-mono">
              Desenvolvedor Frontend
            </p>
          </div>
          
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-medium max-w-xl mt-4 pt-6">
            Especializado em criar interfaces modernas, performáticas e
            centradas na experiência do usuário.
          </p>

          <div className="flex gap-4 mt-8">
            <Button  
              icon={
                <GoProjectSymlink
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              }
            >
              Ver Projetos
            </Button>

            <Button variant="outline">
              Entre em Contato
            </Button>
          </div>

        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <motion.div
          animate={controls}
          className="
            mt-16 md:mt-30
            w-full
            max-w-[585px]
            h-[320px]
            sm:h-[320px]
            md:h-[360px]
            hidden md:block
          "
        >
          <Terminal lines={lines} />
        </motion.div>
      </div>

    </section>
  );
}