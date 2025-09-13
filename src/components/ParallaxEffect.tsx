import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxEffectProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const ParallaxEffect: React.FC<ParallaxEffectProps> = ({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = ''
}) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onResize = () => {
      setElementTop(element.offsetTop);
      setClientHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [direction === 'up' ? -100 * speed : 100 * speed, direction === 'up' ? 100 * speed : -100 * speed]
  );

  const x = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [direction === 'left' ? -100 * speed : direction === 'right' ? 100 * speed : 0, direction === 'left' ? 100 * speed : direction === 'right' ? -100 * speed : 0]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: direction === 'up' || direction === 'down' ? y : 0,
        x: direction === 'left' || direction === 'right' ? x : 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxEffect;
