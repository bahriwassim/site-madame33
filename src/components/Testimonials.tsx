import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sophie M.',
      location: 'Paris 15ème',
      rating: 5,
      text: 'Mircea a transformé ma cuisine en un espace fonctionnel et apaisant. Son approche bienveillante et ses conseils pratiques ont fait toute la différence. Je recommande vivement !',
      service: 'Organisation cuisine'
    },
    {
      id: 2,
      name: 'Marie L.',
      location: 'Luxembourg',
      rating: 5,
      text: 'Grâce à Mircea, notre maison est enfin organisée ! Mes enfants trouvent leurs affaires facilement et l\'ambiance familiale s\'est considérablement améliorée.',
      service: 'Organisation complète'
    },
    {
      id: 3,
      name: 'Carole D.',
      location: 'Clouange',
      rating: 5,
      text: 'Le coaching en ligne de Mircea m\'a permis de reprendre le contrôle de mon dressing. Ses méthodes sont simples à appliquer et les résultats sont durables.',
      service: 'Coaching dressing'
    },
    {
      id: 4,
      name: 'Amélie R.',
      location: 'Paris 11ème',
      rating: 5,
      text: 'Professionnalisme, discrétion et efficacité. Mircea a su respecter notre intimité tout en nous donnant les clés d\'une organisation pérenne.',
      service: 'Prestation à domicile'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'star--filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">Ils nous font confiance</h2>
        <p className="section-subtitle">
          Découvrez les témoignages de nos clients satisfaits
        </p>

        <div className="testimonials-slider">
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial ${index === currentSlide ? 'testimonial--active' : ''}`}
              >
                <div className="testimonial__content">
                  <div className="testimonial__quote">
                    <p>"{testimonial.text}"</p>
                  </div>
                  
                  <div className="testimonial__author">
                    <div className="testimonial__author-info">
                      <h4 className="testimonial__name">{testimonial.name}</h4>
                      <p className="testimonial__location">{testimonial.location}</p>
                      <p className="testimonial__service">{testimonial.service}</p>
                    </div>
                    <div className="testimonial__rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials-dot ${index === currentSlide ? 'testimonials-dot--active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="testimonials-stat">
            <span className="testimonials-stat__number">150+</span>
            <span className="testimonials-stat__label">Clients satisfaits</span>
          </div>
          <div className="testimonials-stat">
            <span className="testimonials-stat__number">98%</span>
            <span className="testimonials-stat__label">Taux de satisfaction</span>
          </div>
          <div className="testimonials-stat">
            <span className="testimonials-stat__number">5★</span>
            <span className="testimonials-stat__label">Note moyenne</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;