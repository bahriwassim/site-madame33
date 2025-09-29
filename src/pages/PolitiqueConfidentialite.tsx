import React from 'react';
import '../styles/LegalPages.css';

const PolitiqueConfidentialite: React.FC = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero section">
        <div className="container">
          <h1 className="legal-hero__title">Politique de Confidentialité</h1>
          <p className="legal-hero__subtitle">
            Protection de vos données personnelles et respect de votre vie privée
          </p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-content__wrapper">
            
            <div className="legal-section">
              <h2>1. Introduction</h2>
              <div className="legal-section__content">
                <p>Mircea Organise s'engage à protéger votre vie privée et vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web et nos services.</p>
                <p>Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi française "informatique et libertés".</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>2. Responsable du traitement</h2>
              <div className="legal-section__content">
                <p><strong>Mircea Organise</strong></p>
                <p><strong>Email :</strong> mircea.delgado@hotmail.com</p>
                <p><strong>Téléphone :</strong> +352 691 210 680</p>
                <p><strong>Activité :</strong> Services d'organisation et de rangement à domicile</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>3. Données collectées</h2>
              <div className="legal-section__content">
                <p>Nous collectons les données suivantes :</p>
                <ul className="legal-list">
                  <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                  <li><strong>Données de localisation :</strong> adresse pour les interventions à domicile</li>
                  <li><strong>Données de communication :</strong> messages échangés via formulaire de contact ou WhatsApp</li>
                  <li><strong>Données de navigation :</strong> pages visitées, durée de visite, source de trafic (via cookies)</li>
                  <li><strong>Données de newsletter :</strong> adresse email pour l'envoi de conseils et actualités</li>
                </ul>
              </div>
            </div>

            <div className="legal-section">
              <h2>4. Finalités du traitement</h2>
              <div className="legal-section__content">
                <p>Vos données sont utilisées pour :</p>
                <ul className="legal-list">
                  <li>Répondre à vos demandes de devis et de contact</li>
                  <li>Organiser et réaliser nos interventions d'organisation</li>
                  <li>Vous envoyer des conseils personnalisés par newsletter</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                  <li>Gérer la relation client et le suivi post-intervention</li>
                </ul>
              </div>
            </div>

            <div className="legal-section">
              <h2>5. Base légale du traitement</h2>
              <div className="legal-section__content">
                <p>Le traitement de vos données repose sur :</p>
                <ul className="legal-list">
                  <li><strong>Votre consentement</strong> pour la newsletter et les cookies non essentiels</li>
                  <li><strong>L'exécution du contrat</strong> pour la réalisation de nos services</li>
                  <li><strong>L'intérêt légitime</strong> pour l'amélioration de nos services</li>
                  <li><strong>L'obligation légale</strong> pour la conservation des données comptables</li>
                </ul>
              </div>
            </div>

            <div className="legal-section">
              <h2>6. Durée de conservation</h2>
              <div className="legal-section__content">
                <p>Nous conservons vos données pendant les durées suivantes :</p>
                <ul className="legal-list">
                  <li><strong>Données clients :</strong> 3 ans après la dernière intervention</li>
                  <li><strong>Données de contact :</strong> 3 ans après le dernier échange</li>
                  <li><strong>Newsletter :</strong> jusqu'à désinscription</li>
                  <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
                  <li><strong>Cookies :</strong> 13 mois maximum</li>
                </ul>
              </div>
            </div>

            <div className="legal-section">
              <h2>7. Partage des données</h2>
              <div className="legal-section__content">
                <p>Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement dans les cas suivants :</p>
                <ul className="legal-list">
                  <li>Avec votre consentement explicite</li>
                  <li>Avec nos prestataires techniques (hébergement, email) sous contrat de confidentialité</li>
                  <li>En cas d'obligation légale ou de demande des autorités compétentes</li>
                </ul>
              </div>
            </div>

            <div className="legal-section">
              <h2>8. Sécurité des données</h2>
              <div className="legal-section__content">
                <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :</p>
                <ul className="legal-list">
                  <li>Chiffrement des données sensibles</li>
                  <li>Accès restreint aux données personnelles</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                  <li>Formation du personnel à la protection des données</li>
                  <li>Surveillance et mise à jour des systèmes de sécurité</li>
                </ul>
              </div>
            </div>

            <div className="legal-section">
              <h2>9. Vos droits</h2>
              <div className="legal-section__content">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="legal-list">
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                  <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                  <li><strong>Droit d'effacement :</strong> supprimer vos données (droit à l'oubli)</li>
                  <li><strong>Droit à la limitation :</strong> restreindre le traitement</li>
                  <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                  <li><strong>Droit de retrait du consentement :</strong> à tout moment</li>
                </ul>
                <p>Pour exercer ces droits, contactez-nous à : mircea.delgado@hotmail.com</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>10. Cookies</h2>
              <div className="legal-section__content">
                <p>Notre site utilise des cookies pour améliorer votre expérience. Pour plus d'informations, consultez notre <a href="/cookies" className="legal-link">politique de cookies</a>.</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>11. Modifications</h2>
              <div className="legal-section__content">
                <p>Cette politique de confidentialité peut être modifiée. Toute modification sera publiée sur cette page avec la date de mise à jour.</p>
                <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>12. Contact et réclamations</h2>
              <div className="legal-section__content">
                <p>Pour toute question concernant cette politique ou pour exercer vos droits :</p>
                <ul className="legal-contact-list">
                  <li><strong>Email :</strong> mircea.delgado@hotmail.com</li>
                  <li><strong>Téléphone :</strong> +352 691 210 680</li>
                </ul>
                <p>Vous pouvez également adresser une réclamation à la CNIL (Commission Nationale de l'Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialite;
