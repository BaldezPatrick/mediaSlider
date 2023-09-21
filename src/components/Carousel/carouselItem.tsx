import { useItemContext } from "../../context/sliderItemContext";
import "./carouselItem.css";
import { Link } from "react-router-dom";

interface SliderItem {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  body: string;
}

interface CarouselItemsProps {
  item: SliderItem;
}

const CarouselItems: React.FC<CarouselItemsProps> = ({ item }) => {
  const { setItemDetails } = useItemContext();

  const handleClick = () => {
    setItemDetails(item.id, item.title, item.url, item.thumbnailUrl, item.body);
  };
  return (
    <>
      <Link to={`/artigo/${item.id}`} onClick={handleClick}>
        <article key={item.id} className="carouselItem">
          <img src={item.url} alt={item.title} />
          <h2>{item.title}</h2>
        </article>
      </Link>
    </>
  );
};

export default CarouselItems;
