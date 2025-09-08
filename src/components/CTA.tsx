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
              Contactez-moi dès aujourd'hui pour un devis personnalisé et gratuit. 
              Ensemble, créons l'espace organisé dont vous rêvez.
            </p>
            
            <div className="cta__features">
              <div className="cta__feature">
                <div className="cta__feature-icon"><FaPhone /></div>
                <div className="cta__feature-text">
                  <h4>Consultation gratuite</h4>
                  <p>Premier échange de 15min offert</p>
                </div>
              </div>
              
              <div className="cta__feature">
                <div className="cta__feature-icon"><FaHome /></div>
                <div className="cta__feature-text">
                  <h4>Intervention rapide</h4>
                  <p>Disponibilité sous 48h</p>
                </div>
              </div>
              
              <div className="cta__feature">
                <div className="cta__feature-icon"><FaStar /></div>
                <div className="cta__feature-text">
                  <h4>Satisfaction garantie</h4>
                  <p>Suivi personnalisé inclus</p>
                </div>
              </div>
            </div>

            <div className="cta__buttons">
              <Link to="/contact" className="btn btn-primary cta__btn-primary">
                Demander un devis gratuit
              </Link>
              <a href="tel:+352691210680" className="btn btn-secondary cta__btn-secondary">
                <FaPhone /> +352 691 210 680
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