import React, { useState } from 'react';
import '../styles/Portfolio.css';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      category: 'cuisine',
      title: 'Transformation cuisine moderne',
      location: 'Paris 15ème',
      duration: '6h',
      client: 'Famille Martin',
      beforeImage: '/publicimages/IMG_5681.JPG',
      afterImage: '/publicimages/IMG_5682.JPG',
      description: 'Réorganisation complète avec optimisation des rangements et création de zones fonctionnelles.',
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
      id: 2,
      category: 'rangement',
      title: 'Placard organisé avec étiquetage',
      location: 'Luxembourg',
      duration: '4h',
      client: 'Mme Dubois',
      beforeImage: '/publicimages/IMG_5683.JPG',
      afterImage: '/publicimages/IMG_5684.JPG',
      description: 'Système d\'étiquetage et contenants uniformisés pour un rangement efficace et durable.',
      challenges: [
        'Produits mélangés sans logique',
        'Difficulté à retrouver les articles',
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
      id: 3,
      category: 'cuisine',
      title: 'Espace culinaire fonctionnel',
      location: 'Paris 11ème',
      duration: '5h',
      client: 'Couple Rousseau',
      beforeImage: '/publicimages/IMG_5685.JPG',
      afterImage: '/publicimages/IMG_5686.JPG',
      description: 'Organisation par zones d\'activités pour optimiser le workflow en cuisine.',
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
      category: 'rangement',
      title: 'Optimisation espaces multiples',
      location: 'Clouange',
      duration: '8h',
      client: 'Famille Weber',
      beforeImage: '/publicimages/IMG_5687.JPG',
      afterImage: '/publicimages/IMG_5688.JPG',
      description: 'Solutions sur mesure pour optimiser chaque espace de rangement de la maison.',
      challenges: [
        'Maison ancienne avec espaces atypiques',
        'Famille nombreuse (4 enfants)',
        'Budget limité pour l\'organisation'
      ],
      solutions: [
        'Solutions DIY économiques',
        'Adaptation aux espaces existants',
        'Formation de toute la famille',
        'Suivi mensuel inclus'
      ]
    },
    {
      id: 5,
      category: 'dressing',
      title: 'Dressing familial optimisé',
      location: 'Paris 16ème',
      duration: '6h',
      client: 'Famille Leroy',
      beforeImage: '/publicimages/IMG_5689.JPG',
      afterImage: '/publicimages/IMG_5681.JPG',
      description: 'Organisation d\'un grand dressing familial avec espaces dédiés pour chaque membre.',
      challenges: [
        'Espace partagé entre 4 personnes',
        'Vêtements de saisons mélangés',
        'Manque de visibilité des articles'
      ],
      solutions: [
        'Zones personnalisées par personne',
        'Rotation saisonnière organisée',
        'Système de tri couleur',
        'Éclairage optimisé'
      ]
    },
    {
      id: 6,
      category: 'enfants',
      title: 'Chambre enfants ludique',
      location: 'Luxembourg',
      duration: '4h',
      client: 'Famille Schmidt',
      beforeImage: '/publicimages/IMG_5682.JPG',
      afterImage: '/publicimages/IMG_5683.JPG',
      description: 'Aménagement d\'une chambre d\'enfants favorisant l\'autonomie et le rangement ludique.',
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
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les projets', count: portfolioItems.length },
    { id: 'cuisine', name: 'Cuisine', count: portfolioItems.filter(item => item.category === 'cuisine').length },
    { id: 'rangement', name: 'Rangements', count: portfolioItems.filter(item => item.category === 'rangement').length },
    { id: 'dressing', name: 'Dressing', count: portfolioItems.filter(item => item.category === 'dressing').length },
    { id: 'enfants', name: 'Chambre enfants', count: portfolioItems.filter(item => item.category === 'enfants').length }
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
                      <span className="portfolio-card__location">📍 {item.location}</span>
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
                <span>📍 {selectedPortfolioItem.location}</span>
                <span>⏱️ {selectedPortfolioItem.duration}</span>
                <span>👥 {selectedPortfolioItem.client}</span>
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
                    <li key={i}>✓ {solution}</li>
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