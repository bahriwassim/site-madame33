import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaTshirt, FaChild, FaHome, FaLaptop } from 'react-icons/fa';
import '../styles/AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-section__content">
          <div className="about-section__text">
            <h2 className="section-title">Qui est Mircea ?</h2>
            <p className="section-subtitle">
              Passionnée par l'organisation et le bien-être à la maison, 
              je vous accompagne pour créer des espaces qui vous ressemblent.
            </p>
            
            <div className="about-section__description">
              <p>
                Fort de plusieurs années d'expérience en organisation domestique, 
                mircea.organise vous propose des solutions personnalisées pour 
                transformer votre intérieur en un véritable havre de paix.
              </p>
              
              <p>
                Mon approche bienveillante et respectueuse vous permet de reprendre 
                le contrôle de votre espace de vie, tout en préservant l'harmonie 
                familiale et votre intimité.
              </p>

              <div className="about-section__expertise">
                <h3>Mon expertise</h3>
                <ul>
                  <li><FaUtensils style={{marginRight: '8px'}} /> Organisation cuisine et espaces de vie</li>
                  <li><FaTshirt style={{marginRight: '8px'}} /> Optimisation dressing et placards</li>
                  <li><FaChild style={{marginRight: '8px'}} /> Aménagement chambre d'enfants</li>
                  <li><FaHome style={{marginRight: '8px'}} /> Structuration buanderie et rangements</li>
                  <li><FaLaptop style={{marginRight: '8px'}} /> Coaching en ligne personnalisé</li>
                </ul>
              </div>
            </div>

            <Link to="/a-propos" className="btn btn-primary">
              En savoir plus sur moi
            </Link>
          </div>
          
          <div className="about-section__image">
            <div className="about-section__image-container">
              <img 
                src="/publicimages/IMG_5684.JPG" 
                alt="Organisation professionnelle" 
                className="about-section__img"
              />
              <div className="about-section__badge">
                <span>+150</span>
                <small>Maisons organisées</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;