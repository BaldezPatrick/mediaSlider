import { useState, useEffect } from "react";
import CarouselItems from "./carouselItem";
import CarouselControls from "./carouselControls";
import axios from "axios";

interface CarouselItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [data, setData] = useState<CarouselItem[]>([]);
  const itemsPerPage = 3;

  useEffect(() => {
    axios
      .get<CarouselItem[]>("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        const items: CarouselItem[] = res.data.slice(0, 10);
        setData(items);
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
        <CarouselControls
          currentIndex={currentIndex}
          dataLength={data.length}
          onPrevClick={handlePrev}
          onNextClick={handleNext}
        >
          <div className="carouselItems">
            {limitedDsiplayedItems.map((item) => (
              <CarouselItems key={item.id} item={item} />
            ))}
          </div>
        </CarouselControls>
      </div>
    </>
  );
};

export default Carousel;
