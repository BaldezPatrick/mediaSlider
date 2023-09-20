import { useEffect, useState } from "react";
import axios from "axios";

interface SliderItems {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [data, setData] = useState<SliderItems[]>([]);
  const itemsPerPage = 3;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        const data: SliderItems[] = res.data.slice(0, 10);
        setData(data);
      })
      .catch((err) => {
        console.error("API error: ", err);
      });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const displayedItems = data.slice(currentIndex, currentIndex + itemsPerPage);

  const limitedDsiplayedItems = displayedItems.filter((item) => item.id <= 10);

  return (
    <>
      <div className="carousel">
        <div className="prevButton">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            &lt;
          </button>
        </div>
        <div className="carousel-items">
          {limitedDsiplayedItems.map((item) => (
            <article key={item.id} className="carousel-item">
              <img src={item.url} alt={item.title} />
              <h2>{item.title}</h2>
            </article>
          ))}
        </div>
        <div className="nextButton">
          <button
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= 10}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
