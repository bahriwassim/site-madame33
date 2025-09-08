import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import '../styles/Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
  acceptTerms: boolean;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
    acceptTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (remplacer par vraie logique)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        message: '',
        acceptTerms: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Organisation cuisine',
    'Dressing & placards',
    'Chambre enfants',
    'Buanderie',
    'Organisation complète maison',
    'Coaching en ligne',
    'Autre (préciser dans le message)'
  ];

  const locations = [
    'Paris et région parisienne',
    'Luxembourg',
    'Clouange',
    'En ligne',
    'Autre (préciser dans le message)'
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1 className="contact-hero__title">Contact & Devis</h1>
          <p className="contact-hero__subtitle">
            Prêt à transformer votre maison ? Contactez-moi pour un devis personnalisé et gratuit
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <div className="contact-info__section">
                <h2>Parlons de votre projet</h2>
                <p>
                  Chaque projet d'organisation est unique. Racontez-moi vos besoins 
                  et je vous proposerai des solutions personnalisées pour transformer 
                  votre intérieur en espace serein et fonctionnel.
                </p>
              </div>

              <div className="contact-info__section">
                <h3><FaIcons.FaPhone style={{marginRight: '8px'}} /> Contact direct</h3>
                <div className="contact-direct">
                  <a href="tel:+352691210680" className="contact-direct__phone">
                    +352 691 210 680
                  </a>
                  <p>Disponible du lundi au samedi, 9h-18h</p>
                  <small>Première consultation de 15min offerte</small>
                </div>
              </div>

              <div className="contact-info__section">
                <h3><FaIcons.FaMap style={{marginRight: '8px'}} /> Zones d'intervention</h3>
                <ul className="contact-zones">
                  <li><FaIcons.FaFlag style={{marginRight: '8px'}} /> Paris et région parisienne</li>
                  <li><FaIcons.FaFlag style={{marginRight: '8px'}} /> Clouange</li>
                  <li><FaIcons.FaFlag style={{marginRight: '8px'}} /> Luxembourg</li>
                  <li><FaIcons.FaLaptop style={{marginRight: '8px'}} /> En ligne (monde entier)</li>
                </ul>
              </div>

              <div className="contact-info__section">
                <h3><FaIcons.FaClock style={{marginRight: '8px'}} /> Délais d'intervention</h3>
                <div className="contact-timing">
                  <div className="timing-item">
                    <strong>Urgence :</strong> 24-48h
                  </div>
                  <div className="timing-item">
                    <strong>Standard :</strong> 3-7 jours
                  </div>
                  <div className="timing-item">
                    <strong>Projet planifié :</strong> Selon vos disponibilités
                  </div>
                </div>
              </div>

              <div className="contact-info__section">
                <h3><FaIcons.FaLightbulb style={{marginRight: '8px'}} /> Ce qui est inclus</h3>
                <ul className="contact-included">
                  <li><FaIcons.FaCheck style={{marginRight: '8px'}} /> Devis gratuit et sans engagement</li>
                  <li><FaIcons.FaCheck style={{marginRight: '8px'}} /> Première consultation téléphonique offerte</li>
                  <li><FaIcons.FaCheck style={{marginRight: '8px'}} /> Plan d'action personnalisé</li>
                  <li><FaIcons.FaCheck style={{marginRight: '8px'}} /> Suivi post-intervention inclus</li>
                  <li><FaIcons.FaCheck style={{marginRight: '8px'}} /> Conseils de maintien sur mesure</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Demander un devis gratuit</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service souhaité *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="location">Zone d'intervention *</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Sélectionnez votre zone</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Décrivez votre projet *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Parlez-moi de votre projet : quels espaces souhaitez-vous organiser ? Quels sont vos principaux défis ? Avez-vous des contraintes particulières ? Plus vous serez précis(e), plus mon devis sera adapté à vos besoins."
                  ></textarea>
                </div>

                <div className="form-group form-checkbox">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="acceptTerms">
                    J'accepte que mes données soient utilisées pour me recontacter concernant ma demande *
                  </label>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary contact-form__submit ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-message form-message--success">
                    <FaIcons.FaCheckCircle style={{marginRight: '8px'}} /> Votre demande a été envoyée avec succès ! Je vous recontacte dans les 24h.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-message form-message--error">
                    <FaIcons.FaTimesCircle style={{marginRight: '8px'}} /> Une erreur s'est produite. Veuillez réessayer ou me contacter directement.
                  </div>
                )}

                <p className="form-note">
                  * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta section">
        <div className="container">
          <div className="contact-cta__content">
            <h2>Besoin d'une réponse rapide ?</h2>
            <p>
              Pour les demandes urgentes ou si vous préférez un contact direct, 
              n'hésitez pas à m'appeler. Je suis à votre écoute !
            </p>
            <a href="tel:+352691210680" className="btn btn-secondary btn-large">
              <FaIcons.FaPhone style={{marginRight: '8px'}} /> Appeler maintenant : +352 691 210 680
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;