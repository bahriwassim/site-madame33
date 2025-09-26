import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import WhatsAppButton from '../components/WhatsAppButton';
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
          answer: 'La durée dépend de la taille de l’espace et de vos besoins. Comptez en général entre une demi-journée et une journée par pièce. Une estimation précise est donnée dès notre premier échange.'
        },
        {
          id: 2,
          question: 'Dois-je acheter du matériel de rangement avant votre venue ?',
          answer: 'Non, mieux vaut attendre notre première rencontre. Mircea Organise vous conseille le matériel adapté pour éviter les achats inutiles et garantir des solutions durables.'
        },
        {
          id: 3,
          question: 'Proposez-vous des prestations le weekend ?',
          answer: 'Oui, le samedi uniquement. Pour toute demande particulière, contactez-nous afin de trouver le créneau qui vous convient.'
        },
        {
          id: 4,
          question: 'Que se passe-t-il si je ne suis pas satisfait(e) du résultat ?',
          answer: 'Votre satisfaction est notre priorité. Nous ajustons les solutions si besoin, avec un suivi inclus pendant un mois pour garantir des résultats durables.'
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
      title: 'Modalités & Tarification',
      items: [
        {
          id: 8,
          question: 'Comment sont calculés vos tarifs ?',
          answer: 'Ils dépendent de la durée, de la taille de l’espace et de la complexité du projet. Des forfaits personnalisés peuvent être proposés et chaque devis est gratuit et adapté à vos besoins.'
        },
        {
          id: 9,
          question: 'Acceptez-vous les paiements échelonnés ?',
          answer: 'Oui, pour les projets de plusieurs jours. Les modalités sont définies ensemble au moment du devis.'
        },
        {
          id: 10,
          question: 'Y a-t-il des frais de déplacement ?',
          answer: 'Oui, les frais de déplacement ne sont pas inclus dans les prestations. Ils sont calculés selon la zone et toujours indiqués à l’avance, sans surprise.'
        }
      ]
    },
    {
      title: 'Coaching en ligne',
      items: [
        {
          id: 11,
          question: 'Comment se déroule une séance de coaching en ligne ?',
          answer: 'En visioconférence via Zoom ou Teams. Vous présentez votre espace, nous analysons ensemble, puis vous recevez un plan d’action personnalisé.'
        },
        {
          id: 12,
          question: 'Le coaching en ligne est-il aussi efficace qu\'à domicile ?',
          answer: 'Oui, il offre flexibilité et suivi régulier. Pour les grands projets (gros tri, plusieurs pièces), l’intervention à domicile reste préférable.'
        },
        {
          id: 13,
          question: 'Proposez-vous un suivi après la séance (en ligne ou à domicile)?',
          answer: 'Oui, chaque séance inclut un suivi par e-mail ou WhatsApp pendant un mois afin de répondre à vos questions et vous guider.'
        }
      ]
    },
    {
      title: 'Résultats & Durabilité',
      items: [
        {
          id: 14,
          question: 'Combien de temps les résultats durent-ils ?',
          answer: 'Avec les bonnes méthodes, ils durent dans le temps. Un suivi d’un mois après la prestation aide à maintenir vos nouvelles habitudes.'
        },
        {
          id: 15,
          question: 'Que faire si le désordre revient ?',
          answer: 'C’est normal au début. Mircea Organise propose des séances de suivi à tarif préférentiel et des conseils pratiques pour retrouver rapidement l’équilibre.'
        },
        {
          id: 16,
          question: 'Travaillez-vous avec les enfants ?',
          answer: 'Oui, avec des méthodes ludiques et adaptées à leur âge (pictogrammes, codes couleurs). Cela développe leur autonomie et facilite la vie de toute la famille.'
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
                <WhatsAppButton 
                  phoneNumber="+352691210680" 
                  message="Bonjour, j'ai une question concernant vos services d'organisation."
                  variant="primary"
                  size="medium"
                >
                  +352 691 210 680
                </WhatsAppButton>
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
                <WhatsAppButton 
                  phoneNumber="+352691210680" 
                  message="Bonjour, je souhaite obtenir des informations sur vos services d'organisation."
                  variant="secondary"
                  size="medium"
                >
                  Contacter par WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;