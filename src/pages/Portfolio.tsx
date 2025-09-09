import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import '../styles/Portfolio.css';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      category: 'enfants',
      title: 'Un espace ludique et organisé',
      location: 'Luxembourg',
      duration: '4h',
      client: 'Famille Schmidt',
      beforeImage: '/publicimages/avant-apres/Chambre des enfants/20250908_132250000_iOS.jpg',
      afterImage: '/publicimages/avant-apres/Chambre des enfants/IMG-20250908-WA0040.jpg',
      description: 'De la pagaille au quotidien à une chambre qui favorise l\'autonomie et la sérénité.',
      challenges: [
        'Enfants de 4 et 7 ans',
        'Nombreux jouets et livres',
        'Développer l\'autonomie'
      ],
      solutions: [
        'Rangements à hauteur d\'enfant',
        'Système de pictogrammes',
        'Zones de jeu définies',
        'Routine de rangement ludique'
      ]
    },
    {
      id: 2,
      category: 'cuisine',
      title: 'Une cuisine transformée',
      location: 'Paris 15ème',
      duration: '6h',
      client: 'Famille Martin',
      beforeImage: '/publicimages/avant-apres/Cuisine/IMG-20250908-WA0052.jpg',
      afterImage: '/publicimages/avant-apres/Cuisine/IMG-20250908-WA0056.jpg',
      description: 'Réorganisation complète pour un espace fonctionnel et agréable à vivre.',
      challenges: [
        'Espace réduit à optimiser',
        'Nombreux ustensiles à organiser',
        'Besoin de faciliter la cuisine quotidienne'
      ],
      solutions: [
        'Système de rangement vertical',
        'Étiquetage personnalisé',
        'Organisation par zones d\'activités',
        'Optimisation des placards hauts'
      ]
    },
    {
      id: 3,
      category: 'cuisine',
      title: 'Fluidité retrouvée',
      location: 'Paris 11ème',
      duration: '5h',
      client: 'Couple Rousseau',
      beforeImage: '/publicimages/avant-apres/cuisine 2/20250908_131742000_iOS.png',
      afterImage: '/publicimages/avant-apres/cuisine 2/IMG-20250908-WA0033.jpg',
      description: 'Chaque placard optimisé pour cuisiner sans perte de temps.',
      challenges: [
        'Deux personnes utilisent la cuisine',
        'Matériel professionnel à intégrer',
        'Optimisation du triangle d\'activité'
      ],
      solutions: [
        'Zones dédiées par personne',
        'Rangement matériel spécialisé',
        'Circuit de travail optimisé',
        'Accessibilité améliorée'
      ]
    },
    {
      id: 4,
      category: 'cuisine',
      title: 'Un coin épices simplifié',
      location: 'Clouange',
      duration: '3h',
      client: 'Mme Dubois',
      beforeImage: '/publicimages/avant-apres/Cuisine épices/20250908_130901000_iOS.jpg',
      afterImage: '/publicimages/avant-apres/Cuisine épices/20250908_133850000_iOS.jpg',
      description: 'Des étagères encombrées à un système clair et accessible au quotidien.',
      challenges: [
        'Produits mélangés sans logique',
        'Difficulté à retrouver les épices',
        'Gaspillage par oubli'
      ],
      solutions: [
        'Contenants transparents uniformes',
        'Étiquetage bilingue',
        'Système de rotation FIFO',
        'Guide d\'utilisation personnalisé'
      ]
    },
    {
      id: 5,
      category: 'rangement',
      title: 'Des linges bien rangés',
      location: 'Paris 16ème',
      duration: '4h',
      client: 'Famille Leroy',
      beforeImage: '/publicimages/avant-apres/pliages/20250908_133030000_iOS.jpg',
      afterImage: '/publicimages/avant-apres/pliages/20250908_133052000_iOS.jpg',
      description: 'Méthodes de pliage optimisées pour gagner de la place et de la clarté.',
      challenges: [
        'Linges de maison encombrants',
        'Difficulté à retrouver les articles',
        'Manque d\'espace de rangement'
      ],
      solutions: [
        'Techniques de pliage optimisées',
        'Système de tri par catégorie',
        'Rangements verticaux',
        'Étiquetage des contenants'
      ]
    },
    {
      id: 6,
      category: 'rangement',
      title: 'Un espace apaisant',
      location: 'Luxembourg',
      duration: '3h',
      client: 'Famille Weber',
      beforeImage: '/publicimages/avant-apres/Salle de douche/20250908_133513000_iOS.jpg',
      afterImage: '/publicimages/avant-apres/Salle de douche/20250908_133638000_iOS.jpg',
      description: 'Organisation des produits et optimisation des rangements pour plus de confort.',
      challenges: [
        'Espace réduit à optimiser',
        'Produits de soin éparpillés',
        'Besoin de faciliter l\'accès quotidien'
      ],
      solutions: [
        'Système de rangement vertical',
        'Organisation par fréquence d\'usage',
        'Contenants étanches',
        'Étiquetage résistant à l\'humidité'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les projets', count: portfolioItems.length },
    { id: 'cuisine', name: 'Cuisine', count: portfolioItems.filter(item => item.category === 'cuisine').length },
    { id: 'rangement', name: 'Rangements', count: portfolioItems.filter(item => item.category === 'rangement').length },
    { id: 'enfants', name: 'Chambre des enfants', count: portfolioItems.filter(item => item.category === 'enfants').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openModal = (itemId: number) => {
    setSelectedItem(itemId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  const selectedPortfolioItem = portfolioItems.find(item => item.id === selectedItem);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero section">
        <div className="container">
          <h1 className="portfolio-hero__title">Portfolio</h1>
          <p className="portfolio-hero__subtitle">
            Découvrez nos réalisations et les transformations réussies
          </p>
          <div className="portfolio-stats">
            <div className="portfolio-stat">
              <span className="portfolio-stat__number">150+</span>
              <span className="portfolio-stat__label">Projets réalisés</span>
            </div>
            <div className="portfolio-stat">
              <span className="portfolio-stat__number">98%</span>
              <span className="portfolio-stat__label">Clients satisfaits</span>
            </div>
            <div className="portfolio-stat">
              <span className="portfolio-stat__number">7/7</span>
              <span className="portfolio-stat__label">Disponible</span>
            </div>
            <div className="portfolio-stat">
              <span className="portfolio-stat__number">3</span>
              <span className="portfolio-stat__label">Pays d'intervention</span>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-content section">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`portfolio-filter ${selectedCategory === category.id ? 'portfolio-filter--active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="portfolio-card">
                <div className="portfolio-card__images">
                  <div className="portfolio-card__before">
                    <img src={item.beforeImage} alt={`${item.title} - Avant`} />
                    <div className="portfolio-card__label">Avant</div>
                  </div>
                  <div className="portfolio-card__after">
                    <img src={item.afterImage} alt={`${item.title} - Après`} />
                    <div className="portfolio-card__label">Après</div>
                  </div>
                </div>
                
                <div className="portfolio-card__content">
                  <div className="portfolio-card__header">
                    <h3 className="portfolio-card__title">{item.title}</h3>
                    <div className="portfolio-card__meta">
                      <span className="portfolio-card__location"><FaIcons.FaMapMarkerAlt style={{marginRight: '4px'}} /> {item.location}</span>
                      <span className="portfolio-card__duration">⏱️ {item.duration}</span>
                    </div>
                  </div>
                  
                  <p className="portfolio-card__description">{item.description}</p>
                  
                  <button 
                    className="portfolio-card__cta"
                    onClick={() => openModal(item.id)}
                  >
                    Voir le détail du projet →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPortfolioItem && (
        <div className="portfolio-modal" onClick={closeModal}>
          <div className="portfolio-modal__content" onClick={e => e.stopPropagation()}>
            <button className="portfolio-modal__close" onClick={closeModal}>×</button>
            
            <div className="portfolio-modal__header">
              <h2>{selectedPortfolioItem.title}</h2>
              <div className="portfolio-modal__meta">
                <span><FaIcons.FaMapMarkerAlt style={{marginRight: '4px'}} /> {selectedPortfolioItem.location}</span>
                <span>⏱️ {selectedPortfolioItem.duration}</span>
                <span><FaIcons.FaUsers style={{marginRight: '4px'}} /> {selectedPortfolioItem.client}</span>
              </div>
            </div>

            <div className="portfolio-modal__images">
              <div className="portfolio-modal__image">
                <img src={selectedPortfolioItem.beforeImage} alt="Avant" />
                <div className="portfolio-modal__image-label">Avant</div>
              </div>
              <div className="portfolio-modal__image">
                <img src={selectedPortfolioItem.afterImage} alt="Après" />
                <div className="portfolio-modal__image-label">Après</div>
              </div>
            </div>

            <div className="portfolio-modal__details">
              <div className="portfolio-modal__section">
                <h3>Description du projet</h3>
                <p>{selectedPortfolioItem.description}</p>
              </div>

              <div className="portfolio-modal__section">
                <h3>Défis rencontrés</h3>
                <ul>
                  {selectedPortfolioItem.challenges.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className="portfolio-modal__section">
                <h3>Solutions apportées</h3>
                <ul>
                  {selectedPortfolioItem.solutions.map((solution, i) => (
                    <li key={i}><FaIcons.FaCheck style={{marginRight: '8px'}} /> {solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;