import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaHome, FaStar, FaBullseye } from 'react-icons/fa';
import '../styles/CTA.css';

const CTA: React.FC = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__content">
          <div className="cta__text">
            <h2 className="cta__title">Prêt à transformer votre maison ?</h2>
            <p className="cta__subtitle">
            Contactez-moi pour un devis gratuit et personnalisé.
Ensemble, créons un intérieur qui vous ressemble et qui respire la paix au quotidien.

            </p>
            
            <div className="cta__features">
              <div className="cta__feature">
                <div className="cta__feature-icon"><FaPhone /></div>
                <div className="cta__feature-text">
                  <h4>Réactivité garantie</h4>
                  <p>Organisation d’un rendez-vous selon disponibilités
                  </p>
                </div>
              </div>
              
              <div className="cta__feature">
                <div className="cta__feature-icon"><FaHome /></div>
                <div className="cta__feature-text">
                  <h4>Accompagnement sur-mesure</h4>
                  <p> suivi personnalisé inclus
                  </p>
                </div>
              </div>
              
              </div>

            <div className="cta__buttons">
              <Link to="/contact" className="btn btn-primary cta__btn-primary">
                Demander un devis gratuit
              </Link>
              <a href="tel:+352691210680" className="btn btn-secondary cta__btn-secondary">
                <FaPhone /> Lu +352 691 210 680
              </a>
              <a href="tel:+33780932106" className="btn btn-secondary cta__btn-secondary">
                <FaPhone /> Fr: +337 80 93 21 06

              </a>
            </div>
          </div>
          
          <div className="cta__image">
            <div className="cta__image-container">
              <img 
                src="/publicimages/IMG_5689.JPG" 
                alt="Espace organisé et apaisant" 
                className="cta__img"
              />
              <div className="cta__badge">
                <span><FaBullseye /></span>
                <div>
                  <strong>Résultats garantis</strong>
                  <small>ou remboursé</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;