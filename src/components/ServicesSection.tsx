import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesSection.css';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '🍳',
      title: 'Organisation Cuisine',
      description: 'Optimisation des rangements, tri des ustensiles et création d\'un espace fonctionnel pour cuisiner en toute sérénité.',
      features: ['Réorganisation placards', 'Tri des ustensiles', 'Étiquetage personnalisé']
    },
    {
      icon: '👗',
      title: 'Dressing',
      description: 'Tri de votre garde-robe, organisation par catégories et conseils pour un dressing pratique et esthétique.',
      features: ['Tri des vêtements', 'Organisation saisons', 'Optimisation espace']
    },
    {
      icon: '🧸',
      title: 'Chambre Enfants',
      description: 'Création d\'espaces ludiques et organisés pour favoriser l\'autonomie et le bien-être de vos enfants.',
      features: ['Rangement jouets', 'Zone devoirs', 'Organisation vêtements']
    },
    {
      icon: '🧺',
      title: 'Buanderie',
      description: 'Structuration de votre espace buanderie pour une gestion efficace du linge et des produits d\'entretien.',
      features: ['Organisation produits', 'Système de tri', 'Optimisation circuits']
    }
  ];

  const prestations = [
    {
      type: 'À domicile',
      zones: 'Paris • Luxembourg • Clouange',
      tarifs: [
        { duree: '3h', prix: '120-180€' },
        { duree: '6h', prix: '250-350€' },
        { duree: '3 jours', prix: '700-900€' }
      ]
    },
    {
      type: 'En ligne',
      zones: 'Visioconférence • Coaching personnalisé',
      tarifs: [
        { duree: '1h', prix: '50-70€' },
        { duree: '3h', prix: '130-180€' },
        { duree: 'Suivi 1 mois', prix: '200-250€' }
      ]
    }
  ];

  return (
    <section className="services-section section">
      <div className="container">
        <h2 className="section-title">Mes Services</h2>
        <p className="section-subtitle">
          Des solutions personnalisées pour chaque espace de votre maison
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <ul className="service-card__features">
                {service.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="prestations-section">
          <h3 className="prestations-title">Types de prestations</h3>
          <div className="prestations-grid">
            {prestations.map((prestation, index) => (
              <div key={index} className="prestation-card">
                <h4 className="prestation-card__type">{prestation.type}</h4>
                <p className="prestation-card__zones">{prestation.zones}</p>
                <div className="prestation-card__tarifs">
                  {prestation.tarifs.map((tarif, i) => (
                    <div key={i} className="tarif-item">
                      <span className="tarif-duree">{tarif.duree}</span>
                      <span className="tarif-prix">{tarif.prix}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-secondary">
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="services-cta">
          <Link to="/services" className="btn btn-primary">
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;