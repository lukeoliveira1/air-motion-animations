"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const links = [
    { href: "/motion/useScroll", label: "useScroll" },
    { href: "/motion/useSpring", label: "useSpring" },
    { href: "/motion/useVelocity", label: "useVelocity" },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100"
      animate={{ rotate: 360 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Framer Motion Hooks
      </h1>

      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {link.label}
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}
