// src/components/ArticleList.js
import React from "react";

// Mock article data
const articles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    excerpt:
      "Exploring how AI is transforming industries and shaping our future...",
    image: "https://via.placeholder.com/600x400?text=AI+Future",
    category: "Technology",
    date: "April 15, 2025",
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches New Agreement",
    excerpt:
      "World leaders have agreed to ambitious new targets for reducing carbon emissions...",
    image: "https://via.placeholder.com/600x400?text=Climate+Summit",
    category: "Environment",
    date: "April 14, 2025",
  },
  {
    id: 3,
    title: "New Breakthrough in Quantum Computing",
    excerpt:
      "Scientists have achieved a major milestone in quantum computing technology...",
    image: "https://via.placeholder.com/600x400?text=Quantum+Computing",
    category: "Science",
    date: "April 13, 2025",
  },
  {
    id: 4,
    title: "How to Optimize Your Work-From-Home Setup",
    excerpt:
      "Tips and tricks for creating a productive home office environment...",
    image: "https://via.placeholder.com/600x400?text=Home+Office",
    category: "Lifestyle",
    date: "April 12, 2025",
  },
];

function ArticleList() {
  return (
    <div className="articles">
      <h2>Latest Articles</h2>
      {articles.map((article) => (
        <article key={article.id} className="article-card">
          <div className="article-image">
            <img src={article.image} alt={article.title} />
          </div>
          <div className="article-content">
            <div className="article-meta">
              <span className="category">{article.category}</span>
              <span className="date">{article.date}</span>
            </div>
            <h3 className="article-title">{article.title}</h3>
            <p className="article-excerpt">{article.excerpt}</p>
            <a href={`/article/${article.id}`} className="read-more">
              Read More
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ArticleList;
