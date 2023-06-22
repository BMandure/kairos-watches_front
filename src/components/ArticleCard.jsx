import { useState } from "react";
import { Card } from "react-bootstrap";
import ArticleModal from "./ArticleModal";
import "./ArticleCard.css";

function ArticleCard({ article }) {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };
  const resultContent = article.content.substring(0, 100) + "...";
  return (
    <Card className="article-card">
      <Card.Img
        variant="top"
        src={`${import.meta.env.VITE_API_DOMAIN}${article.cardImg}`}
        alt="Article Image"
        className="article-card-image"
      />

      <Card.Body className="article-body">
        <Card.Title className="article-card-title">{article.title}</Card.Title>
        <Card.Text className="article-card-content">{resultContent}</Card.Text>
        <ArticleModal article={article} />
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
