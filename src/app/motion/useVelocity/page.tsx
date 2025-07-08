"use client";

import BackButton from "@/components/BackButton";
import { motion, useScroll, useTransform, useVelocity } from "framer-motion";

export default function VelocityColorBox() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  const bg = useTransform(velocity, [0, 1000], ["#3b82f6", "#ef4444"]);

  return (
    <>
      <motion.div
        style={{ backgroundColor: bg }}
        className="w-full min-h-screen flex flex-col items-center justify-start text-white text-2xl gap-6 py-10"
      >
        <p>Role rápido para mudar a cor!</p>
        <BackButton />

        <div className="h-[200vh] mt-10">
          <p className="text-white text-lg">
            Role mais para ver a animação de cor!
          </p>
        </div>
      </motion.div>
    </>
  );
}
