import React from 'react';
import * as FaIcons from 'react-icons/fa';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero__content">
            <div className="about-hero__text">
              <h1 className="about-hero__title">Qui suis-je ?</h1>
              <p className="about-hero__subtitle">
                Passionnée par l'organisation et le bien-être à la maison, 
                je vous accompagne pour créer des espaces qui vous ressemblent.
              </p>
            </div>
            <div className="about-hero__image">
              <img src="/publicimages/qui.JPG" alt="Mircea" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="about-story__content">
            <h2 className="section-title">Mon histoire</h2>
            <div className="about-story__text">
              <p>
              Tout a commencé par un besoin personnel : mettre de l’ordre autour de moi pour retrouver calme et sérénité. Très vite, j’ai compris que l’organisation n’était pas seulement une question de rangement, mais une façon de mieux vivre au quotidien.
              </p>
              <p>
              Forte de mon expérience personnelle et de mon parcours d’éducatrice, j’ai choisi d’accompagner les familles pour créer des intérieurs clairs, pratiques et apaisants. Aujourd’hui, je continue cette mission avec la même passion et la même bienveillance qui m’animent depuis le début.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <h2 className="section-title">Mes valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-card__icon"><FaIcons.FaHeart /></div>
              <h3>Amour</h3>
              <p>
                Chaque projet est mené avec passion et bienveillance. 
                J'aime ce que je fais et cela se ressent dans chaque 
                intervention.
              </p>
            </div>
            <div className="value-card">
              <div className="value-card__icon"><FaIcons.FaUsers /></div>
              <h3>Famille</h3>
              <p>
                L'organisation doit servir toute la famille. Je conçois 
                des solutions qui fonctionnent pour tous les membres 
                du foyer.
              </p>
            </div>
            <div className="value-card">
              <div className="value-card__icon"><FaIcons.FaMagic /></div>
              <h3>Créativité</h3>
              <p>
                Chaque espace est unique. J'apporte des solutions 
                innovantes et personnalisées adaptées à vos besoins 
                spécifiques.
              </p>
            </div>
            <div className="value-card">
              <div className="value-card__icon"><FaIcons.FaShieldAlt /></div>
              <h3>Sécurité</h3>
              <p>
                Confidentialité et respect total de votre intimité. 
                Votre confiance est précieuse et je la protège 
                absolument.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-expertise section">
        <div className="container">
          <h2 className="section-title">Mon expertise</h2>
          <div className="expertise-content">
            <div className="expertise-stats">
              <div className="stat">
                <span className="stat__number"></span>
                <span className="stat__label">Des solutions sur mesure</span>
              </div>
              <div className="stat">
                <span className="stat__number"></span>
                <span className="stat__label">Une approche durable
                </span>
              </div>
              <div className="stat">
                <span className="stat__number"></span>
                <span className="stat__label">Un suivi personnalisé                </span>
              </div>
            </div>
            
            <div className="expertise-skills">
              <h3>Mes spécialités</h3>
              <ul>
                <li><FaIcons.FaUtensils style={{marginRight: '8px'}} /> Organisation cuisine et espaces de vie</li>
                <li><FaIcons.FaTshirt style={{marginRight: '8px'}} /> Optimisation dressing et placards</li>
                <li><FaIcons.FaChild style={{marginRight: '8px'}} /> Aménagement chambre d'enfants</li>
                <li><FaIcons.FaHome style={{marginRight: '8px'}} /> Structuration buanderie et rangements</li>
                <li><FaIcons.FaLaptop style={{marginRight: '8px'}} /> Coaching en ligne personnalisé</li>
                <li><FaIcons.FaBuilding style={{marginRight: '8px'}} /> Conseil en aménagement d'espace</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-approach section">
        <div className="container">
          <h2 className="section-title">Ma méthode</h2>
          <div className="approach-steps">
            <div className="approach-step">
              <div className="approach-step__number">01</div>
              <h3>Écoute & Analyse</h3>
              <p>
                Je commence par comprendre vos besoins, vos habitudes 
                et vos contraintes pour proposer des solutions adaptées.
              </p>
            </div>
            <div className="approach-step">
              <div className="approach-step__number">02</div>
              <h3>Tri & Organisation</h3>
              <p>
                Nous trions ensemble vos affaires et mettons en place 
                un système d'organisation logique et durable.
              </p>
            </div>
            <div className="approach-step">
              <div className="approach-step__number">03</div>
              <h3>Formation & Suivi</h3>
              <p>
                Je vous forme aux nouvelles méthodes et assure un suivi 
                pour garantir la pérennité des résultats.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;