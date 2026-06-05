"use client";

import { motion } from "framer-motion";
import React from "react";

type AnimateInProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
};

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  className = "",
}: AnimateInProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Luxury cubic-bezier curve (easeOutQuart)
      }}
    >
      {children}
    </motion.div>
  );
}
