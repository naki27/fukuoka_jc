import { duration } from "@mui/material";
import { motion } from "framer-motion";

const animationVariants = {
  fade: {
    initial: { opacity: 0, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    duration: 2.0,
  },
  slideLeft: {
    initial: { opacity: 0, x: -200 },
    whileInView: { opacity: 1, x: 0 },
    duration: 0.6,
  },
  slideRight: {
    initial: { opacity: 0, x: 200 },
    whileInView: { opacity: 1, x: 0 },
    duration: 0.6,
  },
  slideUp: {
    initial: { opacity: 0, y: 200 },
    whileInView: { opacity: 1, y: 0 },
    duration: 0.6,
  },
};

const AnimatedSection = ({ children, animationType = "fade" }) => {
  const variant = animationVariants[animationType] || animationVariants.fade;

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.whileInView}
      transition={{ duration: variant.duration }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ margin: "0 0" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
