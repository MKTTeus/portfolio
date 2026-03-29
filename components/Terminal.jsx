"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";

export default function Terminal({ lines }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [displayedLines, setDisplayedLines] = useState([]);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!started) return;
    if (currentLine >= lines.length) {
      setFinished(true);
      return;
    }

    const fullText = lines[currentLine];
    let charIndex = 0;

    const interval = setInterval(() => {
      setCurrentText(fullText.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === fullText.length) {
        clearInterval(interval);

        setDisplayedLines((prev) => [...prev, fullText]);
        setCurrentText("");
        setCurrentLine((prev) => prev + 1);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [currentLine, lines, started]);

  const highlightLine = (line) => {
    const parts = line.split(/('.*?'|const)/g);

    return parts.map((part, index) => {
      if (part === "const") {
        return (
          <span key={index} className="text-indigo-50">
            {part}
          </span>
        );
      }

      if (part.startsWith("'") && part.endsWith("'")) {
        return (
          <span key={index} className="text-indigo-50">
            {part}
          </span>
        );
      }

      return (
        <span key={index} className="text-gray-400">
          {part}
        </span>
      );
    });
  };

  return (
    <div className="relative">
      {/* GLOW */}
      <div className="absolute inset-0 bg-indigo-500/20 blur-3xl opacity-40 rounded-xl"/>

      {/* Terminal */}
      <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-mist-800 to-mist-900 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-zinc-800 to-mist-900">
          
          <div className="flex items-baseline gap-2 text-base text-indigo-50 mt-4 pt-1 font-semibold">
            <span className="font-mono text-[19px] leading-none shrink-0">
              &gt;_
            </span>
            <span>terminal.tsx</span>
          </div>

          <div className="flex items-center gap-1.5 mt-4 pt-1">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 font-mono text-sm whitespace-pre bg-gradient-to-r from-zinc-800 to-mist-900 space-y-2">
          
          {displayedLines.map((line, index) => (
            <p key={index}>
              {highlightLine(line)}
            </p>
          ))}

          {currentLine < lines.length && started && (
            <p>
              {highlightLine(currentText)}
              <span className="ml-1 border-r-2 border-white animate-pulse"></span>
            </p>
          )}
        </div>
      </div>
      
      {/* Icon */}
      {finished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { duration: 2 },
            x: { duration: 2 },
            y: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute -right-6 top-[40%] -translate-y-1/2"
        >
          <div className="bg-gradient-to-r from-zinc-700 to-mist-700/80 backdrop-blur-lg border border-white/10 rounded-xl p-3 shadow-xl">
            <FiCode className="text-indigo-50 text-3xl" />
          </div>
        </motion.div>
      )}

    </div>
  );
}