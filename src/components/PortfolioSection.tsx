import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PortfolioSection.css';

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'enfants',
      title: 'Un espace ludique et organisé',
      beforeImage: '/publicimages/avant-apres/Chambre des enfants/20250908_132250000_iOS.jpg',
      afterImage: '/publicimages/avant-apres/Chambre des enfants/IMG-20250908-WA0040.jpg',
      description: 'De la pagaille au quotidien à une chambre qui favorise l\'autonomie et la sérénité.'
    },
    {
      id: 2,
      category: 'cuisine',
      title: 'Une cuisine transformée',
      beforeImage: '/publicimages/avant-apres/Cuisine/IMG-20250908-WA0052.jpg',
      afterImage: '/publicimages/avant-apres/Cuisine/IMG-20250908-WA0056.jpg',
      description: 'Réorganisation complète pour un espace fonctionnel et agréable à vivre.'
    },
    {
      id: 3,
      category: 'cuisine',
      title: 'Fluidité retrouvée',
      beforeImage: '/publicimages/avant-apres/cuisine 2/20250908_131742000_iOS.png',
      afterImage: '/publicimages/avant-apres/cuisine 2/IMG-20250908-WA0033.jpg',
      description: 'Chaque placard optimisé pour cuisiner sans perte de temps.'
    },
    {
      id: 4,
      category: 'cuisine',
      title: 'Un coin épices simplifié',
      beforeImage: '/publicimages/avant-apres/Cuisine épices/20250908_130901000_iOS.jpg',
      afterImage: '/publicimages/avant-apres/Cuisine épices/20250908_133850000_iOS.jpg',
      description: 'Des étagères encombrées à un système clair et accessible au quotidien.'
    },
    {
      id: 5,
      category: 'rangement',
      title: 'Des linges bien rangés',
      beforeImage: '/publicimages/avant-apres/pliages/20250908_133030000_iOS.jpg',
      afterImage: '/publicimages/avant-apres/pliages/20250908_133052000_iOS.jpg',
      description: 'Méthodes de pliage optimisées pour gagner de la place et de la clarté.'
    },
    {
      id: 6,
      category: 'rangement',
      title: 'Un espace apaisant',
      beforeImage: '/publicimages/avant-apres/Salle de douche/20250908_133513000_iOS.jpg',
      afterImage: '/publicimages/avant-apres/Salle de douche/20250908_133638000_iOS.jpg',
      description: 'Organisation des produits et optimisation des rangements pour plus de confort.'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tout voir' },
    { id: 'cuisine', name: 'Cuisine' },
    { id: 'rangement', name: 'Rangements' },
    { id: 'enfants', name: 'Chambre des enfants' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="portfolio-section section">
      <div className="container">
        <h2 className="section-title">Avant / Après</h2>
        <p className="section-subtitle">
        Découvrez nos transformations.
        </p>

        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`portfolio-filter ${selectedCategory === category.id ? 'portfolio-filter--active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-item__comparison">
                <div className="portfolio-item__before">
                  <img src={item.beforeImage} alt={`${item.title} - Avant`} />
                  <div className="portfolio-item__label">Avant</div>
                </div>
                <div className="portfolio-item__after">
                  <img src={item.afterImage} alt={`${item.title} - Après`} />
                  <div className="portfolio-item__label">Après</div>
                </div>
              </div>
              <div className="portfolio-item__content">
                <h3 className="portfolio-item__title">{item.title}</h3>
                <p className="portfolio-item__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <Link to="/portfolio" className="btn btn-primary">
            Voir tous nos projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;