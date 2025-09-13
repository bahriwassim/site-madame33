import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import VisualEffects from './VisualEffects';
import LoadingSpinner from './LoadingSpinner';
import '../styles/BeforeAfterSlider.css';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  description?: string;
  isModal?: boolean;
  onImageClick?: () => void;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Avant',
  afterLabel = 'Après',
  title,
  description,
  isModal = false,
  onImageClick
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [triggerEffects, setTriggerEffects] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLabels, setShowLabels] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const resetSlider = () => {
    setIsAnimating(true);
    setSliderPosition(50);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const toggleLabels = () => {
    setShowLabels(!showLabels);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchend', handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging]);

  // Gestion du chargement des images
  useEffect(() => {
    const beforeImg = new Image();
    const afterImg = new Image();
    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === 2) {
        setImagesLoaded(true);
        setTriggerEffects(true);
        setTimeout(() => setTriggerEffects(false), 100);
      }
    };

    beforeImg.onload = handleLoad;
    afterImg.onload = handleLoad;
    
    beforeImg.src = beforeImage;
    afterImg.src = afterImage;
  }, [beforeImage, afterImage]);

  const sliderVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const labelVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, delay: 0.2 }
    }
  };

  if (!imagesLoaded) {
    return (
      <div className="before-after-slider before-after-slider--loading">
        <LoadingSpinner 
          size="large" 
          text="Chargement des images..." 
          color="var(--chocolate-brown)"
        />
      </div>
    );
  }

  return (
    <>
      <VisualEffects isActive={true} trigger={triggerEffects} />
      
      <motion.div
        ref={containerRef}
        className={`before-after-slider ${isModal ? 'before-after-slider--modal' : ''}`}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseUp();
        }}
        onClick={handleClick}
      >
        <div className="before-after-slider__container">
          {/* Image Avant */}
          <motion.div 
            className="before-after-slider__image-container before-after-slider__before"
            variants={imageVariants}
          >
            <img 
              src={beforeImage} 
              alt={`${title || 'Projet'} - ${beforeLabel}`}
              className="before-after-slider__image"
            />
            {showLabels && (
              <motion.div 
                className="before-after-slider__label before-after-slider__label--before"
                variants={labelVariants}
              >
                {beforeLabel}
              </motion.div>
            )}
          </motion.div>

          {/* Image Après */}
          <motion.div 
            className="before-after-slider__image-container before-after-slider__after"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            variants={imageVariants}
          >
            <img 
              src={afterImage} 
              alt={`${title || 'Projet'} - ${afterLabel}`}
              className="before-after-slider__image"
            />
            {showLabels && (
              <motion.div 
                className="before-after-slider__label before-after-slider__label--after"
                variants={labelVariants}
              >
                {afterLabel}
              </motion.div>
            )}
          </motion.div>

          {/* Curseur de comparaison */}
          <motion.div
            className={`before-after-slider__slider ${isAnimating ? 'animating' : ''}`}
            style={{ left: `${sliderPosition}%` }}
            animate={{ 
              scale: isHovered || isDragging ? 1.2 : 1,
              opacity: isHovered || isDragging ? 1 : 0.8
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="before-after-slider__slider-line"></div>
            <div className="before-after-slider__slider-handle">
              <FaIcons.FaGripVertical />
            </div>
          </motion.div>

          {/* Boutons de contrôle */}
          <div className="before-after-slider__controls">
            <motion.button
              className="before-after-slider__control-btn before-after-slider__reset-btn"
              onClick={(e) => {
                e.stopPropagation();
                resetSlider();
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.2 }}
              title="Réinitialiser"
            >
              <FaIcons.FaUndo />
            </motion.button>

            <motion.button
              className="before-after-slider__control-btn before-after-slider__labels-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleLabels();
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.2 }}
              title={showLabels ? "Masquer les labels" : "Afficher les labels"}
            >
              <FaIcons.FaEye />
            </motion.button>

            <motion.button
              className="before-after-slider__control-btn before-after-slider__fullscreen-btn"
              onClick={(e) => {
                e.stopPropagation();
                setShowFullscreen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.2 }}
              title="Plein écran"
            >
              <FaIcons.FaExpand />
            </motion.button>
          </div>

          {/* Indicateur de glissement */}
          <motion.div
            className="before-after-slider__hint"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isHovered && !isDragging ? 1 : 0,
              y: isHovered && !isDragging ? 0 : 10
            }}
            transition={{ duration: 0.3 }}
          >
            <FaIcons.FaHandPointer />
            <span>Glissez pour comparer</span>
          </motion.div>
        </div>

        {/* Contenu textuel */}
        {(title || description) && (
          <motion.div 
            className="before-after-slider__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {title && <h3 className="before-after-slider__title">{title}</h3>}
            {description && <p className="before-after-slider__description">{description}</p>}
          </motion.div>
        )}
      </motion.div>

      {/* Modal plein écran */}
      <AnimatePresence>
        {showFullscreen && (
          <motion.div
            className="before-after-slider__fullscreen-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFullscreen(false)}
          >
            <motion.div
              className="before-after-slider__fullscreen-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="before-after-slider__close-btn"
                onClick={() => setShowFullscreen(false)}
              >
                <FaIcons.FaTimes />
              </button>
              
              <BeforeAfterSlider
                beforeImage={beforeImage}
                afterImage={afterImage}
                beforeLabel={beforeLabel}
                afterLabel={afterLabel}
                title={title}
                description={description}
                isModal={true}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BeforeAfterSlider;
