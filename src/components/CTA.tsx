import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaStar, FaBullseye } from 'react-icons/fa';
import WhatsAppButton from './WhatsAppButton';
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
                <div className="cta__feature-icon"><FaHome /></div>
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
              <WhatsAppButton 
                phoneNumber="+352691210680" 
                message="Bonjour, je souhaite organiser un rendez-vous pour vos services d'organisation."
                variant="secondary"
                size="medium"
                className="cta__btn-secondary"
              >
                +352 691 210 680
              </WhatsAppButton>
            </div>
          </div>
          
          <div className="cta__image">
            <div className="cta__image-container">
              <img 
                src="/publicimages/IMG_5689.JPG" 
                alt="Espace organisé et apaisant" 
                className="cta__img"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;