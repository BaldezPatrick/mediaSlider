import { useItemContext } from "../context/sliderItemContext";
import "./Article.css";

const Article: React.FC = () => {
  const { id, title, url, thumbnailUrl, body } = useItemContext();
  return (
    <>
      <section className="articleWrapper">
        <h1>Your selected item details</h1>
        <div className="articleList">
          <ul>
            <li>
              <strong>ID:</strong> {id}
            </li>
            <li>
              <strong>Title:</strong> {title}
            </li>
            <li>
              <strong>Body:</strong> {body}
            </li>
          </ul>
        </div>
        <section className="articleImagesWrapper">
          <h2>Images</h2>
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
