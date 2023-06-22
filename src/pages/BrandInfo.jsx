import "./BrandInfo.css";
{
  /*Link in react-router-dom*/
}
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import CollectionCard from "../components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";

function BrandInfo() {
  const params = useParams();
  const [lines, setLines] = useState(null);

  const slug = params.brand;

  useEffect(() => {
    const getLines = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/${slug}/lines`,
      });
      setLines(response.data);
    };
    getLines();
  }, [lines]);

  return (
    lines && (
      <>
        <div className="brand-info-container">
          <div className="background-logo-collections">
            <div className="brand-info-logo-container">
              <img
                className="brand-info-logo"
                src={`${import.meta.env.VITE_API_DOMAIN}${lines[0].brand.logo}`}
                alt="brand-logo"
              />
            </div>
            <h2 className="brand-info-subtitle">COLLECTIONS</h2>
          </div>
          <div className="collection-container-gap d-flex flex-column">
            {lines.map((line) => (
              <CollectionCard
                key={line._id}
                name={line.name}
                img={line.image}
                slug={slug}
                lineSlug={line.slug}
              />
            ))}
          </div>

          <div>
            <h2 className="brand-info-subtitle">NEWS</h2>
            <div className="brand-info-cards d-flex">
              {lines[0].brand.articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default BrandInfo;
