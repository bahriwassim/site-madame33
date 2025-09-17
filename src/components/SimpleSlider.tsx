import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/SimpleSlider.css';

interface SimpleSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  description?: string;
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Avant',
  afterLabel = 'Après',
  title,
  description
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [beforeImage, afterImage];
  const labels = [beforeLabel, afterLabel];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="simple-slider">
      <div className="simple-slider__container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="simple-slider__slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src={images[currentIndex]}
              alt={`${title || 'Projet'} - ${labels[currentIndex]}`}
              className="simple-slider__image"
            />
            <div className="simple-slider__label">
              {labels[currentIndex]}
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className="simple-slider__nav simple-slider__nav--prev"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        <button
          className="simple-slider__nav simple-slider__nav--next"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>

        <div className="simple-slider__dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`simple-slider__dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {(title || description) && (
        <div className="simple-slider__content">
          {title && <h3 className="simple-slider__title">{title}</h3>}
          {description && <p className="simple-slider__description">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default SimpleSlider;