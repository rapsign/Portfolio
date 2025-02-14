import { useInView } from "framer-motion";
import { useRef } from "react";

export const useInViewAnimation = (options = { once: true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);

  return { ref, isInView };
};
