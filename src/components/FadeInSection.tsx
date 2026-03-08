import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const FadeInSection = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
