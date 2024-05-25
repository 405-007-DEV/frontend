import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

type FadeUpMotionProps = {
  duration: number;
  delay: number;
};

/**
 * Common Fade Up Motion Component
 * @param duration Animation duration
 * @param delay Animation delay
 */
export const FadeUpMotion: FC<PropsWithChildren<FadeUpMotionProps>> = ({
  children,
  duration,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
