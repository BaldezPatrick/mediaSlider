import { ReactNode } from "react";

interface CarouselControlsProps {
  children: ReactNode;
  currentIndex: number;
  dataLength: number;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  children,
  currentIndex,
  dataLength,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <>
      <button
        className="prevButton"
        onClick={onPrevClick}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      {children}
      <button
        className="nextButton"
        onClick={onNextClick}
        disabled={currentIndex + 3 >= dataLength}
      >
        &gt;
      </button>
    </>
  );
};

export default CarouselControls;
