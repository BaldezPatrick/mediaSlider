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
      <article key={item.id} className="carouselItem">
        <img src={item.url} alt={item.title} />
        <h2>{item.title}</h2>
      </article>
    </>
  );
};

export default CarouselItems;
