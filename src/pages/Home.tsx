import Carousel from "../components/Carousel/carousel";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Carousel />
      <div className="catalogButton">
        <Link to={"catalog"}>
          <button>Catalog</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
