import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PortfolioSection.css';

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'cuisine',
      title: 'Transformation cuisine moderne',
      beforeImage: '/publicimages/IMG_5681.JPG',
      afterImage: '/publicimages/IMG_5682.JPG',
      description: 'Réorganisation complète avec optimisation des rangements'
    },
    {
      id: 2,
      category: 'rangement',
      title: 'Placard organisé',
      beforeImage: '/publicimages/IMG_5683.JPG',
      afterImage: '/publicimages/IMG_5684.JPG',
      description: 'Système d\'étiquetage et contenants uniformisés'
    },
    {
      id: 3,
      category: 'cuisine',
      title: 'Espace culinaire fonctionnel',
      beforeImage: '/publicimages/IMG_5685.JPG',
      afterImage: '/publicimages/IMG_5686.JPG',
      description: 'Organisation par zones d\'activités'
    },
    {
      id: 4,
      category: 'rangement',
      title: 'Optimisation espaces',
      beforeImage: '/publicimages/IMG_5687.JPG',
      afterImage: '/publicimages/IMG_5688.JPG',
      description: 'Solutions sur mesure pour chaque espace'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tout voir' },
    { id: 'cuisine', name: 'Cuisine' },
    { id: 'rangement', name: 'Rangements' },
    { id: 'dressing', name: 'Dressing' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="portfolio-section section">
      <div className="container">
        <h2 className="section-title">Avant / Après</h2>
        <p className="section-subtitle">
          Découvrez quelques-unes de nos transformations réussies
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