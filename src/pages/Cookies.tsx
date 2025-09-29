import React from 'react';
import '../styles/LegalPages.css';

const Cookies: React.FC = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero section">
        <div className="container">
          <h1 className="legal-hero__title">Politique de Cookies</h1>
          <p className="legal-hero__subtitle">
            Information sur l'utilisation des cookies sur notre site web
          </p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-content__wrapper">
            
            <div className="legal-section">
              <h2>1. Qu'est-ce qu'un cookie ?</h2>
              <div className="legal-section__content">
                <p>Un cookie est un petit fichier texte stocké sur votre ordinateur, tablette ou smartphone lorsque vous visitez notre site web. Les cookies nous permettent de reconnaître votre appareil et de mémoriser certaines informations sur vos préférences ou actions passées.</p>
                <p>Les cookies ne peuvent pas endommager votre ordinateur et ne contiennent aucun virus. Ils sont largement utilisés pour faire fonctionner les sites web de manière plus efficace et pour fournir des informations aux propriétaires du site.</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>2. Types de cookies utilisés</h2>
              <div className="legal-section__content">
                
                <h3>2.1 Cookies strictement nécessaires</h3>
                <p>Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés. Ils sont généralement définis en réponse à des actions que vous effectuez et qui équivalent à une demande de services.</p>
                <ul className="legal-list">
                  <li><strong>Cookies de session :</strong> maintiennent votre session active pendant votre navigation</li>
                  <li><strong>Cookies de sécurité :</strong> protègent contre les attaques et maintiennent la sécurité</li>
                  <li><strong>Cookies de préférences :</strong> mémorisent vos choix (langue, région)</li>
                </ul>

                <h3>2.2 Cookies de performance et d'analyse</h3>
                <p>Ces cookies nous permettent de comprendre comment les visiteurs interagissent avec notre site en collectant et rapportant des informations de manière anonyme.</p>
                <ul className="legal-list">
                  <li><strong>Analyse du trafic :</strong> pages visitées, durée de visite, source de trafic</li>
                  <li><strong>Optimisation :</strong> identification des pages les plus populaires</li>
                  <li><strong>Amélioration UX :</strong> détection des problèmes de navigation</li>
                </ul>

                <h3>2.3 Cookies de fonctionnalité</h3>
                <p>Ces cookies permettent au site web de se souvenir des choix que vous faites et fournissent des fonctionnalités améliorées et plus personnelles.</p>
                <ul className="legal-list">
                  <li><strong>Préférences utilisateur :</strong> thème, taille de police</li>
                  <li><strong>Fonctionnalités :</strong> sauvegarde de formulaires partiellement remplis</li>
                  <li><strong>Personnalisation :</strong> contenu adapté à vos intérêts</li>
                </ul>

              </div>
            </div>

            <div className="legal-section">
              <h2>3. Cookies tiers</h2>
              <div className="legal-section__content">
                <p>Notre site peut utiliser des services tiers qui placent leurs propres cookies :</p>
                
                <h3>3.1 Google Analytics</h3>
                <p>Nous utilisons Google Analytics pour analyser l'utilisation de notre site. Google Analytics utilise des cookies pour collecter des informations de manière anonyme sur la façon dont les visiteurs utilisent notre site.</p>
                <ul className="legal-list">
                  <li><strong>Finalité :</strong> analyse du trafic et optimisation du site</li>
                  <li><strong>Durée :</strong> jusqu'à 2 ans</li>
                  <li><strong>Opt-out :</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="legal-link">Plugin de désactivation Google Analytics</a></li>
                </ul>

                <h3>3.2 FormSubmit</h3>
                <p>Nous utilisons FormSubmit pour traiter nos formulaires de contact et de newsletter.</p>
                <ul className="legal-list">
                  <li><strong>Finalité :</strong> traitement sécurisé des formulaires</li>
                  <li><strong>Durée :</strong> session uniquement</li>
                  <li><strong>Données :</strong> informations du formulaire uniquement</li>
                </ul>

                <h3>3.3 Réseaux sociaux</h3>
                <p>Si vous partagez du contenu sur les réseaux sociaux, des cookies peuvent être placés par ces plateformes.</p>
                <ul className="legal-list">
                  <li><strong>Instagram :</strong> boutons de partage et widgets</li>
                  <li><strong>Facebook :</strong> intégration sociale</li>
                  <li><strong>WhatsApp :</strong> boutons de contact</li>
                </ul>

              </div>
            </div>

            <div className="legal-section">
              <h2>4. Durée de conservation</h2>
              <div className="legal-section__content">
                <p>Les cookies ont différentes durées de vie :</p>
                <ul className="legal-list">
                  <li><strong>Cookies de session :</strong> supprimés à la fermeture du navigateur</li>
                  <li><strong>Cookies persistants :</strong> restent sur votre appareil pendant une durée déterminée</li>
                  <li><strong>Cookies d'analyse :</strong> généralement 2 ans maximum</li>
                  <li><strong>Cookies de préférences :</strong> jusqu'à 1 an</li>
                </ul>
              </div>
            </div>

            <div className="legal-section">
              <h2>5. Gestion des cookies</h2>
              <div className="legal-section__content">
                
                <h3>5.1 Paramètres du navigateur</h3>
                <p>Vous pouvez contrôler et gérer les cookies dans votre navigateur :</p>
                <ul className="legal-list">
                  <li><strong>Chrome :</strong> Paramètres {'>'} Confidentialité et sécurité {'>'} Cookies</li>
                  <li><strong>Firefox :</strong> Options {'>'} Vie privée et sécurité {'>'} Cookies</li>
                  <li><strong>Safari :</strong> Préférences {'>'} Confidentialité {'>'} Cookies</li>
                  <li><strong>Edge :</strong> Paramètres {'>'} Cookies et autorisations de site</li>
                </ul>

                <h3>5.2 Désactivation des cookies</h3>
                <p>Vous pouvez désactiver les cookies, mais cela peut affecter le fonctionnement de certaines parties de notre site :</p>
                <ul className="legal-list">
                  <li>Perte de préférences personnalisées</li>
                  <li>Nécessité de ressaisir des informations</li>
                  <li>Fonctionnalités limitées</li>
                </ul>

                <h3>5.3 Suppression des cookies</h3>
                <p>Vous pouvez supprimer les cookies déjà stockés sur votre appareil via les paramètres de votre navigateur. Cela ne supprime pas les cookies qui seront recréés lors de votre prochaine visite.</p>

              </div>
            </div>

            <div className="legal-section">
              <h2>6. Cookies et données personnelles</h2>
              <div className="legal-section__content">
                <p>La plupart des cookies que nous utilisons ne collectent pas d'informations permettant de vous identifier personnellement. Cependant, certains cookies peuvent contenir des données personnelles :</p>
                <ul className="legal-list">
                  <li>Adresse IP (anonymisée dans Google Analytics)</li>
                  <li>Informations de navigation liées à votre session</li>
                  <li>Préférences de personnalisation</li>
                </ul>
                <p>Ces données sont traitées conformément à notre <a href="/politique-confidentialite" className="legal-link">politique de confidentialité</a>.</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>7. Consentement</h2>
              <div className="legal-section__content">
                <p>Conformément à la réglementation, nous demandons votre consentement pour l'utilisation de cookies non essentiels :</p>
                <ul className="legal-list">
                  <li>Vous pouvez accepter ou refuser les cookies lors de votre première visite</li>
                  <li>Vous pouvez modifier vos préférences à tout moment</li>
                  <li>Les cookies strictement nécessaires ne nécessitent pas de consentement</li>
                </ul>
              </div>
            </div>

            <div className="legal-section">
              <h2>8. Modifications de cette politique</h2>
              <div className="legal-section__content">
                <p>Cette politique de cookies peut être mise à jour pour refléter les changements dans notre utilisation des cookies ou pour d'autres raisons opérationnelles, légales ou réglementaires.</p>
                <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>9. Contact</h2>
              <div className="legal-section__content">
                <p>Pour toute question concernant notre utilisation des cookies :</p>
                <ul className="legal-contact-list">
                  <li><strong>Email :</strong> mircea.delgado@hotmail.com</li>
                  <li><strong>Téléphone :</strong> +352 691 210 680</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
