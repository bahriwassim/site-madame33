import React from 'react';
import '../styles/LegalPages.css';

const MentionsLegales: React.FC = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero section">
        <div className="container">
          <h1 className="legal-hero__title">Mentions Légales</h1>
          <p className="legal-hero__subtitle">
            Informations légales concernant le site web Mircea Organise
          </p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-content__wrapper">
            
            <div className="legal-section">
              <h2>1. Éditeur du site</h2>
              <div className="legal-section__content">
                <p><strong>Raison sociale :</strong> Mircea Organise</p>
                <p><strong>Activité :</strong> Services d'organisation et de rangement à domicile</p>
                <p><strong>Email :</strong> mircea.delgado@hotmail.com</p>
                <p><strong>Téléphone :</strong> +352 691 210 680</p>
                <p><strong>Zones d'intervention :</strong> Paris et région parisienne, Luxembourg, En ligne</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>2. Hébergement</h2>
              <div className="legal-section__content">
                <p>Ce site est hébergé par un fournisseur de services d'hébergement web professionnel.</p>
                <p>Les données personnelles collectées sont stockées de manière sécurisée conformément aux réglementations en vigueur.</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>3. Propriété intellectuelle</h2>
              <div className="legal-section__content">
                <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
                <p>La marque "Mircea Organise" et le logo sont des marques déposées. Toute reproduction non autorisée de ces marques, dessins et modèles constitue une contrefaçon passible de sanctions pénales.</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>4. Responsabilité</h2>
              <div className="legal-section__content">
                <p>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.</p>
                <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse mircea.delgado@hotmail.com, en décrivant le problème de la manière la plus précise possible.</p>
                <p>Mircea Organise ne saurait être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site mircea-organise.com, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>5. Liens hypertextes</h2>
              <div className="legal-section__content">
                <p>Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant sur ces liens, il sortira du site mircea-organise.com. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>6. Collecte et traitement des données personnelles</h2>
              <div className="legal-section__content">
                <p>Conformément à la loi "informatique et libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.</p>
                <p>Pour exercer ce droit, contactez-nous à l'adresse : mircea.delgado@hotmail.com</p>
                <p>Les données personnelles collectées sur ce site sont destinées exclusivement à Mircea Organise et ne seront en aucun cas transmises à des tiers sans votre accord explicite.</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>7. Cookies</h2>
              <div className="legal-section__content">
                <p>Ce site utilise des cookies pour améliorer votre expérience de navigation. Pour plus d'informations, consultez notre <a href="/cookies" className="legal-link">politique de cookies</a>.</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>8. Droit applicable</h2>
              <div className="legal-section__content">
                <p>Tout litige en relation avec l'utilisation du site mircea-organise.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>9. Contact</h2>
              <div className="legal-section__content">
                <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
                <ul className="legal-contact-list">
                  <li><strong>Email :</strong> mircea.delgado@hotmail.com</li>
                  <li><strong>Téléphone :</strong> +352 691 210 680</li>
                  <li><strong>WhatsApp :</strong> +352 691 210 680</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
