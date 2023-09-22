import "./carouselControls.css";

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
        <button
          className="prevButton"
          onClick={onPrevClick}
          disabled={currentIndex === 0}
        >
          <strong>&lt;</strong>
        </button>
        <button
          className="nextButton"
          onClick={onNextClick}
          disabled={currentIndex + 3 >= dataLength}
        >
          <strong>&gt;</strong>
        </button>
      </div>
    </>
  );
};

export default CarouselControls;
