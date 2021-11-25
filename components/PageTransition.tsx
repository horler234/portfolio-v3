import { ReactNode } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export const PageTransition = ({ children }: Props) => (
  <motion.main
    initial={{ opacity: 0, x: -200, y: 0 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    exit={{ opacity: 0, x: 0, y: -100 }}
    variants={variants}
    transition={{ type: "linear" }}
  >
    {children}
  </motion.main>
);
