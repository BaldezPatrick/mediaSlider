import { useState, useEffect } from "react";
import CarouselItems from "./carouselItem";
import CarouselControls from "./carouselControls";
import axios from "axios";
import "./carousel.css";

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
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  useEffect(() => {
    axios
      .get<CarouselItem[]>("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        axios
          .get<CarouselItem[]>("https://jsonplaceholder.typicode.com/posts")
          .then((resPost) => {
            const maxItemsOnSlider = window.innerWidth < 768 ? 12 : 10;
            const combinedItems: CarouselItem[] = res.data
              .slice(0, maxItemsOnSlider)
              .map((photoItem) => {
                const matchingPostItem = resPost.data.find(
                  (postItem) => postItem.id === photoItem.id
                );
                if (matchingPostItem) {
                  return {
                    ...photoItem,
                    title: matchingPostItem.title,
                    body: matchingPostItem.body,
                  };
                } else {
                  return {
                    ...photoItem,
                    body: "",
                  };
                }
              });
            setData(combinedItems);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error("API error: ", err);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = window.innerWidth < 768 ? 1 : 3;
      setItemsPerPage(newItemsPerPage);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
        <div className="carouselItems">
          {limitedDsiplayedItems.map((item) => (
            <CarouselItems key={item.id} item={item} />
          ))}
        </div>
        <CarouselControls
          currentIndex={currentIndex}
          dataLength={data.length}
          onPrevClick={handlePrev}
          onNextClick={handleNext}
        />
      </div>
    </>
  );
};

export default Carousel;
