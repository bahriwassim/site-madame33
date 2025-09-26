import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import SimpleSlider from '../components/SimpleSlider';
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
      beforeImage: '/publicimages/Photos Avant Après/Un espace ludique et organisé/Avant.jpg',
      afterImage: '/publicimages/Photos Avant Après/Un espace ludique et organisé/Après.jpg',
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
      beforeImage: '/publicimages/Photos Avant Après/Une cuisine transformée/Avant.jpg',
      afterImage: '/publicimages/Photos Avant Après/Une cuisine transformée/Après.jpg',
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
      beforeImage: '/publicimages/Photos Avant Après/Fluidité retrouvée/Avant.png',
      afterImage: '/publicimages/Photos Avant Après/Fluidité retrouvée/Après.jpg',
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
      beforeImage: '/publicimages/Photos Avant Après/Un coin épices simplifié/Avant.jpg',
      afterImage: '/publicimages/Photos Avant Après/Un coin épices simplifié/Après.jpg',
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
      afterImage: '/publicimages/avant-apres/pliages/20250908_133153000_iOS.jpg',
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
    },
    {
      id: 7,
      category: 'rangement',
      title: 'Un placard qui respire enfin',
      location: 'Paris 12ème',
      duration: '3h',
      client: 'M. Blanchard',
      beforeImage: '/publicimages/Photos Avant Après/Un placard qui respire enfin/Avant.jpg',
      afterImage: '/publicimages/Photos Avant Après/Un placard qui respire enfin/Après.jpg',
      description: 'Optimisation complète d\'un placard encombré pour retrouver visibilité et accessibilité.',
      challenges: [
        'Placard saturé sans organisation',
        'Objets difficiles à retrouver',
        'Perte d\'espace utile'
      ],
      solutions: [
        'Tri par fréquence d\'utilisation',
        'Rangements modulaires',
        'Système d\'étiquetage clair',
        'Optimisation verticale'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero section">
        <div className="container">
          <h1 className="portfolio-hero__title">Portfolio</h1>
          <p className="portfolio-hero__subtitle">
            Découvrez nos réalisations et les transformations réussies
          </p>
          <div className="portfolio-stats">
            
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

          <motion.div
            key={selectedCategory}
            className="portfolio-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredItems.map(item => (
              <motion.div 
                key={item.id} 
                className="portfolio-card"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <SimpleSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  beforeLabel="Avant"
                  afterLabel="Après"
                  title={item.title}
                  description={item.description}
                />
                
                <div className="portfolio-card__content">
                  <div className="portfolio-card__header">
                    <div className="portfolio-card__meta">
                      <span className="portfolio-card__location"><FaIcons.FaMapMarkerAlt style={{marginRight: '4px'}} /> {item.location}</span>
                      <span className="portfolio-card__duration">⏱️ {item.duration}</span>
                    </div>
                  </div>
                  
                  <motion.button 
                    className="portfolio-card__cta"
                    onClick={() => openModal(item.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Voir le détail du projet →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPortfolioItem && (
          <motion.div 
            className="portfolio-modal" 
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="portfolio-modal__content" 
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button 
                className="portfolio-modal__close" 
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                ×
              </motion.button>
              
              <div className="portfolio-modal__header">
                <h2>{selectedPortfolioItem.title}</h2>
                <div className="portfolio-modal__meta">
                  <span><FaIcons.FaMapMarkerAlt style={{marginRight: '4px'}} /> {selectedPortfolioItem.location}</span>
                  <span>⏱️ {selectedPortfolioItem.duration}</span>
                  <span><FaIcons.FaUsers style={{marginRight: '4px'}} /> {selectedPortfolioItem.client}</span>
                </div>
              </div>

              <div className="portfolio-modal__slider-container">
                <SimpleSlider
                  beforeImage={selectedPortfolioItem.beforeImage}
                  afterImage={selectedPortfolioItem.afterImage}
                  beforeLabel="Avant"
                  afterLabel="Après"
                  title={selectedPortfolioItem.title}
                  description={selectedPortfolioItem.description}
                />
              </div>

              <div className="portfolio-modal__details">
                <motion.div 
                  className="portfolio-modal__section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h3>Description du projet</h3>
                  <p>{selectedPortfolioItem.description}</p>
                </motion.div>

                <motion.div 
                  className="portfolio-modal__section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h3>Défis rencontrés</h3>
                  <ul>
                    {selectedPortfolioItem.challenges.map((challenge, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      >
                        {challenge}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  className="portfolio-modal__section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h3>Solutions apportées</h3>
                  <ul>
                    {selectedPortfolioItem.solutions.map((solution, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      >
                        <FaIcons.FaCheck style={{marginRight: '8px', color: 'var(--chocolate-brown)'}} /> {solution}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;