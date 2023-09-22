import { useItemContext } from "../context/sliderItemContext";
import "./Article.css";
import Button from "../components/Button/button";
import { useNavigate } from "react-router-dom";

const Article: React.FC = () => {
  const { id, title, url, body } = useItemContext();
  const navigate = useNavigate();
  return (
    <>
      <section className="articleWrapper">
        <Button
          className={"goBackButton"}
          textButton={"<"}
          handleClick={() => navigate(-1)}
        />
        <h1>Detalhes do item selecionado</h1>
        <div className="articleList">
          <ul>
            <li>
              <strong>ID:</strong> {id}
            </li>
            <li>
              <strong>Título:</strong> {title}
            </li>
            <li>
              <strong>Corpo da informação:</strong> {body}
            </li>
          </ul>
        </div>
        <section className="articleImagesWrapper">
          <h2>Imagem</h2>
          <div className="articleImagesItems">
            <div className="articleImage">
              <img
                src={url ? url : "No image content"}
                alt={url ? url : "No image content info"}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Article;
