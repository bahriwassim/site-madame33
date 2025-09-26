import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogArticles, getBlogArticlesByCategory } from '../data/blogData';
import '../styles/Blog.css';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les articles', count: blogArticles.length },
    { id: 'cuisine', name: 'Cuisine', count: blogArticles.filter(post => post.category === 'cuisine').length },
    { id: 'dressing', name: 'Dressing', count: blogArticles.filter(post => post.category === 'dressing').length },
    { id: 'enfants', name: 'Enfants', count: blogArticles.filter(post => post.category === 'enfants').length },
    { id: 'methodes', name: 'Méthodes', count: blogArticles.filter(post => post.category === 'methodes').length },
    { id: 'conseils', name: 'Conseils', count: blogArticles.filter(post => post.category === 'conseils').length },
    { id: 'famille', name: 'Famille', count: blogArticles.filter(post => post.category === 'famille').length }
  ];

  const filteredPosts = getBlogArticlesByCategory(selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const featuredPost = blogArticles[0];
  const recentPosts = blogArticles.slice(1, 4);

  return (
    <div className="blog-page">
      <section className="blog-hero section">
        <div className="container">
          <h1 className="blog-hero__title">Mon Blog</h1>
          <p className="blog-hero__subtitle">
            Conseils, astuces et méthodes pour une maison organisée et sereine
          </p>
        </div>
      </section>

      <section className="blog-featured section">
        <div className="container">
          <h2 className="section-title">Article vedette</h2>
          <div className="featured-post">
            <div className="featured-post__image">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className="featured-post__category">{featuredPost.category}</div>
            </div>
            <div className="featured-post__content">
              <div className="featured-post__meta">
                <span className="featured-post__date">{formatDate(featuredPost.date)}</span>
                <span className="featured-post__read-time">⏱️ {featuredPost.readTime} de lecture</span>
              </div>
              <h3 className="featured-post__title">{featuredPost.title}</h3>
              <p className="featured-post__excerpt">{featuredPost.excerpt}</p>
              <div className="featured-post__tags">
                {featuredPost.tags.map((tag, i) => (
                  <span key={i} className="featured-post__tag">#{tag}</span>
                ))}
              </div>
              <Link to={`/blog/${featuredPost.id}`} className="btn btn-primary">
                Lire l'article
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-content section">
        <div className="container">
          <div className="blog-layout">
            <div className="blog-main">
              <div className="blog-filters">
                <h3>Catégories</h3>
                <div className="blog-filter-buttons">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`blog-filter ${selectedCategory === category.id ? 'blog-filter--active' : ''}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="blog-posts">
                {filteredPosts.map(post => (
                  <article key={post.id} className="blog-post-card">
                    <div className="blog-post-card__image">
                      <img src={post.image} alt={post.title} />
                      <div className="blog-post-card__category">{post.category}</div>
                    </div>
                    <div className="blog-post-card__content">
                      <div className="blog-post-card__meta">
                        <span className="blog-post-card__date">{formatDate(post.date)}</span>
                        <span className="blog-post-card__read-time">⏱️ {post.readTime}</span>
                      </div>
                      <h3 className="blog-post-card__title">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="blog-post-card__excerpt">{post.excerpt}</p>
                      <div className="blog-post-card__tags">
                        {post.tags.map((tag, i) => (
                          <span key={i} className="blog-post-card__tag">#{tag}</span>
                        ))}
                      </div>
                      <Link to={`/blog/${post.id}`} className="blog-post-card__cta">
                        Lire la suite →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="blog-sidebar">
              <div className="blog-sidebar__section">
                <h3>Articles récents</h3>
                <div className="recent-posts">
                  {recentPosts.map(post => (
                    <div key={post.id} className="recent-post">
                      <div className="recent-post__image">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="recent-post__content">
                        <h4>
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <span className="recent-post__date">{formatDate(post.date)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="blog-sidebar__section">
                <h3>Newsletter</h3>
                <p>Recevez mes derniers conseils organisation directement dans votre boîte mail.</p>
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Votre email"
                    className="newsletter-form__input"
                  />
                  <button type="submit" className="newsletter-form__button">
                    S'abonner
                  </button>
                </form>
              </div>

              <div className="blog-sidebar__section">
                <h3>Besoin d'aide ?</h3>
                <div className="help-card">
                  <p>Vous avez des questions sur l'organisation de votre maison ?</p>
                  <Link to="/contact" className="btn btn-secondary">
                    Me contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;