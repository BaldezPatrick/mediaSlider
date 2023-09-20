import { useItemContext } from "../context/sliderItemContext";
import "./Article.css";

const Article: React.FC = () => {
  const { id, title, url, thumbnailUrl } = useItemContext();
  return (
    <>
      <section className="articleWrapper">
        <h1>Your selected item details</h1>
        <div className="articleTable">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{title}</td>
              </tr>
            </tbody>
          </table>
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
            <div className="articleImage">
              <img
                src={thumbnailUrl ? thumbnailUrl : "No image content"}
                alt={thumbnailUrl ? thumbnailUrl : "No image content info"}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Article;
