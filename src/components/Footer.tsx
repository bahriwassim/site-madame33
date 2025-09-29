import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <div className="footer__brand">
              <img src="/footer-logo.png" alt="Mircea Organise" className="footer__logo" />
              <p>Organisation & rangement pour une maison claire, apaisée et fonctionnelle.</p>
              <div className="footer__values">
                <span>Amour</span>
                <span>Famille</span>
                <span>Créativité</span>
                <span>Sécurité</span>
              </div>
            </div>
          </div>

          <div className="footer__section">
            <h4>Services</h4>
            <ul className="footer__links">
              <li><Link to="/services">Organisation cuisine</Link></li>
              <li><Link to="/services">Dressing</Link></li>
              <li><Link to="/services">Chambre enfants</Link></li>
              <li><Link to="/services">Buanderie</Link></li>
              <li><Link to="/services">Coaching en ligne</Link></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>À propos</h4>
            <ul className="footer__links">
              <li><Link to="/a-propos">Qui suis-je ?</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Mon Blog</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/liens-utiles">Liens utiles</Link></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Contact</h4>
            <div className="footer__contact">
              <WhatsAppButton 
                phoneNumber="+352691210680" 
                message="Bonjour, je souhaite obtenir des informations sur vos services d'organisation."
                variant="outline"
                size="small"
                className="footer__contact-item"
              >
Discutons sur WhatsApp              </WhatsAppButton>
              <div className="footer__zones">
                <p><strong>Zones d'intervention :</strong></p>
                <ul>
                  <li>Paris et région parisienne</li>
                                   <li>Luxembourg</li>
                  <li>En ligne (monde entier)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__newsletter">
          <div className="newsletter">
            <h4>Newsletter</h4>
            <p>Recevez nos conseils organisation et nos actualités</p>
            <form className="newsletter__form">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="newsletter__input"
              />
              <button type="submit" className="newsletter__button">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/politique-confidentialite">Politique de confidentialité</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
          
          <div className="footer__social">
            <a href="https://www.instagram.com/mircea.organise?igsh=aHdmem5sYnIwNmM3&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__copyright">
          <p>&copy; {currentYear} mircea.organise. Tous droits réservés.</p>
          <p className="footer__made-with">Ranger, c’est créer de l’espace pour vivre.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;