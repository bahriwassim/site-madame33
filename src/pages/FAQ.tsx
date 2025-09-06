import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqCategories = [
    {
      title: 'Services & Prestations',
      items: [
        {
          id: 1,
          question: 'Combien de temps dure une prestation d\'organisation ?',
          answer: 'La durée varie selon la taille de l\'espace et vos besoins. En général, comptez 3h pour une pièce standard (cuisine, chambre), 6h pour un espace plus grand (salon, dressing familial) ou une journée complète pour plusieurs pièces. Je vous donne une estimation précise lors de notre premier échange.'
        },
        {
          id: 2,
          question: 'Dois-je acheter du matériel de rangement avant votre venue ?',
          answer: 'Non, je vous recommande d\'attendre notre première rencontre. Après analyse de vos espaces et de vos habitudes, je vous conseillerai précisément sur le matériel adapté. Cela évite les achats inutiles et garantit des solutions durables.'
        },
        {
          id: 3,
          question: 'Proposez-vous des prestations le weekend ?',
          answer: 'Oui, je propose des créneaux le samedi pour s\'adapter à vos contraintes professionnelles. Les dimanches sont réservés aux urgences ou projets spéciaux. N\'hésitez pas à me contacter pour discuter de vos disponibilités.'
        },
        {
          id: 4,
          question: 'Que se passe-t-il si je ne suis pas satisfait(e) du résultat ?',
          answer: 'Votre satisfaction est ma priorité. Si le résultat ne correspond pas à vos attentes, je m\'engage à revenir gratuitement pour ajuster l\'organisation. Un suivi est inclus dans toutes mes prestations pour garantir la durabilité des solutions mises en place.'
        }
      ]
    },
    {
      title: 'Confidentialité & Respect',
      items: [
        {
          id: 5,
          question: 'Comment garantissez-vous la confidentialité ?',
          answer: 'La confidentialité est au cœur de mon métier. Je signe un engagement de discrétion, ne prends jamais de photos sans autorisation et ne partage aucune information personnelle. Votre intimité et votre confiance sont absolument respectées.'
        },
        {
          id: 6,
          question: 'Allez-vous juger le désordre de ma maison ?',
          answer: 'Absolument pas ! Le désordre fait partie de la vie et chaque situation a ses raisons. Mon approche est bienveillante et sans jugement. Mon rôle est de vous accompagner avec empathie vers plus d\'organisation et de sérénité.'
        },
        {
          id: 7,
          question: 'Puis-je rester présent(e) pendant la prestation ?',
          answer: 'Bien sûr ! Votre présence est même recommandée, surtout pour les décisions de tri. Nous travaillons ensemble pour que les solutions correspondent parfaitement à vos habitudes et préférences. Vous restez maître de vos choix.'
        }
      ]
    },
    {
      title: 'Tarifs & Modalités',
      items: [
        {
          id: 8,
          question: 'Comment sont calculés vos tarifs ?',
          answer: 'Mes tarifs dépendent de la durée d\'intervention et de la complexité du projet. À domicile : 40-60€/heure selon la zone. En ligne : 50-70€ la séance. Je propose aussi des forfaits pour les projets plus importants. Devis gratuit et personnalisé.'
        },
        {
          id: 9,
          question: 'Acceptez-vous les paiements échelonnés ?',
          answer: 'Oui, pour les projets importants (plusieurs jours), je peux proposer un échelonnement du paiement. Nous discutons ensemble des modalités qui vous conviennent le mieux lors de l\'établissement du devis.'
        },
        {
          id: 10,
          question: 'Y a-t-il des frais de déplacement ?',
          answer: 'Les déplacements sont inclus dans mes tarifs pour Paris intramuros, Luxembourg ville et Clouange. Pour les zones plus éloignées, des frais de déplacement peuvent s\'appliquer (calculés au réel). Je vous informe toujours à l\'avance.'
        }
      ]
    },
    {
      title: 'Coaching en ligne',
      items: [
        {
          id: 11,
          question: 'Comment se déroule une séance de coaching en ligne ?',
          answer: 'Nous nous connectons via Zoom ou Teams. Vous me montrez votre espace en visio, nous analysons ensemble la situation et je vous guide étape par étape. Je vous envoie ensuite un plan d\'action personnalisé avec des conseils pratiques.'
        },
        {
          id: 12,
          question: 'Le coaching en ligne est-il aussi efficace qu\'à domicile ?',
          answer: 'Oui ! Le coaching en ligne permet une grande flexibilité et des suivis réguliers. C\'est idéal pour l\'accompagnement, la motivation et les conseils personnalisés. Pour les gros projets de tri, la prestation à domicile reste plus adaptée.'
        },
        {
          id: 13,
          question: 'Proposez-vous un suivi après la séance ?',
          answer: 'Absolument ! Chaque séance inclut un suivi par email ou WhatsApp. Pour les packs mensuels, je propose 4 séances + support continu. L\'objectif est de vous accompagner vers l\'autonomie complète.'
        }
      ]
    },
    {
      title: 'Résultats & Durabilité',
      items: [
        {
          id: 14,
          question: 'Combien de temps les résultats durent-ils ?',
          answer: 'Avec les bonnes méthodes et un minimum de maintenance, les résultats sont durables. Je vous forme aux techniques de maintien et fournis des guides personnalisés. Un suivi à 1 mois est inclus pour ajuster si nécessaire.'
        },
        {
          id: 15,
          question: 'Que faire si le désordre revient ?',
          answer: 'C\'est normal au début ! L\'organisation est un apprentissage. Je propose des séances de "révision" à tarif préférentiel et des conseils pour retrouver rapidement l\'équilibre. L\'important est de ne pas abandonner.'
        },
        {
          id: 16,
          question: 'Travaillez-vous avec les enfants ?',
          answer: 'Oui ! J\'adore impliquer les enfants dans l\'organisation de leur espace. J\'adapte mes méthodes à leur âge avec des systèmes ludiques et des pictogrammes. C\'est excellent pour développer leur autonomie et leur sens des responsabilités.'
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <section className="faq-hero section">
        <div className="container">
          <h1 className="faq-hero__title">Questions Fréquentes</h1>
          <p className="faq-hero__subtitle">
            Retrouvez les réponses aux questions les plus courantes sur mes services d'organisation
          </p>
        </div>
      </section>

      <section className="faq-content section">
        <div className="container">
          <div className="faq-intro">
            <div className="faq-intro__content">
              <h2>Vous avez des questions ?</h2>
              <p>
                Voici les réponses aux questions que me posent le plus souvent mes clients. 
                Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à me contacter 
                directement pour un échange personnalisé.
              </p>
              <div className="faq-intro__contact">
                <a href="tel:+352691210680" className="btn btn-primary">
                  📞 +352 691 210 680
                </a>
                <a href="/contact" className="btn btn-secondary">
                  Poser une question
                </a>
              </div>
            </div>
          </div>

          <div className="faq-categories">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="faq-category">
                <h2 className="faq-category__title">{category.title}</h2>
                <div className="faq-items">
                  {category.items.map(item => (
                    <div 
                      key={item.id} 
                      className={`faq-item ${openItems.includes(item.id) ? 'faq-item--open' : ''}`}
                    >
                      <button
                        className="faq-item__question"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={openItems.includes(item.id)}
                      >
                        <span>{item.question}</span>
                        <span className="faq-item__icon">
                          {openItems.includes(item.id) ? '−' : '+'}
                        </span>
                      </button>
                      <div className="faq-item__answer">
                        <div className="faq-item__answer-content">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <div className="faq-cta__content">
              <h2>Vous ne trouvez pas votre réponse ?</h2>
              <p>
                Contactez-moi directement pour discuter de vos besoins spécifiques. 
                Je serai ravie de répondre à toutes vos questions personnellement.
              </p>
              <div className="faq-cta__buttons">
                <a href="/contact" className="btn btn-primary">
                  Me contacter
                </a>
                <a href="tel:+352691210680" className="btn btn-secondary">
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;