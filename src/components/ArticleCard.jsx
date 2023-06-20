import { useState } from "react";
import { Card } from "react-bootstrap";
import ArticleModal from "./ArticleModal";

function ArticleCard({ article }) {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  return (
    <Card style={{ width: "20rem" }} className="brand-info-card">
      <Card.Img variant="top" src={article.cardImg} alt="Article Image" />

      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.articleContent}</Card.Text>
        <ArticleModal article={article} />
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
