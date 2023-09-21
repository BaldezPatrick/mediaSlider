import Carousel from "../components/Carousel/carousel";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Carousel />
      <div className="catalogButton">
        <Link to={"catalogo"}>
          <button>Catálogo</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
