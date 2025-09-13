import React from 'react';
import * as FaIcons from 'react-icons/fa';
import WhatsAppButton from '../components/WhatsAppButton';
import '../styles/Links.css';

const Links: React.FC = () => {
  const links = [
    {
      category: 'Services',
      items: [
        {
          title: 'Demander un devis gratuit',
          description: 'Contactez-moi pour un devis personnalisé et sans engagement',
          url: '/contact',
          icon: <FaIcons.FaClipboardList />
        },
        {
          title: 'Réserver une consultation téléphonique',
          description: 'Première consultation de 15min offerte',
          url: 'tel:+352691210680',
          icon: <FaIcons.FaPhone />
        },
        {
          title: 'Découvrir nos services',
          description: 'Organisation cuisine, dressing, chambre enfants, coaching en ligne',
          url: '/services',
          icon: <FaIcons.FaStar />
        }
      ]
    },
    {
      category: 'Ressources utiles',
      items: [
        {
          title: 'Mon Blog',
          description: 'Conseils et astuces pour une maison organisée',
          url: '/blog',
          icon: <FaIcons.FaEdit />
        },
        {
          title: 'Questions fréquentes (FAQ)',
          description: 'Toutes les réponses à vos questions sur mes services',
          url: '/faq',
          icon: <FaIcons.FaQuestionCircle />
        },
        {
          title: 'Portfolio avant/après',
          description: 'Découvrez mes réalisations et transformations',
          url: '/portfolio',
          icon: <FaIcons.FaHome />
        }
      ]
    },
    {
      category: 'À propos',
      items: [
        {
          title: 'Qui suis-je ?',
          description: 'Mon histoire, mes valeurs et ma méthode d\'organisation',
          url: '/a-propos',
          icon: <FaIcons.FaHandPaper />
        },
        {
          title: 'Mes valeurs',
          description: 'Amour, Famille, Créativité, Sécurité',
          url: '/a-propos#valeurs',
          icon: <FaIcons.FaHeart />
        },
        {
          title: 'Zones d\'intervention',
          description: 'Paris, Luxembourg, Clouange et en ligne',
          url: '/contact',
          icon: <FaIcons.FaMapMarkerAlt />
        }
      ]
    },
    {
      category: 'Réseaux sociaux',
      items: [
        {
          title: 'Instagram',
          description: 'Suivez mes transformations et conseils du quotidien',
          url: 'https://instagram.com/mircea.organise',
          icon: <FaIcons.FaInstagram />,
          external: true
        },
        {
          title: 'Facebook',
          description: 'Rejoignez la communauté des maisons organisées',
          url: 'https://facebook.com/mircea.organise',
          icon: <FaIcons.FaFacebook />,
          external: true
        },
        {
          title: 'LinkedIn',
          description: 'Mon profil professionnel et mes actualités',
          url: 'https://linkedin.com/in/mircea-organise',
          icon: <FaIcons.FaLinkedin />,
          external: true
        }
      ]
    },
    {
      category: 'Contact rapide',
      items: [
    {
      title: 'WhatsApp',
      description: 'Contactez-moi directement sur WhatsApp pour un conseil immédiat',
      url: 'whatsapp:+352691210680',
      icon: <FaIcons.FaWhatsapp />
    },
        {
          title: 'Email',
          description: 'Envoyez-moi votre demande par email',
          url: 'mailto:contact@mircea-organise.com',
          icon: <FaIcons.FaEnvelope />
        },
        {
          title: 'WhatsApp',
          description: 'Contactez-moi via WhatsApp pour les urgences',
          url: 'https://wa.me/352691210680',
          icon: <FaIcons.FaWhatsapp />,
          external: true
        }
      ]
    }
  ];

  const handleLinkClick = (url: string, external?: boolean) => {
    if (external) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (url.startsWith('tel:') || url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      // Navigation interne avec React Router
      window.location.href = url;
    }
  };

  return (
    <div className="links-page">
      <section className="links-hero section">
        <div className="container">
          <h1 className="links-hero__title">Liens utiles</h1>
          <p className="links-hero__subtitle">
            Retrouvez tous mes services et ressources en un seul endroit
          </p>
          <div className="links-hero__info">
            <div className="links-hero__contact">
              <span><FaIcons.FaWhatsapp style={{marginRight: '4px'}} /> +352 691 210 680</span>
              <span><FaIcons.FaEnvelope style={{marginRight: '4px'}} /> contact@mircea-organise.com</span>
            </div>
          </div>
        </div>
      </section>

      <section className="links-content section">
        <div className="container">
          {links.map((category, categoryIndex) => (
            <div key={categoryIndex} className="links-category">
              <h2 className="links-category__title">{category.category}</h2>
              <div className="links-grid">
                {category.items.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    className="link-card"
                    onClick={() => handleLinkClick(link.url, link.external)}
                  >
                    <div className="link-card__icon">{link.icon}</div>
                    <div className="link-card__content">
                      <h3 className="link-card__title">
                        {link.title}
                        {link.external && <span className="external-icon">↗</span>}
                      </h3>
                      <p className="link-card__description">{link.description}</p>
                    </div>
                    <div className="link-card__arrow">→</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="links-cta section">
        <div className="container">
          <div className="links-cta__content">
            <h2>Prêt à transformer votre maison ?</h2>
            <p>
              Contactez-moi dès maintenant pour discuter de votre projet 
              et recevoir un devis personnalisé gratuit.
            </p>
            <div className="links-cta__buttons">
              <button 
                className="btn btn-primary"
                onClick={() => handleLinkClick('/contact')}
              >
                Demander un devis
              </button>
              <WhatsAppButton 
                phoneNumber="+352691210680" 
                message="Bonjour, je souhaite obtenir des informations sur vos services d'organisation."
                variant="secondary"
                size="medium"
              >
                Contacter par WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Links;