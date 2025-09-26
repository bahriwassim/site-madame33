import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogArticleById, getRecentBlogArticles } from '../data/blogData';
import '../styles/BlogArticle.css';

const BlogArticle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const articleId = id ? parseInt(id, 10) : null;

  if (!articleId) {
    return <Navigate to="/blog" replace />;
  }

  const article = getBlogArticleById(articleId);
  const recentArticles = getRecentBlogArticles(3).filter(a => a.id !== articleId);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    const paragraphs = content.split('\n\n');

    return paragraphs.map((paragraph, index) => {
      // Handle headings
      if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="article-heading">{paragraph.replace('## ', '')}</h2>;
      }

      // Handle bullet points
      if (paragraph.includes('- ')) {
        const lines = paragraph.split('\n');
        const listItems = lines.filter(line => line.startsWith('- '));
        const otherContent = lines.filter(line => !line.startsWith('- ')).join(' ');

        return (
          <div key={index}>
            {otherContent && <p className="article-text">{otherContent}</p>}
            <ul className="article-list">
              {listItems.map((item, i) => (
                <li key={i}>{item.replace('- ', '')}</li>
              ))}
            </ul>
          </div>
        );
      }

      // Handle images
      if (paragraph.includes('![')) {
        const imageMatch = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
        if (imageMatch) {
          const [, altText, imageSrc] = imageMatch;
          return (
            <div key={index} className="article-image-container">
              <img src={imageSrc} alt={altText} className="article-inline-image" />
            </div>
          );
        }
      }

      // Handle bold text zones
      if (paragraph.includes('**')) {
        const parts = paragraph.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={index} className="article-text">
            {parts.map((part, i) =>
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
          </p>
        );
      }

      // Regular paragraphs
      return paragraph.trim() ? <p key={index} className="article-text">{paragraph}</p> : null;
    });
  };

  return (
    <div className="blog-article-page">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Accueil</Link> →
          <Link to="/blog">Blog</Link> →
          <span>{article.title}</span>
        </div>
      </div>

      <article className="blog-article">
        <div className="container">
          <div className="blog-article-layout">
            <div className="blog-article-main">
              {/* Article Header */}
              <header className="blog-article-header">
                <div className="blog-article-meta">
                  <span className="blog-article-category">{article.category}</span>
                  <span className="blog-article-date">{formatDate(article.date)}</span>
                  <span className="blog-article-read-time">⏱️ {article.readTime} de lecture</span>
                </div>

                <h1 className="blog-article-title">{article.title}</h1>

                <div className="blog-article-tags">
                  {article.tags.map((tag, i) => (
                    <span key={i} className="blog-article-tag">#{tag}</span>
                  ))}
                </div>
              </header>

              {/* Article Image */}
              <div className="blog-article-image">
                <img src={article.image} alt={article.title} />
              </div>

              {/* Article Content */}
              <div className="blog-article-content">
                {formatContent(article.content)}
              </div>

              {/* Author Info */}
              <div className="blog-article-author">
                <div className="author-info">
                  <div className="author-avatar">
                    <img src="/publicimages/qui.jpg" alt="Mircea" />
                  </div>
                  <div className="author-details">
                    <h3>Mircea</h3>
                    <p>Home organiser passionnée de rangement et de simplicité.</p>
                  </div>
                </div>
              </div>

              {/* Navigation to other articles */}
              <div className="blog-article-navigation">
                <Link to="/blog" className="btn btn-secondary">
                  ← Retour au blog
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="blog-article-sidebar">
              <div className="blog-sidebar__section">
                <h3>Articles récents</h3>
                <div className="recent-posts">
                  {recentArticles.map(post => (
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
      </article>
    </div>
  );
};

export default BlogArticle;