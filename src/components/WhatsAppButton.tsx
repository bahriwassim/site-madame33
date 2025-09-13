import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import '../styles/WhatsAppButton.css';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'floating';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  showText?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Bonjour, je souhaite obtenir des informations sur vos services d'organisation.",
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  showIcon = true,
  showText = true
}) => {
  // Nettoyer le numéro de téléphone (enlever les espaces, tirets, etc.)
  const cleanPhoneNumber = phoneNumber.replace(/[\s\-\(\)]/g, '');
  
  // Créer le lien WhatsApp
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-btn whatsapp-btn--${variant} whatsapp-btn--${size} ${className}`}
      onClick={handleClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {showIcon && (
        <motion.span 
          className="whatsapp-btn__icon"
          variants={iconVariants}
        >
          <FaIcons.FaWhatsapp />
        </motion.span>
      )}
      
      {showText && (
        <span className="whatsapp-btn__text">
          {children || 'Contact WhatsApp'}
        </span>
      )}
      
      {/* Effet de pulsation pour le bouton flottant */}
      {variant === 'floating' && (
        <motion.div
          className="whatsapp-btn__pulse"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.a>
  );
};

export default WhatsAppButton;

