import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  color = 'var(--chocolate-brown)',
  text 
}) => {
  const sizeMap = {
    small: 24,
    medium: 40,
    large: 60
  };

  const spinnerSize = sizeMap[size];

  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const dotVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="loading-spinner" style={{ textAlign: 'center' }}>
      <motion.div
        className="loading-spinner__container"
        style={{
          width: spinnerSize,
          height: spinnerSize,
          position: 'relative',
          margin: '0 auto 20px'
        }}
        variants={containerVariants}
        animate="animate"
      >
        <motion.div
          className="loading-spinner__dot"
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: spinnerSize * 0.2,
            height: spinnerSize * 0.2,
            backgroundColor: color,
            borderRadius: '50%',
            transform: 'translateX(-50%)'
          }}
          variants={dotVariants}
          animate="animate"
        />
        <motion.div
          className="loading-spinner__dot"
          style={{
            position: 'absolute',
            top: '50%',
            right: 0,
            width: spinnerSize * 0.2,
            height: spinnerSize * 0.2,
            backgroundColor: color,
            borderRadius: '50%',
            transform: 'translateY(-50%)'
          }}
          variants={dotVariants}
          animate="animate"
          transition={{ delay: 0.2 }}
        />
        <motion.div
          className="loading-spinner__dot"
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: spinnerSize * 0.2,
            height: spinnerSize * 0.2,
            backgroundColor: color,
            borderRadius: '50%',
            transform: 'translateX(-50%)'
          }}
          variants={dotVariants}
          animate="animate"
          transition={{ delay: 0.4 }}
        />
        <motion.div
          className="loading-spinner__dot"
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: spinnerSize * 0.2,
            height: spinnerSize * 0.2,
            backgroundColor: color,
            borderRadius: '50%',
            transform: 'translateY(-50%)'
          }}
          variants={dotVariants}
          animate="animate"
          transition={{ delay: 0.6 }}
        />
      </motion.div>
      
      {text && (
        <motion.p
          className="loading-spinner__text"
          style={{
            color: color,
            fontSize: size === 'small' ? '0.9rem' : size === 'medium' ? '1rem' : '1.2rem',
            fontWeight: 500,
            margin: 0
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingSpinner;
