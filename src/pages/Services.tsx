import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: '🍳',
      title: 'Organisation Cuisine',
      description: 'Optimisation des rangements, tri des ustensiles et création d\'un espace fonctionnel.',
      features: [
        'Réorganisation complète des placards',
        'Tri et classification des ustensiles',
        'Système d\'étiquetage personnalisé',
        'Optimisation des circuits de travail',
        'Conseils en aménagement'
      ],
      image: '/publicimages/IMG_5681.JPG',
      duration: '3-6h',
      price: '120-350€'
    },
    {
      id: 2,
      icon: '👗',
      title: 'Dressing & Placards',
      description: 'Tri de votre garde-robe et organisation optimale de vos espaces de rangement.',
      features: [
        'Tri des vêtements par catégories',
        'Organisation par saisons',
        'Optimisation de l\'espace disponible',
        'Conseils en rangement vertical',
        'Solutions sur mesure'
      ],
      image: '/publicimages/IMG_5682.JPG',
      duration: '4-8h',
      price: '160-450€'
    },
    {
      id: 3,
      icon: '🧸',
      title: 'Chambre Enfants',
      description: 'Création d\'espaces ludiques et organisés pour favoriser l\'autonomie.',
      features: [
        'Organisation des jouets par zones',
        'Aménagement espace devoirs',
        'Rangement vêtements enfants',
        'Solutions à hauteur d\'enfant',
        'Formation à l\'autonomie'
      ],
      image: '/publicimages/IMG_5683.JPG',
      duration: '2-4h',
      price: '80-200€'
    },
    {
      id: 4,
      icon: '🧺',
      title: 'Buanderie',
      description: 'Structuration de votre espace buanderie pour une gestion efficace du linge.',
      features: [
        'Organisation des produits d\'entretien',
        'Système de tri du linge',
        'Optimisation des circuits',
        'Stockage intelligent',
        'Solutions gain de place'
      ],
      image: '/publicimages/IMG_5684.JPG',
      duration: '2-3h',
      price: '80-180€'
    }
  ];

  const prestations = [
    {
      type: 'Prestations à domicile',
      subtitle: 'Intervention directe chez vous',
      zones: ['Paris et région parisienne', 'Luxembourg', 'Clouange'],
      tarifs: [
        { service: 'Prestation 3h', prix: '120-180€', description: 'Idéal pour un espace spécifique' },
        { service: 'Journée complète (6h)', prix: '250-350€', description: 'Pour plusieurs espaces' },
        { service: 'Pack 3 jours', prix: '700-900€', description: 'Organisation complète maison' }
      ],
      advantages: [
        'Intervention sur site',
        'Matériel fourni',
        'Conseils personnalisés',
        'Suivi inclus'
      ]
    },
    {
      type: 'Coaching en ligne',
      subtitle: 'Accompagnement à distance via visioconférence',
      zones: ['Disponible partout dans le monde'],
      tarifs: [
        { service: 'Séance 1h', prix: '50-70€', description: 'Conseils ciblés' },
        { service: 'Pack 3h', prix: '130-180€', description: 'Projet complet' },
        { service: 'Suivi 1 mois', prix: '200-250€', description: '4 séances + support WhatsApp' }
      ],
      advantages: [
        'Flexibilité horaire',
        'Support continu',
        'Économique',
        'Replay des séances'
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero section">
        <div className="container">
          <h1 className="services-hero__title">Nos Services</h1>
          <p className="services-hero__subtitle">
            Des solutions personnalisées pour chaque espace de votre maison
          </p>
        </div>
      </section>

      <section className="services-detailed section">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} className={`service-detailed ${index % 2 === 1 ? 'service-detailed--reverse' : ''}`}>
              <div className="service-detailed__content">
                <div className="service-detailed__header">
                  <span className="service-detailed__icon">{service.icon}</span>
                  <h2 className="service-detailed__title">{service.title}</h2>
                </div>
                
                <p className="service-detailed__description">
                  {service.description}
                </p>

                <ul className="service-detailed__features">
                  {service.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>

                <div className="service-detailed__info">
                  <div className="service-info">
                    <span className="service-info__label">Durée :</span>
                    <span className="service-info__value">{service.duration}</span>
                  </div>
                  <div className="service-info">
                    <span className="service-info__label">Tarif :</span>
                    <span className="service-info__value">{service.price}</span>
                  </div>
                </div>
              </div>

              <div className="service-detailed__image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="prestations-detailed section">
        <div className="container">
          <h2 className="section-title">Types de prestations</h2>
          <div className="prestations-detailed-grid">
            {prestations.map((prestation, index) => (
              <div key={index} className="prestation-detailed">
                <div className="prestation-detailed__header">
                  <h3 className="prestation-detailed__type">{prestation.type}</h3>
                  <p className="prestation-detailed__subtitle">{prestation.subtitle}</p>
                </div>

                <div className="prestation-detailed__zones">
                  <h4>Zones d'intervention :</h4>
                  <ul>
                    {prestation.zones.map((zone, i) => (
                      <li key={i}>{zone}</li>
                    ))}
                  </ul>
                </div>

                <div className="prestation-detailed__tarifs">
                  <h4>Tarifs :</h4>
                  {prestation.tarifs.map((tarif, i) => (
                    <div key={i} className="tarif-detailed">
                      <div className="tarif-detailed__main">
                        <span className="tarif-detailed__service">{tarif.service}</span>
                        <span className="tarif-detailed__prix">{tarif.prix}</span>
                      </div>
                      <p className="tarif-detailed__description">{tarif.description}</p>
                    </div>
                  ))}
                </div>

                <div className="prestation-detailed__advantages">
                  <h4>Avantages :</h4>
                  <ul>
                    {prestation.advantages.map((advantage, i) => (
                      <li key={i}>✓ {advantage}</li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="btn btn-primary">
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta section">
        <div className="container">
          <div className="services-cta__content">
            <h2>Besoin d'un service sur mesure ?</h2>
            <p>
              Chaque maison est unique. Contactez-moi pour discuter de vos besoins 
              spécifiques et recevoir un devis personnalisé.
            </p>
            <div className="services-cta__buttons">
              <Link to="/contact" className="btn btn-primary">
                Demander un devis gratuit
              </Link>
              <a href="tel:+352691210680" className="btn btn-secondary">
                📞 +352 691 210 680
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;