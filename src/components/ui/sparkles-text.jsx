import React, { useId, useEffect, useState } from "react";
import { motion } from "framer-motion";

const defaultColors = {
  first: "#A07CFE",
  second: "#FE8FB5",
};

export const SparklesText = ({
  text,
  colors = defaultColors,
  className,
  sparklesCount = 10,
  ...props
}) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateSparkles = () => {
      return Array.from({ length: sparklesCount }).map((_, i) => ({
        id: `sparkle-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: Math.random() > 0.5 ? colors.first : colors.second,
        delay: Math.random() * 2,
        scale: Math.random() * 0.5 + 0.5,
      }));
    };
    setSparkles(generateSparkles());
  }, [sparklesCount, colors]);

  return (
    <div
      className={`relative inline-block ${className}`}
      {...props}
    >
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}
      <strong className="relative z-10 font-bold text-inherit">{text}</strong>
    </div>
  );
};

const Sparkle = ({ x, y, color, delay, scale }) => {
  return (
    <motion.svg
      className="absolute z-20 pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      width="20"
      height="20"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0, opacity: 0, rotate: 0 }}
      animate={{
        scale: [0, scale, 0],
        opacity: [0, 1, 0],
        rotate: [0, 90, 180],
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </motion.svg>
  );
};
