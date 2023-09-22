import Carousel from "../components/Carousel/carousel";
import { Link } from "react-router-dom";
import "./Home.css";
import Button from "../components/Button/button";

const Home: React.FC = () => {
  return (
    <>
      <Carousel />
      <div className="catalogButton">
        <Link to={"catalogo"}>
          <Button textButton={"Catálogo"} />
        </Link>
      </div>
    </>
  );
};

export default Home;
