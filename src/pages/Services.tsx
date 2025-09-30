import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import WhatsAppButton from '../components/WhatsAppButton';
import '../styles/Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <FaIcons.FaUtensils />,
      title: 'Organisation Cuisine',
      description: 'Optimisation des rangements, tri des ustensiles et création d\'un espace fonctionnel.',
      features: [
        'Réorganisation complète des placards',
        'Tri et classification des ustensiles',
        'Système d\'étiquetage personnalisé',
        'Optimisation des circuits de travail',
        'Conseils en aménagement'
      ],
      image: '/publicimages/Photos - nos services/Cuisine/The Best Pantry Organization Ideas.jpeg',
      duration: '3-6h'
    },
    {
      id: 2,
      icon: <FaIcons.FaTshirt />,
      title: 'Dressing & Placards',
      description: 'Tri de votre garde-robe et organisation optimale de vos espaces de rangement.',
      features: [
        'Tri des vêtements par catégories',
        'Organisation par saisons',
        'Optimisation de l\'espace disponible',
        'Conseils en rangement vertical',
        'Solutions sur mesure'
      ],
      image: '/publicimages/Photos - nos services/Dressing/1ca903a9-7088-4d2c-93d9-9821e701f21f.jpeg',
      duration: '4-8h'
    },
    {
      id: 3,
      icon: <FaIcons.FaChild />,
      title: 'Chambre Enfants',
      description: 'Création d\'espaces ludiques et organisés pour favoriser l\'autonomie.',
      features: [
        'Organisation des jouets par zones',
        'Aménagement espace devoirs',
        'Rangement vêtements enfants',
        'Solutions à hauteur d\'enfant',
        'Formation à l\'autonomie'
      ],
      image: '/publicimages/Photos - nos services/chambre enfants_files/0873736b-a39b-44ff-af28-7ecb8fbf5fdb.jpeg',
      duration: '2-4h'
    },
    {
      id: 4,
      icon: <FaIcons.FaHome />,
      title: 'Buanderie',
      description: 'Structuration de votre espace buanderie pour une gestion efficace du linge.',
      features: [
        'Organisation des produits d\'entretien',
        'Système de tri du linge',
        'Optimisation des circuits',
        'Stockage intelligent',
        'Solutions gain de place'
      ],
      image: '/publicimages/Photos - nos services/Buanderie/f09a7608-3537-47e1-8595-1be461e9484c.jpeg',
      duration: '2-3h'
    }
  ];

  const prestations = [
    {
      type: 'Prestations à domicile',
      subtitle: 'Intervention directe chez vous',
      zones: ['Paris et région parisienne', 'Luxembourg'],
      tarifs: [
        { service: 'Pack Découverte ', description: 'Idéal pour réorganiser un espace spécifique. ' },
        { service: 'Pack Sérénité', description: 'Une journée complète pour transformer plusieurs espaces.' },
        { service: 'Pack Transformation', description: ' Un accompagnement sur plusieurs jours pour un changement en profondeur.' }
      ],
      advantages: [
        'Intervention à domicile',
        'Conseils personnalisés',
        'Solutions durables',
        'Suivi inclus'
      ]
    },
    {
      type: 'Coaching en ligne',
      subtitle: 'Accompagnement à distance via visioconférence',
      zones: ['Disponible partout dans le monde'],
      tarifs: [
        { service: 'Séance conseil', description: ' Une rencontre ciblée pour répondre à vos besoins immédiats.' },
        { service: 'Accompagnement pratique', description: 'Plusieurs séances pour avancer ensemble, étape par étape.' },
        { service: 'Pack Confort ', description: 'Un mois d’accompagnement pour ancrer vos nouvelles habitudes.' }
      ],
      advantages: [
        'Flexibilité horaire',
        'Suivi inclus',
        'Accessible partout',
        'Conseils pratiques'
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
                    <li key={i}><FaIcons.FaCheck style={{marginRight: '8px'}} /> {feature}</li>
                  ))}
                </ul>

                <div className="service-detailed__info">
                  <div className="service-info">
                    <span className="service-info__label">Durée :</span>
                    <span className="service-info__value">{service.duration}</span>
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
                      </div>
                      <p className="tarif-detailed__description">{tarif.description}</p>
                    </div>
                  ))}
                </div>

                <div className="prestation-detailed__advantages">
                  <h4>Avantages :</h4>
                  <ul>
                    {prestation.advantages.map((advantage, i) => (
                      <li key={i}><FaIcons.FaCheck style={{marginRight: '8px'}} /> {advantage}</li>
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
              <WhatsAppButton 
                phoneNumber="+352691210680" 
                message="Bonjour, je souhaite obtenir des informations sur vos services d'organisation."
                variant="secondary"
                size="medium"
              >
               Contact sur whatsapp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;