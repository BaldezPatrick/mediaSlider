import "./carouselItem.css";
import { Link } from "react-router-dom";

interface SliderItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface CarouselItemsProps {
  item: SliderItem;
}

const CarouselItems: React.FC<CarouselItemsProps> = ({ item }) => {
  return (
    <>
      <Link to={`/article/${item.id}`} onClick={handleClick}>
      <article key={item.id} className="carouselItem">
        <img src={item.url} alt={item.title} />
        <h2>{item.title}</h2>
      </article>
      </Link>
    </>
  );
};

export default CarouselItems;
