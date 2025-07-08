"use client";

import BackButton from "@/components/BackButton";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function SpringMouseFollower() {
  const mouseX = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const move = (e: any) => {
      mouseX.set(e.clientX);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="mt-5 ml-5"> 
        <BackButton />
      </div>

      <motion.div
        className="w-6 h-6 bg-pink-500 rounded-full fixed top-50"
        style={{ x: smoothX }}
      />
    </>
  );
}
