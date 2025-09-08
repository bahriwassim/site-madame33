import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/publicimages/IMG_5681.JPG',
      title: 'Transformez votre maison en havre de paix',
      subtitle: 'Organisation & rangement personnalisé pour une vie plus sereine'
    },
    {
      image: '/publicimages/IMG_5682.JPG',
      title: 'Des solutions sur mesure',
      subtitle: 'Accompagnement professionnel à domicile et en ligne'
    },
    {
      image: '/publicimages/IMG_5683.JPG',
      title: 'Une maison organisée, une vie apaisée',
      subtitle: 'Créons ensemble votre espace de bien-être'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero__slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero__overlay"></div>
          </div>
        ))}
      </div>
      
      <div className="hero__content">
        <div className="container">
          <div className="hero__text">
            <h1 className="hero__title">
              {slides[currentSlide].title}
            </h1>
            <p className="hero__subtitle">
              {slides[currentSlide].subtitle}
            </p>
            <div className="hero__buttons">
              <Link to="/services" className="btn btn-primary">
                Découvrir nos services
              </Link>
              <Link to="/contact" className="btn btn-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero__indicator ${index === currentSlide ? 'hero__indicator--active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="hero__values">
        <div className="container">
          <div className="hero__values-grid">
            <div className="hero__value">
              <h3><FaIcons.FaHeart style={{marginRight: '8px'}} /> Amour</h3>
              <p>Avec passion et bienveillance</p>
            </div>
            <div className="hero__value">
              <h3><FaIcons.FaUsers style={{marginRight: '8px'}} /> Famille</h3>
              <p>Pour tous les membres de votre foyer</p>
            </div>
            <div className="hero__value">
              <h3><FaIcons.FaMagic style={{marginRight: '8px'}} /> Créativité</h3>
              <p>Des solutions innovantes et personnalisées</p>
            </div>
            <div className="hero__value">
              <h3><FaIcons.FaShieldAlt style={{marginRight: '8px'}} /> Sécurité</h3>
              <p>Confidentialité et respect total</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;