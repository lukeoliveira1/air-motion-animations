import Link from "next/link";
import { motion } from "framer-motion";

export default function BackButton() {
  return (
    <Link href="/">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-gray-800 text-white rounded-md shadow hover:bg-gray-700 transition-colors"
      >
        Voltar
      </motion.button>
    </Link>
  );
}
