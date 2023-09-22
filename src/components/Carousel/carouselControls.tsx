import "./carouselControls.css";
import Button from "../Button/button";

interface CarouselControlsProps {
  currentIndex: number;
  dataLength: number;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  currentIndex,
  dataLength,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <>
      <div className="buttonsWrapper">
        <Button
          className={"prevButton"}
          handleClick={onPrevClick}
          textButton={"<"}
          disabled={currentIndex === 0}
        />
        <Button
          className={"nextButton"}
          handleClick={onNextClick}
          textButton={">"}
          disabled={currentIndex + 3 >= dataLength}
        />
      </div>
    </>
  );
};

export default CarouselControls;
