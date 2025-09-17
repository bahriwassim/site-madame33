import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SimpleSlider from './SimpleSlider';
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
      afterImage: '/publicimages/avant-apres/Cuisine/IMG-20250908-WA0062.jpg',
      description: 'Réorganisation complète pour un espace fonctionnel et agréable à vivre.'
    },
    {
      id: 3,
      category: 'cuisine',
      title: 'Fluidité retrouvée',
      beforeImage: '/publicimages/avant-apres/cuisine 2/20250908_131742000_iOS.png',
      afterImage: '/publicimages/avant-apres/cuisine 2/IMG-20250908-WA0039.jpg',
      description: 'Chaque placard optimisé pour cuisiner sans perte de temps.'
    },
    {
      id: 4,
      category: 'cuisine',
      title: 'Un coin épices simplifié',
      beforeImage: '/publicimages/avant-apres/Cuisine épices/IMG-20250905-WA0012.jpg',
      afterImage: '/publicimages/avant-apres/Cuisine épices/20250908_133850000_iOS.jpg',
      description: 'Des étagères encombrées à un système clair et accessible au quotidien.'
    },
    {
      id: 5,
      category: 'rangement',
      title: 'Des linges bien rangés',
      beforeImage: '/publicimages/avant-apres/pliages/20250908_133030000_iOS.jpg',
      afterImage: '/publicimages/avant-apres/pliages/20250908_133153000_iOS.jpg',
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
    ? portfolioItems.slice(0, 2)
    : portfolioItems.filter(item => item.category === selectedCategory).slice(0, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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
    <section className="portfolio-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Avant / Après</h2>
          <p className="section-subtitle">
            Découvrez nos transformations interactives
          </p>
        </motion.div>

        <motion.div 
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`portfolio-filter ${selectedCategory === category.id ? 'portfolio-filter--active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="portfolio-item"
              variants={itemVariants}
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/portfolio" className="btn btn-primary">
            Voir tous nos projets
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;