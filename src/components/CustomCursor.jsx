import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const springX = useSpring(mousePosition.x, { stiffness: 500, damping: 28 });
  const springY = useSpring(mousePosition.y, { stiffness: 500, damping: 28 });

  if (isMobile) return null;

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
};

export default CustomCursor;
