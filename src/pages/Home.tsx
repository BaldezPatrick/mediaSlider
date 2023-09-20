import { useState } from "react";

const fakeData = [
  {
    id: 1,
    title: "Item 1",
    description: "Descrição do Item 1",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Item 2",
    description: "Descrição do Item 2",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Item 3",
    description: "Descrição do Item 3",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "Item 4",
    description: "Descrição do Item 4",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    title: "Item 5",
    description: "Descrição do Item 5",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    title: "Item 6",
    description: "Descrição do Item 6",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 7,
    title: "Item 7",
    description: "Descrição do Item 7",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 8,
    title: "Item 8",
    description: "Descrição do Item 8",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 9,
    title: "Item 9",
    description: "Descrição do Item 9",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 10,
    title: "Item 10",
    description: "Descrição do Item 10",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 11,
    title: "Item 11",
    description: "Descrição do Item 11",
    image: "https://via.placeholder.com/300",
  },
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fakeData.length);
  };

  const displayedItems = fakeData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

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
              <img src={item.image} alt={item.title} />
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
