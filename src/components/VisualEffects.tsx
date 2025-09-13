import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ParticleProps {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

const Particle: React.FC<ParticleProps> = ({ x, y, size, color, duration }) => {
  return (
    <motion.div
      className="particle"
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
      initial={{ 
        scale: 0, 
        opacity: 1,
        x: 0,
        y: 0
      }}
      animate={{ 
        scale: [0, 1, 0],
        opacity: [1, 1, 0],
        x: [0, (Math.random() - 0.5) * 100],
        y: [0, (Math.random() - 0.5) * 100]
      }}
      transition={{ 
        duration: duration,
        ease: "easeOut"
      }}
    />
  );
};

interface VisualEffectsProps {
  isActive?: boolean;
  trigger?: boolean;
}

const VisualEffects: React.FC<VisualEffectsProps> = ({ isActive = false, trigger = false }) => {
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  useEffect(() => {
    if (trigger) {
      createParticles();
    }
  }, [trigger]);

  const createParticles = () => {
    const newParticles: ParticleProps[] = [];
    const colors = ['#8B4513', '#D2B48C', '#F5DEB3', '#DEB887'];
    
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 2 + 1
      });
    }
    
    setParticles(newParticles);
    
    // Nettoyer les particules après l'animation
    setTimeout(() => {
      setParticles([]);
    }, 3000);
  };

  if (!isActive) return null;

  return (
    <AnimatePresence>
      {particles.map(particle => (
        <Particle key={particle.id} {...particle} />
      ))}
    </AnimatePresence>
  );
};

export default VisualEffects;
